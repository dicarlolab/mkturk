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
          DIO.dbx.filesDownload({path: SOUND_FILEPREFIX + src + ".wav"}).then(function(data){
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

  
}



