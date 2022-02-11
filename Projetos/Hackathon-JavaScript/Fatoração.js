let prime = []

function primeNumber(limit) {
        for (number = 1; number < limit; number++) {
            numberZero = 1
            for (divider = 1; divider < number; divider++) {
            numberZero += number % divider === 0 ? 1 : 0;
            }
                if (numberZero === 2) {
                prime.push(number) 
                }
        }
}
primeNumber(1000)
console.log(prime) 

