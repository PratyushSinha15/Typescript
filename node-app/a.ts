//create a function for greeting name  in typescript
//here we learnt how to give value to a function in typescript
function greet(firstName:string ){//here we created  afunction and given its a type of string
    console.log(`Hello` + firstName );
}

greet('John'); 

//create a function for adding two numbers

function add(num1:number,num2:number){
    return num1 + num2;
}

console.log(add(10,20));

//return true or false based on age 
//this is called type inference
//here we learned how to convert the return type of a function

function isAdult(age:number):boolean {// the function will return true or false based on age
    return age >= 18;
}

console.log(isAdult(18));


//create a function that takes another function as an input and runs at after 1 seconds
//this is the function which expects another function as an input 
//if we have to pass a function as an argument then we need to define a type and here void is the retun type
function runAfter1Sec(func:()=>void){// here learn that the 'func:()=>void' 
    //we are saying that we will get a function which will a value which is void means null
    setTimeout(func,1000);
}

runAfter1Sec(()=>{
    console.log('after 1 sec');
});