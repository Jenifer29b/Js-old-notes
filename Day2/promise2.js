const mypromise1 = () => {
    return new Promise((resolve, reject) => {
        let x = Math.random();
        if (x > 0.45) {
            resolve(x);
        } else {
            reject(x);
        }
    });
};

const mypromise2 = () => {
    return new Promise((resolve, reject) => {
        let x = Math.random();
        if (x > 0.5) {
            resolve(x);
        } else {
            reject(x);
        }
    });
};

const mypromise3 = () => {
    return new Promise((resolve, reject) => {
        let x = Math.random();
        if (x > 0.45) {
            resolve(x);
        } else {
            reject(x);
        }
    });
};

// Create promises
const promise1 = mypromise1();
const promise2 = mypromise2();
const promise3 = mypromise3();

// Log individual promises
promise1
    .then((result) => console.log("resolved Success 1:", result))
    .catch((error) => console.log("rejected Failed 1:", error));

promise2
    .then((result) => console.log("resolved Success 2:", result))
    .catch((error) => console.log("rejected Failed 2:", error));

promise3
    .then((result) => console.log("resolved Success 3:", result))
    .catch((error) => console.log("rejected Failed 3:", error));

// Use Promise.all with the same promises
Promise.all([promise1, promise2, promise3])
    .then((result) => console.log("resolved Success all:", result))
    .catch((error) => console.log("rejected Failed:", error));
