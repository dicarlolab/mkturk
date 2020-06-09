// Worker.ts
const ctx: Worker = self as any;

// Post data to parent thread
ctx.postMessage('Worker says hi');

ctx.addEventListener('message', ev => {
  console.log('[Worker Thread] Main sent:', ev.data);
});