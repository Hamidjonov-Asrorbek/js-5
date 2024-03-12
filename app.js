// 69

// let arr = [1, 2, 'a', 'b'];
// let arr2 = []
// function tostring(x){
// arr.forEach((element) => {
//     arr2.push(element.toString());
// });
// return arr2
// }
// console.log(tostring(arr));

// 75

// let arr = [1, 2, "null", {}, true, undefined, []];
// let tur = []
// function turlar(a){
//     arr.forEach((element) => {
//         tur.push(typeof element)
//     });
//     return tur
// }
// console.log(turlar(arr));

// 73

// function box(width, length, height){
//     this.width = width;
//     this.length = length;
//     this.height = height;
// }
// const box2 = new box(
//     prompt("eni ?"),
//     prompt("uzunligi ?"),
//     prompt("balandlik ?")
//     )
// function hajm(box2){
//     return box2.width*box2.length*box2.height
// }
// console.log(hajm(box2));

// 74

// let array = [];
// function sonlar(son1, son2, arr) {
//     arr.forEach((element) => {
//         if(element > son1 && element < son2 )
//         array.push(element);
//     });
//     return array
//     }
// console.log(sonlar(3, 8, [1, 5, 95, 0, 4, 7]));

// 83

// function tengmi(soz1, soz2) {
//     if(soz1==soz2){
//     }
//     else{
//         return false
//     }
//     return true
//     }
//     console.log(tengmi(
//         prompt("1-so'zni kiriting:").toLowerCase(),
//         prompt("2-so'zni kiriting:").toLowerCase()
//     ));

// 84

// function belgiSoni(word) {
//     let count = 0
//     for (let i in word) {
//         count++
//     }
//     return count;        
//     }
//     console.log(belgiSoni(prompt("So'z kiriting: ")));

// 86

// let arr = prompt("Raqam kiriting").split(",");
// let newArr = [];
// function x2(arr) {
//     arr.forEach((e) => {
//         newArr.push(e*2)
//     });
//     return newArr
// }
// console.log(x2(arr));


// 87

// let arr = prompt("So'z kiriting").split(", "); // namuna hello, world
// let newArr = [];
// function uzunligi(arr) {
//     arr.forEach((e) => {
//         newArr.push(e.length)
//     });
//     return newArr
// }
// console.log(uzunligi(arr));

// 94

// let arr = prompt("Raqamlar kiriting").split(",");
// function yigindi(arr){
//     let count = 0;
//     arr.forEach(e => {
//         if(e > 5){
//             count = count+parseInt(e)
//         }
//     });
//     return count
// }
// console.log(yigindi(arr));

// 95

// let arr = prompt("Raqamlar kiriting").split(",");
// function yigindi(arr){
//     let count = 0;
//     arr.forEach(e => {
//         count = count+parseInt(e)
//     });
//     return count
// }
// console.log(yigindi(arr));

// 97

// let arr = prompt("Raqamlar kiriting").split(",");
// function masofa(arr){
//     let count = 0;
//     arr.forEach(e => {
//         count = count+parseInt(e)
//     });
//     return count
// }
// console.log(masofa(arr));

// 99

// let son1 = prompt("1-son");
// let son2 = prompt("2-son");
// let newArr = [];
// function masofa_son(son1, son2){
//     for (let i = son1; i < son2; i++) {
//         newArr.push(i)
//     }
//     newArr.shift();
//     return newArr
// }
// console.log(masofa_son(son1,son2));