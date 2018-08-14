/*global rxjs */

let interval = rxjs.interval;
let take = rxjs.operators.take;
let publish = rxjs.operators.publish;
let refCount = rxjs.operators.refCount;

let obs$ = interval(1000).pipe(
    take(3),
    publish(),
    refCount()
);

setTimeout(() => obs$.subscribe(value => console.log("sub1", value)),
           1100);

setTimeout(() => obs$.subscribe(value => console.log("sub2", value)),
           2500);

// obs$.connect();

