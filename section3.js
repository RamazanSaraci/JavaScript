//1.Write a JavaScript program that accept two integers and display the larger.
// function displayLargest(a,b){
//   if(a>b){
//     console.log(a)
//   }else{
//     console.log(b)
//   }
// }
// displayLargest(1,2)

//2.Write a JavaScript conditional statement to find the sign of product of three numbers
// function signOfProduct(a,b,c){
//   let product=a*b*c
//   if(product>=0){
//     return 'Positive'
//   }else{
//     return 'Negative'
//   }
// }
// let sign=signOfProduct(1,2,-3)
// console.log(sign)

//1.Krijoni nje funksion qe merr si parameter dy numra. Gjeni shumen e dy numrave, nese shuma eshte
//nje numer midis 50 dhe 100 ktheni 20 ne te kundert ktheni vete shumen.
// function number(a,b){
//   let sum=a+b
//   if(sum>=50&&sum<=100){
//     return '20'
//   }
//     else{
//       return sum
//     }
//   }

// let more=number(151,2)
// console.log(more)


// 2.Shkruani nje funksion qe merr si parameter 3 numra. Nese te tre numrat jane njesoj ktheni 30, nese dy
// numra jane njesoj ktheni 20 dhe ne te kundert ktheni shumen e tre numrave.
// function number(a,b,c){
//   let sum=a+b+c
//   if(a==b&&b==c&&a==c){
//     return '30'
//   }else if(a==b||a==c||b==c){
//     return '20'
//   }
//     else{
//       return sum
//     }
//   }

// let more=number(2,352,5)
// console.log(more)



// 3. Shkruni nje funksion qe merr si parameter nje string dhe kthen stringun ne te kundert(psh tastiera do
// the kthehet ne areitsat). Hint: perdorni metodat split(), reverse() dhe join().
// let text="tastiera"
// var myArray=text.split("")
// myArray=myArray.reverse()
// myArray=myArray.join('')
// console.log(myArray)



// 4.Shkruani nje funksion qe kthen true nese nje nga numrat eshte 50 ose nese shuma e tyre eshte 50.

// function number(a,b){
//    let sum=a+b
//    if(sum==50||(a==50||b==50)){
//      return 'true'
//    }
//      else{
//        return sum
//      }
//    }

//  let more=number(52,5)
//  console.log(more)




// 5.Krijoni nje funksion qe kthen diferencen e nje numri me 20. Nese numri eshte me i madh se 20 ktheni
// prodhimin e tij me 2.

//  function number(a,b){
//    let c=a-b
//    let sum=a*2
//    if(c<20){
//      return '20'
//    }
//      else{
//         return sum
//      }
//    }

//  let more=number(20,2)
//  console.log(more)



// 6. Define a function called multiplyFive which accepts a number and returns that number multiplied by
// 5.

//  var multiplyFive = function (number) {
//     return number * 5;
// }
// console.log(multiplyFive(3));
// console.log(multiplyFive(4));
// console.log(multiplyFive(5));
// console.log(multiplyFive(6));


// 7. Write a JavaScript function that returns a passed string with letters in alphabetical order.

// function alphabet_order(str)
//   {
// return str.split('').sort().join('');
//   }
// console.log(alphabet_order("xoni"));


//8.Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
//Sample object: 
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
//   };

var student =  { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12  };
  console.log(student);
  delete student.rollno;
  console.log(student);
  



  
// function log(text){
//   console.log(text)
// }
// log("hello world")//lloji void(bosh)

// function sum(a,b){
//   return a+b
// }
// let total=sum(5,2)
// console.log(total)//funksion jo bosh