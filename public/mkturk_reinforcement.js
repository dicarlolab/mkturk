// Functions for delivering reinforcement


class ReinforcerTemplate{
    constructor(){

    }
    async deliver_reinforcement(nreward){

    }

}

class MonetaryReinforcer{
    constructor(){
        this.payment_minimum = 0.1 // todo: move to place where it makes sense
        this.bonus_total = 0
        this.bonus_per_correct = 0.001 // one extra dollar for every 1000 correct 
    }

    async deliver_reinforcement(nreward){
        if(nreward >=1){
            this.bonus_total = this.bonus_total + this.bonus_per_correct
            console.log('Running monetary bonus amount', this.bonus_total)
            CANVAS.sequencepost[1]="reward";
            CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]

            SP.playSound(2);

            var p1 = SD.displayScreenSequence(CANVAS.sequencepost,CANVAS.tsequencepost)
            await Promise.all([p1])
            
        }
        else if(nreward == 0){
            //punish
            CANVAS.sequencepost[1] = "punish";
            CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+TS.EXPERIMENT[TS.state.current_stage_index]['PunishTimeOut'];
            SP.playSound(3);
            var p1 = await SD.displayScreenSequence(CANVAS.sequencepost,CANVAS.tsequencepost);
        }
    }

}
class JuiceReinforcer{
    constructor(reinforcement_type){


    }

    async deliver_reinforcement(nreward){
        if(nreward >=1){

            var RewardDuration = this.setJuicerRewardDuration();
            CANVAS.sequencepost[1]="reward";
            CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+RewardDuration*1000;

            SP.playSound(2);

            var p1 = SD.displayScreenSequence(CANVAS.sequencepost,CANVAS.tsequencepost)
            if (ble.connected == false){
            await Promise.all([p1])
            }
            else if (ble.connected == true){
                var p2 = writepumpdurationtoBLE(Math.round(RewardDuration*1000))
                await Promise.all([p1, p2])
            }
        }
        else if(nreward == 0){
            //punishs
            CANVAS.sequencepost[1] = "punish";
            CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+TS.EXPERIMENT[TS.state.current_stage_index]['PunishTimeOut'];
            SP.playSound(3);
            var p1 = await SD.displayScreenSequence(CANVAS.sequencepost,CANVAS.tsequencepost);
        }

    }

    setJuicerRewardDuration(){
      var m = 0;
      var b = 0;
      if (SubjectSettings['Pump'] == 1){
        // m = 1.13; b = 15.04;
        m = 0.99; b = 14.78;
      } //peristaltic (adafruit)
      else if (SubjectSettings['Pump'] == 2){
        // m = 3.20; b = -15.47;
        m = 1.40; b = -58.77;
      } //submersible (tcs)
      else if (SubjectSettings['Pump'] == 3){
        // m = 0.80; b = -3.00;
        m=0.91; b = -15;
      } //diaphragm (tcs)
      else if (SubjectSettings['Pump'] == 4){
        m = 0.0531; b=-1.2594;
      } //piezoelectric (takasago)
      else if (SubjectSettings['Pump'] == 5){
        m = 2.4463; b=53.6418;
      } //new diaphragm (tcs)
      else if (SubjectSettings['Pump'] == 6){
        if (SubjectSettings['Liquid']==1 || SubjectSettings['Liquid']==3){
          m=0.1251; b=-0.0833; //1=water 2=water-condensed milk 3=marshmallow slurry (4/30mL)
        }
        else if (SubjectSettings['Liquid']==2){
          m=0.0550; b=0.6951; //water-condensed milk (50/50)
        }
      } //piezoelectric 7mL/min (takasago)
      return (SubjectSettings['RewardPer1000Trials'] - b)/m/1000;
      
    }



}