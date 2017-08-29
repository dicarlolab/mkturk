class SoundPlayer{ 
  constructor(){
    // todo: feed in explicit filepaths here and load; 
    // write playSound(filename)

      this.sounds = {
        soundfile_suffixes: [0,1,2,3,4,5],
        buffer: [],
      }

      //Audio pulses for reward
      this.audiocontext = new (window.AudioContext || window.webkitAudioContext)();
      this.gainNode = this.audiocontext.createGain()
      this.gainNode.connect(this.audiocontext.destination)
  }

  loadSoundfromDropbox2(src,audiocontext, sounds, idx){
         return new Promise(function(resolve,reject){
          dbx.filesDownload({path: SOUND_FILEPREFIX + src + ".wav"}).then(function(data){
          var reader = new FileReader()
          reader.onload = function(e){
            audiocontext.decodeAudioData(reader.result).then(function(buffer){
              sounds.buffer[idx] = buffer;
              resolve(idx)
            })
          }
          reader.readAsArrayBuffer(data.fileBlob)
        })
        .catch(function(error){
          console.error(error)
        })
        })
  }
  async build(){
    var soundpromises = []
    for (var i = 0; i < this.sounds.soundfile_suffixes.length; i ++){
        soundpromises.push(this.loadSoundfromDropbox2(i, this.audiocontext, this.sounds, i))
    }

    //this.sounds.soundfile_suffixes.map(this.loadSoundfromDropbox2); //create array of sound load Promises
    await Promise.all(soundpromises); //simultaneously evaluate array of sound load promises
  }

  async playSound(idx){
    this.audiocontext.resume()
    var source = this.audiocontext.createBufferSource(); // creates a sound source
    source.buffer = this.sounds.buffer[idx];                    // tell the source which sound to play
    if (idx==0){
      this.gainNode.gain.value=0.15; //set boost pedal to 15% volume
    }
    else if (idx==2 | idx==3){
      this.gainNode.gain.value=0.15; //set boost pedal to 5% volume
    }
    source.connect(this.gainNode);
    // gainNode.connect(audiocontext.destination); //Connect boost pedal to output
    // source.connect(audiocontext.destination);       // connect the source to the context's destination (the speakers)
    source.start(0);                        // play the source now
  }

  // Promise: dispense reward (through audio control)
  _legacy_driveJuicer_via_Audio(){
    console.log('Legacy dispense reward')
    return 
    return new Promise(function(resolve,reject){
      this.audiocontext.resume()
      var oscillator = this.audiocontext.createOscillator();
      this.gainNode.gain.value=1;
      if (TASK.Pump == 1){
        oscillator.type='square'; //Square wave
        oscillator.frequency.value=25; //frequency in hertz       
      } //peristaltic (adafruit)
      else if (TASK.Pump==2){
        oscillator.type='square'; //Square wave
        oscillator.frequency.value=0.1; //frequency in hertz
      } //submersible (TCS)
      else if (TASK.Pump==3){
        oscillator.type='square'; //Square wave
        oscillator.frequency.value=10; //frequency in hertz   
      } //diaphragm (TCS)
      else if (TASK.Pump==4){
        oscillator.type='square'; //Square wave
        oscillator.frequency.value=0.1; //frequency in hertz        
      } //piezoelectric (takasago)
      else if (TASK.Pump==5){
        oscillator.type='square';
        oscillator.frequency.value=0.1;
      } //diaphragm new (TCS)
      else if (TASK.Pump==6){
        oscillator.type='square'; //Square wave
        oscillator.frequency.value=0.1; //frequency in hertz        
      } //piezoelectric 7ml/min (takasago)
      // oscillator.connect(audiocontext.destination); //Connect sound to output
      // //var gainNode = audiocontext.createGainNode(); //Create boost pedal
      // //gainNode.gain.value=0.3; //set boost pedal to 30% volume
      oscillator.connect(gainNode);
      // //gainNode.connect(audiocontext.destination); //Connect boost pedal to output
      // // oscillator.onended=function(){
      // //   console.log('done with reward pulse');
      // //   resolve(1);
      // // }
      var currentTime= this.audiocontext.currentTime;


      oscillator.start(currentTime);
      oscillator.stop(currentTime + ENV.RewardDuration);
      setTimeout(function(){console.log('sound done'); resolve(1);},ENV.RewardDuration*1000);
    }).then();
  }
}



