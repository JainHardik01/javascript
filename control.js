//Activity 1: if-Else Statements
    //Task 1: write a program to check if anumber is positive, negative, or Zero, and log the result to the console.
        let number = 0
        if(number>0){
            console.log("number is positive")
        }
        else if(number == 0 ){
            console.log("number is Zero")
        }
        else {
            console.log("number is negative")
        }

        //Task 2: write a program to check if a person is eligible to vote (age >=18) and log the result to the console.
        let age= 10
        if(age >=18){
            console.log("person is eligible to vote")
        }
        else if(age <=18 && age >0){
            console.log("person is not eligible to vote")
        }
        else {
            console.log("Enter the valide number");
        }


        
// Activity 2: Nested if-Else Statements
        //Task 3: write a program to find the largest three numbers using nested if-else statements.
            let num1= 2
            let num2= 22
            let num3= 44
            if (num1 >num2) {
                if (num1>num3) {
                    console.log("num1 is a largest numbers")
                } else {
                    console.log("num3 is a largest numbers")
                }    
            } else {
                if(num2>num3){
                    console.log("num2 is a largest numbers")
                }
                else{
                    console.log("num3 is a largest numbers")
                }
            }

// Activity 3: Switch Case
        //Task 4: write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console.
            let Date= 8
            switch (Date) {
                case 1:
                    console.log("Monday")
                    break;
            
                case 2:
                    console.log("Tuesday")
                    break;
            
                case 3:
                    console.log("Wendesday")
                    break;
            
                case 4:
                    console.log("Thursday")
                    break;
            
                case 5:
                    console.log("Friday")
                    break;
                case 6:
                    console.log("Staurday")
                    break;
                case 7:
                    console.log("Sunday")
                    break;
            
                default:
                    console.log("Looking for the next Week")
                    break;
            }


        //Task 5: write a program that uses a switch case to assign a grade('A', 'B', 'C', 'D', 'F') based on score and log the grade to the console.
        let grade = 70
        switch (true) {
            
            case grade >= 90:
                console.log("A")
                break;
            case grade>=80:
                console.log("B")
                break;
            case grade>=70:
                console.log("C")
                break;
            case grade>=60:
                console.log("D")
                break;
            case grade>=45:
                console.log("F")
                break;
        
            default:
                console.log("Sorry You have attend the re-exam")
                break;
        }

// Activity 4: Conditonal (Ternary) Operator
    //Task 6: write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
        
        let num= 585443 %2 == 0 ? "even" : "odd"
        console.log(num)

 // Activity 5: combining Conditions
    //Task 7: write a program to check if a year is a leap year using multiple conditions (divisble by 4, but not 100 unless also divisible by 400) and log the result to the console.
            var leap_year= 2024

            if(leap_year%400==0){
                console.log("This is Leap Year",leap_year)    
            }
            else if(leap_year%4==0){
                console.log("This is Leap Year",leap_year)
            }
            else if(leap_year%100==0){
                console.log("This is not Leap Year",leap_year)
            }
            else{
                console.log("This is not Leap Year",leap_year)
            }
