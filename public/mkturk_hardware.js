class SoundPlayer{ 
  constructor(DIO, sound_filepath_prefix){
    // todo: feed in explicit filepaths here and load; 
    // write playSound(filename)
      this.DIO = DIO
      this.sounds = {
        soundfile_suffixes: [0,1,2,3,4,5],
        buffer: {},
      }

      this.SOUND_FILEPREFIX = sound_filepath_prefix

      //Audio pulses for reward
      this.audiocontext = new (window.AudioContext || window.webkitAudioContext)();
      this.gainNode = this.audiocontext.createGain()
      this.gainNode.connect(this.audiocontext.destination)
  }

  loadSoundfromDropbox2(src,audiocontext, sounds, idx){
    var _this = this
         return new Promise(function(resolve,reject){
          _this.DIO.dbx.filesDownload({path:this.SOUND_FILEPREFIX + src + ".wav" }).then(function(data){
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
    var sound_data_array = []
    var _this = this 
    for (var i_sound = 0; i_sound < this.sounds.soundfile_suffixes.length; i_sound ++){
      var soundpath = this.SOUND_FILEPREFIX + this.sounds.soundfile_suffixes[i_sound] + ".wav"
      try{
        var sounddata = await this.DIO.load_sound(soundpath)

        var reader = new FileReader()
        console.log(i_sound, sounddata)
        var local_isound = i_sound // otherwise dependent on which promises download first...weird
        reader.onload = async function(e){
          console.log(reader.result)
           var _soundbuffer = await _this.audiocontext.decodeAudioData(reader.result)
           _this.sounds.buffer[local_isound] = _soundbuffer;
          }
        await reader.readAsArrayBuffer(sounddata)
        }
      
      catch(error){
        console.log('SP.build error', error)
      }

    }

    console.log(this)
    await SP.playSound(3)

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



