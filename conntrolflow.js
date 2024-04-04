// question1
function manipulateArray(arr){
    arr[0]*=arr[0];
    arr[1]*=arr[1];
    arr[2]*=arr[2];
    arr[3]*=arr[3];

    arr[arr.length-1] +=10;
    arr[arr.length-2] +=10;

    return arr;
}

let digits = [1,2,3,4,5,6];
console.log(manipulateArray(digits));


//Question2
let arrDigit = [5,6,7,8,9,10,11,12,13,14,15];
let i = 0;
while (i<arrDigit.length){
    if(i ===4){
        break;
    }
    console.log(arrDigit[1]);
    i++;


}

//Question3
function contains(fruits){
   fruits.forEach((fruits,index) =>{
    if(index===1){
        return;
    }
    console.log(fruits);
   }); 
}
let fruits = ["apple","plum","banana","strawberries","kiwi"];
contains(fruits);

 

// question 4
function acceptArray(strArr){
    for(let i = 0; i<strArr.length; i++){
        console.log(strArr[i]);
    }
}
const strArr = ["Hawo","Sadia","Fatu","Almas"]
acceptArray(strArr);


// Questtion5
function reverseString(str) {
    let reversedstr = '';
    let i = str.length - 1;
    while (i >= 0) {
      reversedstr += str[i];
      i--;
    }
    return reversedstr;
  }
    let strg = "halima";
  let reversedString = reverseString(strg);
  console.log("Reversed string:", reversedString);






