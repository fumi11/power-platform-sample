const asyncTest = async function (text, timeout) {
    setTimeout(() => {
        console.log(text);
    }, timeout);
};

await asyncTest("1", 2000);
await asyncTest("2", 1000);
