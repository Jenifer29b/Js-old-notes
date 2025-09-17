// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK');
//     }, 2000);
//     setTimeout(() => {
//         reject('error');
//     }, 3000); // Changed to 3000 to ensure only one is called
// });

// mypromise
//     .then(result => console.log("Resolved:", result))
//     .catch(error => console.log("Rejected:", error));


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

mypromise1()
    .then((result) => console.log("resolved Success 1:", result))
    .catch((error) => console.log("rejected Failed 1:", error));

mypromise2()
    .then((result) => console.log("resolved Success 2:", result))
    .catch((error) => console.log("rejected Failed 2:", error));

mypromise3()
    .then((result) => console.log("resolved Success 3:", result))
    .catch((error) => console.log("rejected Failed 3:", error));

Promise.race([mypromise1(), mypromise2(), mypromise3()])
    .then((result) => console.log("resolved Success race:", result))
    .catch((error) => console.log("rejected Failed:", error));

 
Promise.allSettled([mypromise1(), mypromise2(), mypromise3()])
    .then((result) => console.log("resolved Success :", result))
    .catch((error) => console.log("rejected Failed:", error));
