
function findFactorialRecurise(num: number): any {
    if (num === 1){
        return num
    }
    return num * findFactorialRecurise(num - 1)
}

console.log(findFactorialRecurise(5))