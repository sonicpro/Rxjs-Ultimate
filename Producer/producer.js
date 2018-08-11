/*global rxjs */
let Observable = rxjs.Observable;

class Producer {
    constructor() {
        this.i = 0;
    }

    nextValue() {
        return this.i++;
    }
}

let stream$ = Observable.create(observer =>
                                {
                                    const producer = new Producer();
                                    observer.next(producer.nextValue());
                                    observer.next(producer.nextValue());
                                });

stream$.subscribe(value => { console.log("Value", value); });
