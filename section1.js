// /*usht1*/
// var a=1
// var b=2
// if(a>b){
//   console.log('a is greater than b')
// }else{
//  console.log('b is greater than a')
// }

// var a=1
// var b=2
// if(a<b){
//   console.log('a is greater than b')
// }else{
//  console.log('b is greater than a')
// }
// /*usht2*/
// if(true){
//   console.log('hello world')
// }
// /*usht3*/
// var a=6
// if(a<18){
//   console.log('too young')
// }
// else{
//   console.log('too old')
// }
// var a=19
// if(a<18){
//   console.log('too young')
// }
// else{
//   console.log('too old')
// }

// var fruit = 'banana'
// switch (fruit) {
//   case "kiwi":
//     console.log("kiwi")
//     break;
//   case "apple":
//     console.log("apple");
//     break;
//   case "orange":
//     console.log("orange");
//     break;
// }



// var i=20
// for(i=20;i<31;i++){
//   i=i+0
//   console.log(i)
// }


// var i=20
// for(i=0;i<10;i++){
//   i=i+1
//   console.log(i)
// }

// var i=20
// for(i=0;i<=15;i++){
//   i=i+0
//   console.log(i)
// }
/*usht 9
var i = 1;
for (i = 0; i < 20; i++) {
  if (i == 15) {
    continue;
  }
   console.log(i);
  i = i + 1;

}*/

usht10

var n=4
if(n%2==0){
  alert(n+"is even")
}
else{
  alert(n+"is odd")
}


// usht 12
// if ("var=1,var=2") {
//     console.log("the value is truthy");
//   } else {
//     console.log("the value is falsy");
//   }
// printon valuten true


usht11 usht13 usht14 dt shtepie




// const list=['A','B','C','D']
// for(let i=0;i<list.length;i++){
//   console.log(list[i])
// }



// const list=['A','B','C','D']
// var cnt=0
// while(cnt<list.length){
//   console.log(list[cnt]);
//   cnt++;
// }

//  const list=['A','B','C','D']
//  for(let i=list.length;i>=0;i--){
//    console.log(list[i])
//  }
 
//  var cnt=list.length-1
//  while(cnt>=0){
//    console.log(list[cnt]);
//    cnt--;
//  }


//check if number id even or odd

// 1 odd 
// 203 odd
// 45 odd
// 30 even
// 22 even
// var number=20
// if(number%2==0 &&number>0){
//   console.log('even')
// }else{
//   console.log('odd')
// }

//usht me kontrollin e secilit numer nese eshte tek ose cift
// const numbersArray=[1,203,45,30,22]

// for(let i=0;i<numbersArray.length;i++){
//   console.log(numbersArray[i])
//   if(numbersArray[i]%2===0 ){
//    console.log(numbersArray[i]+" "+'even')
//  }else{
//    console.log(numbersArray[i]+" "+'odd')
// }}


//forma e shkurter
// var number=30
// console.log(number>0&&number%2===0 ? 'even':'odd')



 //usht me yjet
//  for(var i=0;i<=5;i++){
//    var string=' '
//   for( var y=0;y<i;y++){
//     string+="*"
//   }
//    console.log(string)
//  }

// ushtrime leksioni 3
// var car = {
//   brand: 'Honda', 
//   price:10000
// }
// //menyra e pare
// console.log('The price of my new '+ car.brand +' is '+ car.price +'$ and it is cheap/expensive one')
// //menyra e dyte
// console.log(`The price of my new ${car.brand} is ${car.price}$ and it is cheap/expensive car`)


// var cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[1])


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.splice(0, 3));


var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(3, 2, 'Kiwi'));
console.log(fruits)