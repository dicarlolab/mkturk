import { Utils } from "./Utils";

export class ScreenFunctions {
  mkutil: Utils;
  
  constructor() {
    this.mkutil = new Utils();
  }

  public refreshCanvasSettings(task: any, canvas: any, env: any) {
    // Match-to-Sample
    if (task.TestON <= 0) {
      if (task.SampleOFF > 0) {
        canvas.sequence = ['blank', 'sample', 'blank', 'test'];
        canvas.tsequence = [
          0, 100, 100 + task.SampleON, 100 + task.SampleON + task.SampleOFF
        ];
      }
      else if (task.SampleOFF <= 0) {
        canvas.sequence = ['blank', 'sample', 'test'];
        canvas.tsequence = [
          0, 100, 100 + task.SampleON
        ];
      }
    }

    // Same-Different
    else if (task.TestON > 0) {
      if (task.SampleOFF > 0 && task.TestOFF > 0) {
        canvas.sequence = [
          'blank', 'sample', 'blank', 'test', 'blank', 'choice'
        ];
        
        canvas.tsequence = [
          0, 100, 100 + task.SampleON, 100 + task.SampleON + task.SampleOFF,
          100 + task.SampleON + task.SampleOFF + task.TestON,
          100 + task.SampleON + task.SampleOFF + task.TestON + task.TestOFF
        ];
      }
      
      else if (task.SampleOFF <= 0 && task.TestOFF > 0) {
        canvas.sequence = ['blank', 'sample', 'test', 'blank', 'choice'];
        canvas.tsequence = [
          0, 100, 100 + task.SampleON, 100 + task.SampleON + task.SampleOFF,
          100 + task.SampleON + task.SampleOFF + task.TestON
        ];
      }

      else if (task.SampleOFF > 0 && task.TestON <= 0) {
        canvas.sequence = ['blank', 'sample', 'blank', 'test', 'choice'];
        canvas.tsequence = [
          0, 100, 100 + task.SampleON, 100 + task.SampleON + task.SampleOFF,
          100 + task.SampleON + task.SampleOFF + task.TestON
        ];
      }

      if (task.SampleOFF <= 0 && task.TestOFF <= 0) {
        canvas.sequence = ['blank', 'sample', 'test', 'choice'];
        canvas.tsequence = [
          0, 100, 100 + task.SampleON, 100 + task.SampleON + task.TestON
        ];
      }
    }
  
    // Adjust length of reward screen based on reward amount
    canvas.tsequencepost[2] = canvas.tsequencepost[1] + env.RewardDuration * 1000;

    // Adjust location of canvas based on species-specific setup
    if (typeof(task.HeadsupDisplayFraction) != 'undefined') {
      canvas.headsupfraction = task.HeadsupDisplayFraction;
    } else {
      if (task.Species == 'macaque' || task.Species == 'human') {
        canvas.headsupfraction = 0;
      }
      else if (task.Species == 'marmost') {
        canvas.headsupfraction = 1 / 3 - 0.06;
      }
    }

    if (canvas.headsupfraction == 0) {
      let headsUpText 
        = document.querySelector('#headsuptext') as HTMLParagraphElement
      headsUpText.innerHTML = '';

      let headsUpTextDevices 
        = document.querySelector('#headsuptextdevices') as HTMLParagraphElement;
      headsUpTextDevices.innerHTML = '';
    }

    //return canvas;
  }

  public writeTextOnBlankCanvas(canvas: any, str: string, x: number, y: number) {
    let canvasObj = canvas.obj.blank;
    let visibleContext = canvasObj.getContext('2d');
    visibleContext.textBaseLine = 'hanging';
    visibleContext.fillStyle = 'white';
    visibleContext.font = '18px Verdana';
    visibleContext.fillText(str, x, y);
  }

  public updateStatusText(text: string) {
    let textObj 
      = document.querySelector('#headsuptext') as HTMLParagraphElement;
    textObj.innerHTML = text;
  }

  public setupCanvasHeadsUp(CANVAS: any, FLAGS: any) {
    let canvasObj = document.querySelector('#canvasheadsup') as HTMLCanvasElement;
    canvasObj.width = document.body.clientWidth;
    canvasObj.height 
      = Math.round(document.body.clientHeight * CANVAS.headsupfraction);
    CANVAS.offsettop = canvasObj.height;

    let pumpFlushBtn 
      = document.querySelector('#pumpflush') as HTMLButtonElement;
    let pumpTriggerBtn 
      = document.querySelector('#pumptrigger') as HTMLButtonElement;
    let connectScaleBtn
      = document.querySelector('#connectblescale') as HTMLButtonElement;
    
    if (CANVAS.headsupfraction == 0) {
      canvasObj.style.display = 'none';

      // hide buttons for triggering the pump
      pumpFlushBtn.style.display = 'none';
      pumpTriggerBtn.style.display = 'none';

    } else {
      canvasObj.style.display = 'block';

      // show buttons for triggering pump
      pumpFlushBtn.style.display = 'block';
      pumpFlushBtn.style.visibility = 'visible';
      pumpTriggerBtn.style.display = 'block';
      pumpTriggerBtn.style.visibility = 'visible';
      connectScaleBtn.style.display = 'block';
      connectScaleBtn.style.visibility = 'visible';

      pumpFlushBtn.addEventListener('pointerup', ev => {
        ev.preventDefault();
        this.mkutil.runPump('flush');
      }, false);

      pumpTriggerBtn.addEventListener('pointerup', ev => {
        ev.preventDefault();
        this.mkutil.runPump('trigger');
      }, false);
    }

    let context = canvasObj.getContext('2d');
    context!.fillStyle = '#202020';
    context!.fillRect(0, 0, canvasObj.width, canvasObj.height);
    // TODO: canvasObj.addEventListener('touchstart', touchstart_listener, false);
    // canvasObj.addEventListener('touchstart', ev => {
    //   if (typeof ev === 'undefined') {
    //     return;
    //   }

    //   if (!FLAGS.touchGeneratorCreated) {
    //     // wait for touch generator promise to be created before registering
    //     // new touches
    //   } else {

    //   }
    // });

  }

  public setupCanvas(canvasObj: any, CANVAS: any, winWidth: number, winHeight: number) {
    canvasObj.style.top = CANVAS.offsettop + 'px';
    canvasObj.style.left = CANVAS.offsetleft + 'px';
    canvasObj.width = winWidth - CANVAS.offsetleft;
    canvasObj.height = winHeight - CANVAS.offsettop;
    canvasObj.style.margin = '0 auto';
    canvasObj.style.display = 'block'; // visible
  }







}