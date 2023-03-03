
// let students = [
//     [],[],[]
// ]


// console.log(students)

// let name = prompt('Введите имя первого студента');
// let age = +prompt('Введите возраст первого студента');

// students[0].push(name, age)


// name = prompt('Введите имя второго студента');
// age = +prompt('Введите возраст второго студента');

// students[1].push(name, age)

// name = prompt('Введите имя третьего студента');
// age = +prompt('Введите возраст третьего студента');
// students[2].push(name, age)

// console.log(students)
// alert(students[2])

// ---- дз 14 ----- //

let count = +prompt('Введите количество студентов')
let name
let surname
let list = []
for (let i = 0; i < count; i++){
    name : prompt('Введите имя студента')
    surname : prompt('Введите фамилию студента')
    list[i] = name + ' ' + surname
    console.log(list)
    
}
console.log(list)

let students = []
for (let k = 1; k <= count; k++){

    students.push(k + list[k-1])
    // console.log(students)
}
alert(students)