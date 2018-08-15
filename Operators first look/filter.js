/*global rxjs */

const of = rxjs.of;
const filter = rxjs.operators.filter;

let stream$ = of(1, 2, 3, 4, 5).pipe(
    filter(value =>
           {
               // stream$ returns only evens.
               return value % 2 === 0
           })
);

const sub = stream$.subscribe(value => console.log(value));
sub.unsubscribe();

