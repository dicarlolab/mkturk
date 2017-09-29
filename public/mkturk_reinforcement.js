// Functions for delivering reinforcement

class ReinforcerTemplate{
    constructor(){

    }
    async deliver_reinforcement(nreward){

    }
}

class MonetaryReinforcer{
    constructor(bonus_usd_per_correct){
        this.bonus_total = 0
        this.bonus_per_correct = bonus_usd_per_correct || 0.0007 // one extra dollar for every 1000 correct 
    }

    async deliver_reinforcement(nreward){
        if(nreward >=1){
            this.bonus_total = this.bonus_total + this.bonus_per_correct
            console.log('Running monetary bonus amount', Math.round(this.bonus_total*1000)/1000)
            //CANVAS.sequencepost[1]="reward";
            //CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]

            SP.playSound('reward_sound');

            var p1 = SD.displayReward(100)// (CANVAS.sequencepost,CANVAS.tsequencepost)
            await Promise.all([p1])
            
        }
        else if(nreward == 0){
            //punish

            SP.playSound('punish_sound');
            var p1 = await SD.displayPunish(TS.Experiment[TS.state.current_stage]['PunishTimeOut']) // (CANVAS.sequencepost,CANVAS.tsequencepost);
        }
        SUBJECT['bonus_usd'] = this.bonus_total 
    }

}
class JuiceReinforcer{
    constructor(){


    }

    async deliver_reinforcement(nreward){
        if(nreward >=1){

            var RewardDuration = this.setJuicerRewardDuration();
            

            SP.playSound('reward_sound');
            // Async as to not slow the monkey down
            var p1 = SD.displayReward(100)

            if(ble.connected == false){
              await p1
            }
            else if (ble.connected == true){
                var p2 = writepumpdurationtoBLE(Math.round(RewardDuration*1000))
                await Promise.all([p1, p2])
            }
            
        }
        else if(nreward == 0){
            // punish
            
            SP.playSound('punish_sound');
            var p1 = await SD.displayPunish(TS.Experiment[TS.state.current_stage]['PunishTimeOut']) 
        }
    }

    setJuicerRewardDuration(){
      var m = 0;
      var b = 0;
      if (SUBJECT['Pump'] == 1){
        // m = 1.13; b = 15.04;
        m = 0.99; b = 14.78;
      } //peristaltic (adafruit)
      else if (SUBJECT['Pump'] == 2){
        // m = 3.20; b = -15.47;
        m = 1.40; b = -58.77;
      } //submersible (tcs)
      else if (SUBJECT['Pump'] == 3){
        // m = 0.80; b = -3.00;
        m=0.91; b = -15;
      } //diaphragm (tcs)
      else if (SUBJECT['Pump'] == 4){
        m = 0.0531; b=-1.2594;
      } //piezoelectric (takasago)
      else if (SUBJECT['Pump'] == 5){
        m = 2.4463; b=53.6418;
      } //new diaphragm (tcs)
      else if (SUBJECT['Pump'] == 6){
        if (SUBJECT['Liquid']==1 || SUBJECT['Liquid']==3){
          m=0.1251; b=-0.0833; //1=water 2=water-condensed milk 3=marshmallow slurry (4/30mL)
        }
        else if (SUBJECT['Liquid']==2){
          m=0.0550; b=0.6951; //water-condensed milk (50/50)
        }
      } //piezoelectric 7mL/min (takasago)
      return (SUBJECT['RewardPer1000Trials'] - b)/m/1000;
      
    }
}