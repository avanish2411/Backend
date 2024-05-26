// console.log("Server file is running");
// console.log(8+9);

// // arrow function
// var add = (a,b) =>{
//     console.log(a+b)
// }
// add(1,5);

// //annoymns function
// (function(){
//     console.log("my name is anthony golsalvis");
// })();



//callback function: aisa function jo dusre function me as a parameter hota hai

function add(a,b,any_callback) {
    var result = a + b;
    console.log(result);   //main function work is completed
    any_callback();
}
var any_callback = () =>{
    console.log("I'm callback function using normal func");
}
add(1,8,any_callback);


add(1,5,function(){
    console.log("I'm callback function using inline func");
});
add(1,5,()=>{
    console.log("I'm callback function using inline arrow func");
});

