/*global rxjs */
let Observable = rxjs.Observable;
let of = rxjs.of;

let stream$ = of(1, 2, 3);


stream$.subscribe(value => console.log(value));

stream$.subscribe(value => console.log(value));
