/*global rxjs */
var Observable = rxjs.Observable;

let stream$ = Observable.create(observer =>
                                {
                                    observer.next(1);
                                    // Immediate complete the sequence.
                                    observer.complete();
                                });

const observer = {
    next: function (data) {
        console.log("Data", data);
    },
    complete: function () {
        console.log("The asynchronous operation has completed.");
    }
};

// stream$.subscribe(observer);
// Or
stream$.subscribe(value => console.log("Data", value),
                  null, // error handling logic goes here,
                  console.log.bind(null, "The asynchronous operation has completed."));

