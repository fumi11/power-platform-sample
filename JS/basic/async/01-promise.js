//simple
const test = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let message = "hello " + "all";
        resolve(message)//return の代わりに resolve を利用する;
    }, 1000);
});

test();

//chain
test.then((message)=>{console.log(message)})