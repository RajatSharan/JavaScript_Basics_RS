
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve("done!")
            , 5000)
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
}

f();
