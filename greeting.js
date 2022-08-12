// 1.1 :
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }
// checkAge( 18)
let age = 18;
let ChekAge = (age > 18) ? () => true : () => confirm('Родители разрешили?')
console.log(ChekAge)


// // 1.2 :
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// }  else {
//     result = 'Много';
// }

let result =(a,b) => (a+b <4) ? () => ('Мало') : () => ('Много')

console.log(result(1,2))



// // 1.3 :
// let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

let login = prompt("Какой вы сотрудник?")
let message = (login =="Сотрудник") ? () => alert('Привет') : (login == 'Директор') ? () => alert('Здраствуйте') : (login =='') ? ()=> alert('Нет логина') : () => alert('')
message()

2.1
 let ggg = function (a){if (a>0){
     console.log("1")
 }else {
     console.log("2")
 }
 }
 ggg(-1)

2.2
var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

function getElements() {
    return alert(elements.length)
    return console.log(elements.length)

}
getElements()

2.3
let gotElements = elements.length
console.log(gotElements)
alert(gotElements)
