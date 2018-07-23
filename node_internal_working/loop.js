//* node myFile.js */

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New Timers, OSTasks, Operations are recorded from myFile running
myFile.runContents(); // representing running the file

function shouldContinue() {
  // Check one :Any pending setTimeout, setInterval or setImmediate ?
  // Check two : Any pending operating system tasks ? (For eg: http server listening to port )
  // Check three : Any long running operations are still being executed?
  //              (For eg:a function call inside fs module to read/write some file from HDD)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}
// Entire while loop body executes in one 'tick'
// Node checks whether it should allow the event loop to execute
// In the event loop world, we refer to the execution of this loop as a tick
while (shouldContinue()) {
  // 1) Node looks at pendingTimers, see if any are ready to be called.If yes, node calls the releveant callbacks
  // 2) Node looks at pendingOSTasks and pendingOperations, and calls relevant callbacks if any expired
  // 3) Pause execution. Continue when
  //      a) - a new pending OS task is done
  //      b) - a new pending Operation is done
  //      c) - a timer is about to complete
  // 4) Look at pending timers.Call any setImmediate
  // 5) Handle any 'close' events
}
// If shouldContinue() returns false, event loop exits and program returns to the terminal

//* exit back to terminal */
