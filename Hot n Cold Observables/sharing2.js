/*global rxjs */

// RxJS 6+

let timer = rxjs.timer;
let tap = rxjs.operators.tap;
let mapTo = rxjs.operators.mapTo;
let share = rxjs.operators.share;

// emit value in 1s
const source$ = timer(1000);

// Log side effect, emit result
const example$ = source$.pipe(
    tap(() => console.log("***SIDE EFFECT***")),
    mapTo("***RESULT***")
);

/*
  ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
  output:
  "***SIDE EFFECT***"
  "***RESULT***"
  "***SIDE EFFECT***"
  "***RESULT***"
 */

const subscribe = example$.subscribe(val => console.log("subsribe", val));
const subscribeTwo = example$.subscribe(val => console.log("subscribeTwo", val));

// Share observable among subscribers
const sharedExample$ = source$.pipe(
    tap(() => console.log("***SIDE EFFECT***")),
    mapTo("***RESULT***"),
    share()
);

/*
  ***SHARED, SIDE EFFECT EXECUTED ONCE***
  output:
  "***SIDE EFFECT***"
  "***RESULT***"
  "***RESULT***"
*/

const subscribeThree = sharedExample$.subscribe(val => console.log("subsribeThree", val));
const subscribeFour = sharedExample$.subscribe(val => console.log("subscribeFour", val));
