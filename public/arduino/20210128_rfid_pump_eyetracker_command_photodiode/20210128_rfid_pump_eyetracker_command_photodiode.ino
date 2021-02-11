// Arduino code for mkturk:
// Integrated with pump code
// Parses tag from software serial stream to transmit as a word over WebUSB

#include <WebUSB.h>
#include <SoftwareSerial.h>

WebUSB WebUSBSerial(1, "webusb.github.io/arduino/demos");
#define Serial WebUSBSerial

// (1) PUMP
const byte numChars = 32;
char receivedPumpChars[numChars];
boolean newPumpCommand = false;
const int pumpPIN=2;
const int pumpLEDPIN=7;
int pumpdur;
char pumpStartMarker = '{';
char pumpEndMarker = '}';
char pumpOutMarker[] = "pu";

// (2) SAMPLE COMMAND
char receivedSampleCommandChars[numChars];
boolean newSampleCommand = false;
const int sampleCommandPin = A2; //CAMERA TRIGGER PIN, also for future external devices
const int sampleCommandLEDPIN=5;
int samplecommand;
char sampleCommandStartMarker = '$';
char sampleCommandEndMarker = '%';
char sampleCommandOutMarker[] = "sa";

// (3) PHOTODIODE
int photodiodePin = A5; 
const int photodiodeLEDPIN=4;
char photodiodeOutMarker[] = "ph";
int photodiodeval_old;
int photodiodeval_new;

// (4) EYETRACKER
SoftwareSerial mySerialEYE(8, 9);
byte val = 0; 

// (5) RFID
const byte numCharsTag = 12;
char receivedRFIDChars[numCharsTag+1]; // variable to store the data from the serial port
boolean newRFIDTag = false;
SoftwareSerial mySerial(10, 11);
int RFIDResetPin = 11;
const int RFIDLEDPIN=6;

char startMarker = '{';
char endMarker = '}';

void setup() {
  pinMode(sampleCommandPin, OUTPUT);
  pinMode(sampleCommandLEDPIN, OUTPUT);

  pinMode(pumpPIN, OUTPUT);
  pinMode(pumpLEDPIN, OUTPUT);

  pinMode(photodiodeLEDPIN, OUTPUT);  

  pinMode(RFIDLEDPIN, OUTPUT);

  while (!Serial) {
    ;
  }
  Serial.begin(57600);
  Serial.println("<Arduino is ready> Sketch begins \r\n>");
  Serial.flush();
  
  pinMode(RFIDResetPin, OUTPUT);
  digitalWrite(RFIDResetPin, LOW);
  digitalWrite(RFIDResetPin, HIGH);
  mySerial.begin(9600);

  mySerialEYE.begin(57600);
}

void loop() {
  // receive (1) samplecommand / (2) pumpcommand || (3) photodiode || (4) eye tracker data || (5) rfid data
  recvWithStartEndMarkers(); //sample or pump command
  readTransmitPhotodiode();
  recvEyeTracker();
  readRFIDTag();
  
  // act on pump || rfid
  turnOnOffExternalDevice();
  turnOnPump();
  transmitTag();
  resetReader();
}


// (1) SAMPLE_COMMAND || (2) PUMP
void recvWithStartEndMarkers() {
    static boolean sampleCommandRecvInProgress = false;
    static boolean pumpRecvInProgress = false;
    static byte ndx = 0;
    char rc;
    while (Serial && Serial.available() > 0 && newPumpCommand == false && newSampleCommand == false) { //When newPumpCommand is true you actually do the triggering
        rc = Serial.read();
        
        if (pumpRecvInProgress == true) {
            if (rc != pumpEndMarker) {
                receivedPumpChars[ndx] = rc;
                ndx++;
                if (ndx >= numChars) {
                    ndx = numChars - 1;
                }
            }
            else {
                receivedPumpChars[ndx] = '\0'; // terminate the string
                pumpRecvInProgress = false;
                ndx = 0;
                newPumpCommand = true;
            }
        }
        else if (sampleCommandRecvInProgress == true){
          if (rc != sampleCommandEndMarker){
            receivedSampleCommandChars[ndx] = rc;
            ndx++;
          }
             else {
                receivedSampleCommandChars[ndx] = '\0'; // terminate the string
                sampleCommandRecvInProgress = false;
                ndx = 0;
                newSampleCommand = true;
          }
        }
        else if (rc == sampleCommandStartMarker){
          sampleCommandRecvInProgress = true;
        }
        else if (rc == pumpStartMarker) {
            pumpRecvInProgress = true;
        }
    }
}//IF SAMPLECOMMAND OR PUMP

// (1) EXTERNAL DEVICE TRIGGER OUT
void turnOnOffExternalDevice(){
  if (newSampleCommand == true) {
    samplecommand = atoi(receivedSampleCommandChars);
    Serial.print(sampleCommandOutMarker);
    Serial.print(samplecommand);
    Serial.flush();

    if ( samplecommand == 1){
      digitalWrite(sampleCommandPin,HIGH);
      digitalWrite(sampleCommandLEDPIN,HIGH);
    }
    if ( samplecommand == 0){
      digitalWrite(sampleCommandPin,LOW);
      digitalWrite(sampleCommandLEDPIN,LOW);
    }    
    newSampleCommand = false;
  }
}

// (2) PUMP TRIGGER OUT
void turnOnPump() {
  if (newPumpCommand == true) {    
    pumpdur = atoi(receivedPumpChars);
    Serial.print(pumpOutMarker);
    Serial.print(pumpdur);
    Serial.flush();

    digitalWrite(pumpPIN,HIGH);
    digitalWrite(pumpLEDPIN,HIGH);
    delay(pumpdur);
    digitalWrite(pumpPIN,LOW);
    digitalWrite(pumpLEDPIN,LOW);
    newPumpCommand = false;
  }
}

// (3) PHOTODIODE
void readTransmitPhotodiode(){
  // Read photodiode value
  photodiodeval_old = photodiodeval_new;
  photodiodeval_new = analogRead(photodiodePin);

  // Cross threshold --> Transmit out 
  if ((photodiodeval_old < 375 && photodiodeval_new > 375) || (photodiodeval_old > 325 && photodiodeval_new < 325)){
    Serial.print(photodiodeOutMarker);
    Serial.print(photodiodeval_new);
    Serial.flush();

    if (photodiodeval_old < 375 && photodiodeval_new > 375){
      digitalWrite(photodiodeLEDPIN,HIGH);
    }
    else{
      digitalWrite(photodiodeLEDPIN,LOW);
    }    
  }//if (rose above upper threshold) || (fell below lower threshold)
}

//(4) EYE TRACKER
void recvEyeTracker(){
  while(mySerialEYE.available() > 0) {
      val =  mySerialEYE.read();
      Serial.write(val);
      Serial.flush();
  }
}

// (5) RFID
void readRFIDTag() {
  static boolean recvInProgress = false;
  static byte ndx = 0;
  char startMarker = '0';
  char rc;
  
  while(mySerial.available()>0 && newRFIDTag == false) {
    rc = mySerial.read();
    
    if (recvInProgress == true){
      if (ndx < numCharsTag){
        receivedRFIDChars[ndx] = rc;
        ndx++;
      }
      else {
        receivedRFIDChars[ndx] = '\0'; // terminate the string
        ndx = 0;
        recvInProgress = false;
        newRFIDTag = true;
      }
    }
    else if (rc == startMarker){
      recvInProgress = true;
      digitalWrite(RFIDLEDPIN,HIGH);
      ndx=0;
      receivedRFIDChars[ndx] = rc;
      ndx++;
    }
  }
}

void transmitTag(){
  if (newRFIDTag == true){
    Serial.print("Received RFID: ");
    Serial.print(startMarker);
    Serial.print("tag");
    Serial.print(receivedRFIDChars);
    Serial.println(endMarker);
    Serial.flush();
  }
}

//Reset the RFID reader to read again.
void resetReader(){
  if (newRFIDTag == true){
    digitalWrite(RFIDResetPin, LOW);
    digitalWrite(RFIDResetPin, HIGH);
    newRFIDTag = false;
    digitalWrite(RFIDLEDPIN,LOW);
  }
}
