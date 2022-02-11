
let resultado = 0
function countFibonacci (firstValue, secondValue, numberLimit){
    for (let i = firstValue + secondValue ; i < numberLimit; i = firstValue + secondValue) {
        firstValue = secondValue
        secondValue = i
        if (i % 2 === 0 ) {
            resultado += i
        }

    }

}

countFibonacci(1, 1, 4000000)
console.log(resultado);     
    
        

    

    