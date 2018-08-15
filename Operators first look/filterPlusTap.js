/*global rxjs */

// RxJS 6+
const of = rxjs.of;
// tap == do in Rxjs 5
const tap = rxjs.operators.tap;
const filter = rxjs.operators.filter;

const stream$ = of(1, 2, 3, 4, 5).pipe(
    tap(value => console.log(value)),
    filter(value =>
           {
               return value % 2 === 0;
           })
);

const sub = stream$.subscribe(value => console.log(value));
sub.unsubscribe();
