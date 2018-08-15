/*global rxjs */

const of = rxjs.of;
const tap = rxjs.operators.tap;

const stream$ = of(1, 2, 3).pipe(
    tap(value => console.log("emits every value. Value:", value))
);

// Subsribing for side-effects only.
stream$.subscribe(() => {});
