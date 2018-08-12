/*global rxjs, setTimeout */

let interval = rxjs.interval;
let take = rxjs.operators.take;
let publish = rxjs.operators.publish;

let publisher$ = interval(1000).pipe(
    take(5),
    publish()
);

publisher$.subscribe(value => console.log("Subscriber from the beginning", value),
                     null,
                     () => console.log("Completed."));


setTimeout(() =>
           {
               publisher$.subscribe(value => console.log("Subscriber from the third minute", value),
                                    null,
                                    () => console.log("Completed."));
           }, 3500);

publisher$.connect();
