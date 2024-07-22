// Activity 1: Variables and Data Types
    // Task 1: Declare the a variable using var, assign it a number, and log the value to the console.
        var num = 5
        console.log(num)
    // Task 2: Declare the a variable using let, assign it a string, and log the value to the console.
        let string = "Hi! ths is my task 2"
        console.log(string)

        
// Activity 2: Constant Declaration
    // Task 3: Declare the a variable using const, assign it a boolean value, and log the value to the console.
        const bool = false
        console.log(bool)


// Activity 3: Data Types
    // Task 4: Declare the a variables of different data types(number, string, boolean, object, array) and log each variable's types using typeof operator.
        var obj = {
            "key": "value",
            fool: 1
        }

        let arr = ["hi",25]

        console.log(typeof obj)
        console.log(typeof arr)
        console.log(typeof bool)
        console.log(typeof num)
        console.log(typeof string)


// Activity 4: Reassigment variable 
        // Task 5: Declare the a variables using let, assign it inital value, reassign a new value, and log both the values to the console.
            let Value = "initalValue"
            console.log(Value)
            let fn =  ()=>{ 
                Value = "newValue"
            console.log(Value)
        }
        fn()


// Activity 5: Understanding const
        //Task 6: Try reassigning a variable declared with const and observe the error
            const assigning = "assigning"
            const assigning = "reassigning"
            console.log(assigning)