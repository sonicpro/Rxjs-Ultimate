/*global rxjs, setInterval, setTimeout */
class Producer {
    constructor() {
        this.i = 0;
    }

    nextValue() {
        return this.i++;
    }
}

let Observable = rxjs.Observable;

// It is required to add producer as the closure (not create an instance of producer for each subscription) to get the hot observable.
let prod = new Producer();

let liveStreaming$ = Observable.create(function(observer) {
    setInterval(() =>
                {
                    if (prod.nextValue() > 12) {
                        observer.complete();
                    }
                    observer.next(prod.nextValue());
                }, 1000);
});

liveStreaming$.subscribe(value => console.log("Subscribed from the beginning:" + value),
                         null,
                        () => console.log("Stream has completed.")); 

setTimeout(() =>
           {
               liveStreaming$.subscribe(value => console.log("Subscribed from third second:" + value),
                                        null,
                                        () => console.log("Stream has completed."));
           }, 2500);
