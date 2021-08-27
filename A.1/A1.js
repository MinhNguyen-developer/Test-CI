let userInput = prompt('Enter something seperate with a comma')
let newArr = userInput.split(", ")
let maxLength = 0
let maxArr = []
for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length > maxLength) {
        maxLength = newArr[i].length
        maxArr.push(newArr[i])
    }
}
console.log(maxArr)


let weightInput = prompt('Enter weight (seperate with a comma')
let newArr = weightInput.split(', ')
let firstTeamWeight = []
let secondTeamWeight = []
let totalWeight = []
let sumWeightFirstTeam = 0
let sumWeightSecondTeam = 0
for (let i in newArr) {
    if (i % 2 != 0) {
        secondTeamWeight.push(newArr[i])
    } else if (i % 2 == 0) {
        firstTeamWeight.push(newArr[i])
    }
}
console.log(secondTeamWeight)
console.log(firstTeamWeight)

for (let x of firstTeamWeight) {
    sumWeightFirstTeam += Number(firstTeamWeight[x])
    totalWeight.push(sumWeightFirstTeam)
}
for (let y of secondTeamWeight) {
    sumWeightSecondTeam += Number(secondTeamWeight[y])
    totalWeight.push(sumWeightSecondTeam)
}
console.log(totalWeight)