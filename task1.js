const number = 5;
console.log(Таблиця множення для числа ${number} (цикл for):);

for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(${number} x ${i} = ${result});
}

console.log(""); 

console.log(Таблиця множення для числа ${number} (цикл while):);

let j = 1;
while (j <= 10) {
    const result = number * j;
    console.log(${number} x ${j} = ${result});
    j++; 
}