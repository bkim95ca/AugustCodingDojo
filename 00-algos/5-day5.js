// //one way to swap is using a temp variable

// var temp = fruit2;
// fruit2 = fruit1; // saving fruit2 into a temp variabble so we don't lose orange
// fruit1 = temp;


// [fruit1, fruit2] = [fruit2, fruit1];

// [fruit1, fruit2] = [fruit2, fruit1];

// for (let i = 0; i <=12; i++) {
//     console.log(i);
// }

// let i = 0;
// while(i <= 12) {
//     console.log(i);
//     i++;
// }

// var start = 0;
// var end = 12;

// while (start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

let topArtists = ["Nipsey Hussle", "Drake", "Lupe", "Ray Charles", "Sam Cooke", "Elvis", "Red Hot Chili Peppers"];


function reverseArray(arr) {
    //left = 0
var left = 0;
// right = last index of the array --> calculated by doing the array.length-1
var right = arr.length-1;
while(left<right) {
    console.log("in while loop");
    //0 swaps with 6
//1 swaps with 5
//2 swaps with 4
//3 swaps with 3
    [arr[left],arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
}

}

// reverseArray(topArtists);
// console.log(topArtists);
//We want the reverse of the array

// var temperature = 60;
// var isRaining = false;

// if (temperature >= 50 && !isRaining) {
//     console.log("This is a good day to go for a walk!");
// }

//if (true && true)

//the modulo operator (%) will give us the remainder of dividing two numbers together

for (let i = 0; i <= 100; i++) {
    //if the number(i) is divisible by 7, print "seventh heaven" INSTEAD of the number
    if(i%7 === 0) {
        print("seventh heaven")
    }
    else {
        console.log(i);
    }
}