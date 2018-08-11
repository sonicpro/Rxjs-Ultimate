/*global setTimeout */
// The goal is to print 1, 2, 3 in the console similar as observer nexting does.
let promise = Promise.resolve(1);
promise.then(value =>
             {
                 console.log(value);
                 return new Promise(function(resolve, reject) {
                     // Wait for a second before resolving.
                     setTimeout(function () {
                         resolve(++value);
                     }, 1000);
                 });
             })
    .then(value =>
          {
              console.log(value);
              return new Promise(function(resolve, reject) {
                  setTimeout(function () {
                      resolve(++value);
                  }, 1000);
              });
          })
    .then(value =>
          {
              console.log(value);
          });

