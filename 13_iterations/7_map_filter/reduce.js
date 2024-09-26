// const arr = ["arr1", "arr2", "arr3"]

// Use Case: shopping cart

const arr = [1, 2, 3]

const initialValue = 0

const sumWithInitial = arr.reduce(function(accumulator, currentValue){
    console.log(`Acc: ${accumulator} and CurrVal: ${currentValue}`);
    return accumulator + currentValue
}, initialValue)

// const sumWithInitial = arr.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial);


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 299
    },
    {
        itemName: "Java Course",
        price: 499
    },
    {
        itemName: "Python Course",
        price: 399
    },
]

// My task is to add the prices of the courses using reduce

const totalValue = shoppingCart.reduce((a, c) => a + c.price, 0)

console.log("Total cart value: "+totalValue)