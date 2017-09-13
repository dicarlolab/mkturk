class SoundPlayer{ 
  constructor(){
    // todo: feed in explicit filepaths here and load; 
    // write playSound(filename)
    
      this.num_redundant_buffers = 4; 

      this.sound_filepaths = [ 
      'sounds/au0.wav',
      'sounds/au1.wav',
      'sounds/au2.wav', // chime
      'sounds/au3.wav', // punish sound
      'sounds/au4.wav',
      'sounds/au5.wav'] // hard coded; part of MonkeyTurk installation (path is relative to mkturk.html address)

      this.sound_objects = []
      this.current_sound_counter = 0
}

  async build(){
    for (var i = 0; i < this.sound_filepaths.length; i++){
      this.sound_objects[i] = []
      for (var j = 0; j<this.num_redundant_buffers; j++){
        var audio = new Audio(this.sound_filepaths[i])
        if (i==0){
          audio.volume=0.15; //set boost pedal to 15% volume
        }
        else if (i==2 | i==3){
          audio.volume=0.15; //set boost pedal to 5% volume
        }
        
        this.sound_objects[i].push(audio)
      }
    }

    //await SP.playSound(2)
    return 
  }

  async playSound(idx){
    this.sound_objects[idx][this.current_sound_counter].play() // because sounds do not get played if requested to be played before they are over from a previous call 
    this.current_sound_counter = (this.current_sound_counter+1) % this.num_redundant_buffers
    return 
  }
}



