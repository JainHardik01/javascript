// Activity 1: Function Declartion
    //Task 1: write a function to check if a number is odd and even and log the result to the console.
        function EvenOdd(number) {
            let num = number%2==0?"even":"odd"
            console.log(num)
        }

    //Task 2: write a function to calculate the square of a number and return the result.
    function SquareNumber(number){
        return number*number
    }

// Activity 2: Function Expression
    //Task 3: write a function expression to find the maximum of a two numbers and log the result to the console.
        let max = function (num1, num2){
            if(num1>num2){
                console.log("num1 is maximum")
            }
            return "num2 is maximum"
        }
    //Task 4: write a function expression to concatenate two strings and retruns the result.
        let string = function (str1, str2){
            return str1.toString() + str2.toString()
        }


// Activity 3: Arrow Function
    //Task 5: Write a arrow function to calculate the sum of two numbers and retruns the result.
        let Sum = (num1 , num2) => {
            return parseInt(num1) + parseInt(num2)
        }

    //Task 6: Write a arrow function to check if a stirng contains a specific character and return a boolean value.
    let Specific_str = (str, char) => {
            for(let i = 0; i < str.length; i++ ){
                if(str[i] == char ){
                    return true
                }
            }
            return false
        }


// Activity 4:  Function Parameters and Default Values
    //Task 7:Write a function to check that takes two parameters returns their product.Provide a defult value for the second parameter.
        function Product(num1 = 2 , num2 = 3 ) {
            return num1 * num2
        }
        
    //Task 8:Write a function that takes a person name and age and returns a greeting message . provide a default value for the age.
    function PersonalDetail(name = "sonic" , age = 212 ) {
        console.log(`${name} you are really ${age} years`)
    }


// Activity 5: Higher-Order Function

    //Task 9:Write a higher-oder function that takes a function and a number, and calls the function that many times.
        function sayHello(){
            return "Hello"
        }

        function callback(fun, number){
            console.log(fun + number);
        }

      

    //Task 10:Write a higher-oder function to check that that takes a function and a value, appiles the first function to the value, and then appiles the second function to the result.
        function Value(number1){
            return number1
        }

        function value(number2){
            return number2
        }

        function mixture(mix1, mix2) {
            console.log(`${mix1} is mixture of ${mix2}`)
        }
    
    
    
EvenOdd(5)

console.log(SquareNumber(5))

console.log( max(4,5))

console.log(Sum(15,10));

console.log(string("Slave",2))

console.log(Specific_str("hello","o"))

console.log(Product());

PersonalDetail()

callback(sayHello(),2)

mixture(Value(5),value("depending"))