function greetSomeone() {
    //inside the body of the function
    console.log("hello Sean");
}

//invoking (or calling/executing) the function greetSomeone
// greetSean();

function greetSomeone(person_name) {//person_name is a parameter. Parameter is a placeholder variable for any data that the function needs to run
    console.log("Hello " + person_name + "!");
}

// greetSomeone("Colin"); //the info that we feed to the function when we call the function -> this is called an ARGUMENT

// var x = 5;

function setX(newValue) {
    x = newValue;
}

// console.log(x);
// setX(15);
// console.log(x);

function addNums(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2; //return outputs (or give us back) some data. it will also exit the funciton after the return statement
}

let newNum = addNums(5,2) + 100;

console.log("newNum is this "+ newNum);

//The value of a function call is whatever that function call returns


function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) { //function called isPal which will accept any array as an input (arr is the parameter)
        var right = arr.length-1-left; //keep running for loop as long as left is < 2.5
        if(arr[left] != arr[right]) { // calculate the opposite index
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2);
