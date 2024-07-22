//Activity 1: Array Creating and Access
    //Task 1: Create an array of number from 1 to 5 and log the array to the console.
        let array1 = [1,2,3,4,5]
        console.log(array1)

    //Task 2: Access the first and last elements of the array and log them to the console.
        let array2 = [9,6,2,3,4,1]
        console.log(`Aarray first index ${array2[0]} \t Aarray lastindex ${array2[array2.length-1]}`)

//Activity 2: Array Methods(Basic)
    //Task 3: Use the push method to add a new number to the end of the array and log the updated array
        let array3 = [1,2,3,4,5]
        array3.push(6)
        console.log(array3)
    //Task 4: Use the pop method to remove the last element from the array and log the updated array
        let array4 = [1,2,3,4,5]
        array4.pop()
        console.log(array4)
    //Task 5: Use the shift method to remove the first element from the array and log the updated array
        let array5 = [1,2,3,4,5]
        array5.shift()
        console.log(array5)
    //Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array
        let array6 = [1,2,3,4,5]
        array6.unshift(6)
        console.log(array6)

//Activity 3: Array Methods(intermediate)
    //Task 7: Use the map method to create a new array where each number is double and log the new array.
        array7 = [1,2,3,4,5]
        let map = array7.map((x)=> x*2)
        console.log(map)

    //Task 8: Use the filter method to create a new array with only even numbers and log the new array.
        array8 = [0,1,2,3,4,5,6,7,8,9]
        let filter = array8.filter((num) => {
            if (num %2 == 0 ) {
                return num
            }
        })
        console.log(filter)
    //Task 9: Use the reduce method to cacluated the sum of all number in the array and log the result.
        let array9 = [0,1,2,3,4,5,6,7,8,9]
        let newArr = array9.reduce((h1, h2)=> h1 + h2 )
        console.log(newArr)

//Activity 4: Array Iteration
        //Task 10: Use the for loop to iterate over the array and log each element to the result.
            let array10 = [1,2,3,4,5]
            
            for (let i = 0; i < array10.length; i++) {
                const element = array10[i];
                console.log(element)
            }
        //Task 11: Use the forEach method to iterate over the array and log each element to the result. 
            let array11 = [1,2,3,4,5]
            
            array11.forEach(element => {
                console.log(element)
            });
        
//Activity 5: Multi-dimensional Arrays
        //Task 12: Create a two-dimensional array (matrix) and log entire array to the result.
            let array12 = [[1,2,3],[4,5,6]]
            console.log(array12)

        //Task 13: Access and log a specific element from the two-dimensional array. 
            let array13 = [
                [1,2,3],
                [4,5,6]
            ]
            console.log(array13[0][2]);