console.log("___________________________________________CALLBACKS________________________________");
function functionWithCallback(callback) {
    setTimeout(() => {
        callback("Hello from callback !!")
    }, 100)
}

function myFucntion() {
    const log = console.log;
    functionWithCallback(log)
}
myFucntion()

console.log("___________________________________________PROMISE________________________________");
const getPromise = () => Promise.resolve("My Return Value");
const myFunction = () => {
    getPromise().then((value) => {
        console.log(value);
    }).catch((error) => {
        console.log(error)
    })
}

myFunction();


console.log("___________________________Async Await________________________________");
const getPromise1 = () => Promise.resolve("My return by async await");
const myFucntion1 = async () => {
    try {
        const result = await getPromise1();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
myFucntion1();