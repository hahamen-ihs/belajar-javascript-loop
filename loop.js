// Loops

//Array Loops

const checkList = [{
        id: 1,
        task: 'Pushup 10x',
        status: true,
    },

    {
        id: 2,
        task: 'Pushup 20x',
        status: true,
    },

    {
        id: 3,
        task: 'Pushup 30x',
        status: false,
    }
]

for (j = 0; j < checkList.length; j++) {
    console.log(checkList[j].task)
}

//Outputs
//Pushup 10x
//Pushup 20x
//Pushup 30x

// contoh lain array dengan for loops

for (let loop of checkList) {
    console.log(loop.id, loop.task, loop.status)
}

//output sama loop di let loop hanya
//nama variabel saja dan kita ambil
// object dari checkList dan task


// ForEach

checkList.forEach(function(loop) {
    console.log(loop)
})

//ingat loop disini hanya variabel bukan
//sebuah method loop

// Map

const loopId = checkList.map(function(loop) {
    return loop.id
})


const loopTask = checkList.map(function(loop) {
    return loop.task
})


const loopStatus = checkList.map(function(loop) {
    return loop.status
})

console.log(loopId, loopTask, loopStatus)

// Filter

const loopStatus = checkList.filter(function(loop) {
    return loop.status === true
})

console.log(loopStatus)

//Output
// hanya memunculkan object yang true

// Combine Loops

//  Contoh kombinasi fiter loop dgn map loop

const loopStatus = checkList.filter(function(loop) {
    return loop.status === true
}).map(function(loop) {
    return loop.task
})

console.log(loopStatus)

//While Loops

//Examples:

let n = 0
while (n < 15) {
    console.log(`Contoh while loop nya 
    ${n}`)
    n++
}

// Output 

//Contoh while loop nya 0
//Contoh while loop nya 1
//......
//Contoh while loop nya 14

let n = 0
while (n <= 15) {
    console.log(`Contoh while loop nya 
    ${n}`)
    n++
}

//Output:
//Contoh while loop nya 0
//Contoh while loop nya 1
//......
//Contoh while loop nya 15

// For Loops

//examples:

for (let i = 0; i < 5; i++)
    console.log(i) //statement

//examples2:
let m = 0
for (; m <= 10; m++)
    console.log(`contoh for loop dari ${m}`)

//output 
// contoh for loop dari 0
// contoh for loop dari 1
// contoh for loop dari 2
// ...
// contoh for loop dari 9


// basic:
// for ([initialization]; [condition]; [final-expression])
// statement 

//init adalah expression or variable delclaration evaluated
//once before the loops begins

//condition is an expression to be evaluated
//before each loops iteration if the expression
//is valuated to true statement is executed

//final-expression is also expression to be evaluated 
//at the end of each loop iteration, this occur before 
//the next evaluation of the condition generally used to update
//or increment the counter variable 
//statement is executed as long as the condition 
//evaluates to true