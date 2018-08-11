/*global rxjs */
let Observable = rxjs.Observable;

// This stream only supplies a single value and completes.
function netStream(url) {
    return Observable.create(observer =>
                                    {
                                        let req = new XMLHttpRequest();
                                        let subscribed = true;

                                        req.open("GET", url);
                                        // In XMLHttpRequest handlers next, notify of error, and signal completion for observer.
                                        req.onload = () =>
                                            {
                                                if (req.status === 200) {
                                                    observer.next(req.response);
                                                    observer.complete();
                                                } else {
                                                    observer.error("Error happened");
                                                }
                                            };

                                        req.onerror = () =>
                                            {
                                                observer.error("Error happened");
                                            };

                                        if (subscribed) {
                                            req.send();
                                        }

                                        // I do not think that the subscription has enough time to unsubscribe, but nevertheless
                                        // return the terardown logic.
                                        return function() {
                                            subscribed = false;
                                        };
                                    });
}

let stream$ = netStream("http://ip.jsontest.com").subscribe(value => console.log(JSON.stringify(value)));
