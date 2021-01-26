// Arduino code for mkturk:
// Integrated with pump code
// Parses tag from software serial stream to transmit as a word over WebUSB

#include <WebUSB.h>
#include <SoftwareSerial.h>

WebUSB WebUSBSerial(1, "webusb.github.io/arduino/demos");
#define Serial WebUSBSerial

// PUMP
const byte numChars = 32;
char receivedPumpChars[numChars];
boolean newPumpCommand = false;
const int pumpPIN=2;
const int pumpLEDPIN=7;
int pumpdur;

// RFID
const byte numCharsTag = 12;
char receivedRFIDChars[numCharsTag+1]; // variable to store the data from the serial port
boolean newRFIDTag = false;
SoftwareSerial mySerial(10, 11);
int RFIDResetPin = 11; 

char startMarker = '{';
char endMarker = '}';

// EYE TRACKER 
SoftwareSerial mySerialEYE(8, 9);
byte val = 0;

void setup() {
  pinMode(pumpPIN, OUTPUT);
  pinMode(pumpLEDPIN, OUTPUT);
  while (!Serial) {
    ;
  }
  Serial.begin(57600); //ES
  Serial.println("<Arduino is ready> Sketch begins \r\n>");
  Serial.flush();
  
  pinMode(RFIDResetPin, OUTPUT); 
  digitalWrite(RFIDResetPin, LOW); 
  digitalWrite(RFIDResetPin, HIGH);
  mySerial.begin(9600);


  mySerialEYE.begin(57600); //ES
}

void loop() {
  // receive pump || rfid data || eye tracker data
  recvEyeTracker();
  recvWithStartEndMarkers();
  readRFIDTag();

  // act on pump || rfid
  turnOnPump();
  transmitTag();
  resetReader();  
}

//EYE TRACKER
void recvEyeTracker(){
  while(mySerialEYE.available() > 0) {
      val =  mySerialEYE.read();
      Serial.write(val);
      Serial.flush();
  }
  
}


// PUMP
void recvWithStartEndMarkers() {
    static boolean recvInProgress = false;
    static byte ndx = 0;
    char rc;
 
    while (Serial && Serial.available() > 0 && newPumpCommand == false) {
        rc = Serial.read();

        if (recvInProgress == true) {
            if (rc != endMarker) {
                receivedPumpChars[ndx] = rc;
                ndx++;
                if (ndx >= numChars) {
                    ndx = numChars - 1;
                }
            }
            else {
                receivedPumpChars[ndx] = '\0'; // terminate the string
                recvInProgress = false;
                ndx = 0;
                newPumpCommand = true;
            }
        }

        else if (rc == startMarker) {
            recvInProgress = true;
        }
    }
}

void turnOnPump() {
  if (newPumpCommand == true) {
    Serial.print("Received from WebUSB ... ");
    Serial.println(receivedPumpChars);
    Serial.flush();
    
    pumpdur = atoi(receivedPumpChars);
    digitalWrite(pumpPIN,HIGH);
    digitalWrite(pumpLEDPIN,HIGH);
    delay(pumpdur);
    digitalWrite(pumpPIN,LOW);
    digitalWrite(pumpLEDPIN,LOW);
    newPumpCommand = false;
    
    Serial.print("Pump triggered, dur=");
    Serial.print(pumpdur);
    Serial.flush();
  }
}

// RFID
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
      ndx=0;
      receivedRFIDChars[ndx] = rc;
      ndx++;
    }
  }
}

void transmitTag(){
  if (newRFIDTag == true){
    Serial.print("Received RFID Tag on SoftwareSerial ... ");
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
  }
}
