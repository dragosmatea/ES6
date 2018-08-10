/* function doSomethingOldStyle(succededWith, failedWith)
{
    var result = Math.random();
    if (result > 0.5)
    {
        succededWith(result);
    }
    else
    {
        failedWith(result);
    }
}

function succededWith(result)
{
    console.log("We succeded with ", result);
}

function failedWith(result)
{
    console.log("We failed with ", result, " mamaMia");
}

doSomethingOldStyle(succededWith, failedWith);
*/

/* const startTime = new Date().getSeconds();

setTimeout(function() {
    console.log("Ran after " + (new Date().getSeconds() - startTime) + " seconds."); 
}, 4000);

while (true){
    if (new Date().getSeconds() - startTime >= .2){
        console.log("Great!! More than .2 seconds waited");
        break;
    }
}
*/

var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
