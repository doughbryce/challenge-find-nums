// Write your code below this line.
function luckyNumbers(n) {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arr2 = [];
    
    for (let i = 0; i < n; i++) {

        let uniqueRand = Math.floor(Math.random() * (10 - i));
        
        arr2.push(arr1[uniqueRand]);
        arr1.splice(uniqueRand, 1);

        
    }

    return arr2;

}

console.log(luckyNumbers(4));