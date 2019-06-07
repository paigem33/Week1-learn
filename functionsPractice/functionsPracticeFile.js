console.log("1. MarcoPolo");
//declare function 'marco' with one argument 'response'
function marco(response) {
    //log response to track activity
    console.log(response);
    //return "Marco" and repsponse (polo in this case)
    return "Marco " + response
}
console.log("Marco Polo REFACTORED");
marco = (response) => `Marco ${response}`
    //return "Marco" and repsponse (polo in this case)
//call function with console.log
console.log(marco("polo"));

console.log("2. greetings");
//declare function greeting with the argument name
function greeting(name) {
    //return string of hello plus name
    return "Hello "+ name;
}
console.log("2. greetings REFACTORED");
//declare function greeting with the argument name
greeting = (name) => `Hello ${name}`
//logging the call of function greeting with "Dimitri"
console.log(greeting("Dimitri"));

console.log("3. oddOrEven");
//declare function oddOREven with one argument, 'num'
function oddOrEven(num) {
    //conditional to evaluate action needed if even or odd number
    if (num %2 === 0) {
        // return 'num is even' if even
        return num + " is even"
    } else {
        //return 'num is odd' if odd(else/catchall will suffice here since only two possibilities)
        return num + " is odd"
    }
}

console.log("3. oddOrEven REFACTORED");
//declare function oddOREven with one argument, 'num'
oddOrEven = (num) => {
    //conditional to evaluate action needed if even or odd number
    if (num %2 === 0) {
        // return 'num is even' if even
        return num + " is even"
    } else {
        //return 'num is odd' if odd(else/catchall will suffice here since only two possibilities)
        return num + " is odd"
    }
}

//log the function call with argument of 0 (also tested other arguments)
console.log(oddOrEven(9));

console.log("4. triple");
//declare function triple with the argment number
function triple(number) {
    //returning number times 3
    return number*3;
}
//logging the call of triple of 1
console.log(triple(1));

console.log("5. multiply");
//declare function 'multiply' with two arguments, 'num2' and 'num3'
function multiply(num2, num3) {
    //return the product of the two arguments
    return num2 * num3
}
//call the function with log, and two arguments of 3 and 5 (expected and got result of 15)
console.log(multiply(3, 5));

console.log("6. divisibleBy");
//declaring function divisibleBy with the arguments of a and b
function divisibleBy(a,b) {
    //a conditional checking if a is divisible by b
    if(a%b===0){
        //returning a is evenly divisibleby b is true
        return a+" is evenly divisible by "+b
        //else statment to catch all other conditions
    }else{
        //default statment for all other conditions
        return a+" is not evenly divisible by "+b
    }
}
//logging the fuction divisibleBy with the arguments 2 and 1
console.log(divisibleBy(2,1));
//declaring greaterNum function with two arguments
console.log("bigger number");
function greaterNum(a,b) {
    //conditional to evaluate which of the two arguments is a larger number
    if(a > b) {
        //return a if a is greater
        return a
    }else if(b > a){
        //return b is b is greater
        return b
    }else {
        //else tell us that the numbers are even/tied
        return "even"
    }
}
//console log a couple test cases to make sure the function works
console.log(greaterNum(2,3));
console.log(greaterNum(9,7));

console.log("The World Translator");
//delcaring a function called helloWorld with the argument lang
function helloWorld(lang) {
    //conditional statment checking to see if the argument is es
    if(lang==="es"){
        //returns hello world in es
        return "Hola Mundo"
    }else if(lang==="en"){
        //conditional statment checking to see if the argment is en
        //returns hello World in en
        return "Hello World"
        //conditional statment checking to see if the argment is de
    }else if(lang==="de"){
        //returns hello world in de
        return "Hallo Welt"
    }else{
        //catch all to other arguments
        return "Hello World"
    }
}
//tests of function
console.log(helloWorld("es"));
console.log(helloWorld("en"));
console.log(helloWorld("de"));

console.log("Grade Assigner");
//declare function 'assignGrade' that allows for one argument, 'score'
function assignGrade(score) {
    if(score >=90) {
        //if number grade evaluates to an A, return A
        return "A"
    } else if (score >= 80 && score < 90) {
        //if number grade evaluates to a B, return B
        return "B"
    } else if (score >= 70 && score < 80) {
        //if number grade evaluates to a C, return C
        return "C"
    } else if (score >= 60 && score < 70) {
        //if number grade evaluates to a D, return D
        return "D"
    } else if (score >= 0 && score <60) {
        //if number grade is failing, return F
        return "F"
    } else {
        //if an off-the-wall argument is provided, ask for new input
        return "try again"
    }
}
//three different test cases by logging the function call with different arguments
console.log(assignGrade(68));
console.log(assignGrade(42));
console.log(assignGrade(100));

console.log("The Pluralizer");
//for every animal, nested conditional to ask if plural or not.  Return the appropriate response.
//declare function pluralizer and the arguments noun and num
function pluralizer(noun,num) {
    if(noun==="sheep"){
        return num+" "+noun
        //checks if argument is sheep then returns num+noun
    }else if(noun==="goose"){
        if(num===1 || num===-1){
            return num+" "+noun
        }else{
            return num+" "+"geese"
        }
        //checks first if the arument is goose then checks the num to see the plural and returns the right awnsers accordingly
    }else if(noun ==="child"){
        if(num===1 || num===-1){
            return num+" "+"child"
        }else{
            return num+" "+"children"
        }
        //checks first if the arument is child then checks the num to see the plural and returns the right awnsers accordingly
    }else if(noun==="person"){
        if(num===1 || num===-1){
            return num+" "+noun
        }else{
            return num+" "+"people"
        }
        //checks first if the arument is person then checks the num to see the plural and returns the right awnsers accordingly
    }else if(noun==="species"){
        return num+" "+noun
        return num+" "+noun
        //checks if argument is species then returns num+noun
    }else{
        if(num===1 || num===-1){
            return num+" "+noun
        }else{
            return num+" "+noun+"s"
        }
        //takes the noun and adds a s for the condition of the num
    }

}
//console log tests
console.log(pluralizer("goose",1));
console.log(pluralizer("cat",1));
console.log(pluralizer("cat",2));
