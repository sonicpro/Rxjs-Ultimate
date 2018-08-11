/*global rxjs, setInterval, clearInterval, setTimeout */
let Observable = rxjs.Observable;

// Observable.create takes subscribe function as parameter.
let stream$ = Observable.create(observer =>
                                {
                                    let i = 0;
                                    let id = setInterval(() => observer.next(i++), 1000);

                                    // Returns teardown logic.
                                    return function () {
                                        clearInterval(id);
                                    };
                                });

// The function passed as the first agrument to subscribe() is called when the subscriber "nexted".
let subscription = stream$.subscribe(value => { console.log('Value', value); });

// We will receive 0 and 1 values and unsubscribe then.
setTimeout(() => { subscription.unsubscribe(); }, 3000);
