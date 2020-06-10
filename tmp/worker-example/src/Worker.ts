// Worker.ts
const ctx: Worker = self as any;

// Demo 1---------------------------
// // Post data to parent thread
// ctx.postMessage('Worker says hi');

// ctx.addEventListener('message', ev => {
//   console.log('[Worker Thread] Main sent:', ev.data);

//   if (ev.data == 'start') {
//     console.log('[Worker Thread] Start For Loop');
//     for (let i = 0; i < 9999999999; i++) {}
//     console.log('[Worker Thread] End For Loop');
//     ctx.postMessage('end');
//   }
// });
// // Demo 1---------------------------


