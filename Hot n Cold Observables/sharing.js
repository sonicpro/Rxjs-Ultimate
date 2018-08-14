/*global rxjs, setTimeout  */

// let Observable = rxjs.Observable;
let interval = rxjs.interval;
let share = rxjs.operators.share;
let take = rxjs.operators.take;

// let stream$ = Observable.create((observer) => {
//     observer.next( 1 );
//     observer.next( 2 );
//     observer.next( 3 );
//     observer.complete();
// }).pipe(
//     share()
// );

let stream$ = interval(1000).pipe(
    take(5)
).pipe(
    share()
);

setTimeout(() => stream$.subscribe(
    (data) => console.log('subscriber 1', data),
    err => console.error(err),
    () => console.log('completed')),
    1500
);

setTimeout(() => stream$.subscribe(
    (data) => console.log('subscriber 2', data),
    err => console.error(err),
    () => console.log('completed')),
    2500
);
