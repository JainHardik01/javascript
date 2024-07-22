// Activity 1: For loop
    //Task 1: Write a program to print number from 1 to 10 using a for loop.
        for(let i= 1; i <=10 ; i++){
                console.log(i)
        }    
    
    //Task 2: Write a program to print mutiplication table using a for loop. 
            for (let i = 1; i <= 10; i++) {
                console.log(i +" * 5 =",+i*5)
            }

// Activity 2: while loop
     //Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
        let i = 1
        let sum = 0
           while(i<11){
                sum+=i
            i++
           }
        console.log(sum);

    //Task 4: Write a program to print number from 10 to 1 using a while loop.
    var number = 10
           while (number>0) {
            console.log(number)
            number --
           }



// Activity 3: Do...While loop
    // Task 5: Write a program to print number from 1 to 5 using a do...while loop.
        let num = 1
        do{
           console.log(num);
           num++  
        } while (num!=6);

    // Task 6: Write a program to calculated the factorial of number using a do...while loop.
        var fact = 12
        let factorail = 1
        do{
            factorail *=fact
            fact --
        }while (fact>0)
        console.log(factorail)

    


// Activity 4: Nested Loops
    // Task 7: Write a program to print a pattern using a nested loop.
    // * 
    // **
    // ***
    // ****
    // *****
         
        for(let i = 1; i < 6 ; i++){
            for(let j = i ; j < i+1; j++){
                console.log("*".repeat(i));
            }
        }




// Activity 5: loop control Statements
    // Task 8: Write a program to print number from 1 to 10, but skip the number 5 using the continue statement.

        for(let i =1; i <11; i++){
            if(i==5) continue
            console.log(i)
        } for(let i =1; i <11; i++){
            if(i==5) continue
            console.log(i)
        }

    // Task 9: Write a program to prit numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
        for(let i =1; i <11; i++){
            if(i==7) break
            console.log(i)
        }
        

    