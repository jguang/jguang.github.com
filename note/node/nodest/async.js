function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function asyncPrint(value, ms) {
    timeout(ms);
    console.log(value)
}

asyncPrint('hello world', 50);