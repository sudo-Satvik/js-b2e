const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.filter( (item) => item > 5)

const newNums = nums.filter( (item) => {
    return item > 5
})

// console.log(newNums)

// But I want to use same in the forEach(), then we can do complex way

const anotherNum = []

nums.forEach((num) => {
    if(num > 4){
        anotherNum.push(num)
    }
})

// console.log(anotherNum)


const game = [
    {gameName: "Grand Theft Auto 5", type: "Action", price: 10},
    {gameName: "Red Dead Redemption 2", type: "Open World", price: 13},
    {gameName: "Forza Horizon 5", type: "Racing", price: 5},
    {gameName: "Far Cry 5", type: "Shooting", price: 6},
    {gameName: "Assassin's Creed III", type: "Adventure", price: 7},
    {gameName: "Freedom Fighter", type: "Fighting", price: 3},
    {gameName: "Player Unknown Battleground", type: "Shooting and Action", price: 5},
]

const userNeed = game.filter( (g) => g.price < 10)

console.log(userNeed);
