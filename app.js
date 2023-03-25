// Questions

// 1.

// a)
// console.log('a')
// async function a(){
// return 'b';
// }
//  async function dd(){
//   const e= await a();
//    console.log('e',e)
// }
// dd()
// console.log('c')               
// when u call a function it waits like dd() here

// a,
// c,
// e,b.

// b) 
// console.log('a')
// async function a(){
// return 'b';
// }
//  async function dd(){
//   const e= a();
//    console.log('e',e)
// }
// dd()
// console.log('c')

// without async  its syntax error

// a,
//  e, promise {b}
// c,

// c)

// console.log('a')
// function a(){
// return 'b';
// }
//  async function dd(){
//   const e= a();
//    console.log('e',e)
// }
// dd()
// console.log('c')

// a,
// e,b,
// c

// d)
// console.log('a')
//  function a(){
// return 'b';
// }
//  async function dd(){
//   const e= await a();
//    console.log('e',e)
// }
// dd()
// console.log('c')

// a,c,e,b

// --------------------------------------------------------------------------------------------------------------------------------------------------

// 2.

// a)
// console.log('a')
// async function a(){
// return 'b';
// }
//  async function d(){
//   const e= await a();
//    console.log('e',e)
//     return 'g'
// }
// console.log(d())
// console.log('c')

// a, 
// promise pending (g if.e after wards u get it) , 
// c , 
// e,b 



// --------------------------------------------------------------------------------------------------------------------------------------------------

// b) 
// console.log('a')
// async function a(){
// return 'b';
// }
//  async function d(){
//   const e =  a();
//    console.log('e',e)
//     return 'g'
// }
// console.log(d())
// console.log('c')

// a,
// e,promise{b},
// promise{g},
// c,

// as called line by line

// --------------------------------------------------------------------------------------------------------------------------------------------------

// c)
// console.log('a')
// function a(){
// return 'b';
// }
//  async function d(){
//   const e=  a();
//    console.log('e',e)
//     return 'g'
// }
// console.log(d())
// console.log('c')

// a,
// e,b,
// promise{g},
// c

// --------------------------------------------------------------------------------------------------------------------------------------------------
// why no g
// 3)
// console.log('a')
// async function a(){
// return 'b';
// }
//  async function d(){
//   const e= a();
//    console.log('e',e)
//     return 'g'
// }
// d()
// console.log('c')

// a , 
// e,promise{b},                     
// remember it's promise b because async always returns a promise
// why no g because its not awaited so whats happening isthe code is not waiting for the promise to resolve before moving on to the next line of code. 
// Therefore, the console.log('c') statement is executed before the a() function completes and the promise resolves.
// c
// --------------------------------------------------------------------------------------------------------------------------------------------------
// ask this
// 4.
// function hello () {
//     return new Promise(function apple (resolve, reject) {
//       console.log("hello1")
//     resolve(2)
//       console.log("helloo11")
//   })
//   }
  
//   console.log(hello().then(res => console.log(res)))
// //   till .then it act as normal function
//   console.log("hello")

// hello1
// hello11
// promise {pending}
// hello
// 2 (no clue why its there)

// --------------------------------------------------------------------------------------------------------------------------------------------------

// ask this

// 5.
// async function a(){
//     return console.log("in a");
//   };
//   async function b(){
//       console.log("in b");
//       const res = await a();
//       console.log(res)
//   }
//   console.log(b());
//   console.log("c");



// --------------------------------------------------------------------------------------------------------------------------------------------------
// 6.

// function a() {
//     console.log("start a");
//     b();
//     console.log("end a");
//   }
  
//   function b() {
//     console.log("start b");
//     c();
//     console.log("end b");
//   }
  
//   function c() {
//     console.log("start c");
//     console.log("end c");
//   }
  
//   a();

//   start a , start b , start c , end c , end b ,end a

// --------------------------------------------------------------------------------------------------------------------------------------------------

// 7.

// console.log("start");

// setTimeout(function() {
//   console.log("async");
// }, 0);

// console.log("end");

// start , end , async

// --------------------------------------------------------------------------------------------------------------------------------------------------

// 8.

// function recursiveFunction(n) {
//     console.log("Value of n: " + n);
//     recursiveFunction(n + 1);
//   }
  
//   try {
//     recursiveFunction(1);
//   } catch (error) {
//     console.log("Stack overflow error: " + error);
//   }

//   A stack overflow error occurs when the call stack, which is a limited amount of memory used to keep track of function calls, becomes too large. 
//   In this case, the recursive calls to "recursiveFunction" continue to add new frames to the call stack without ever returning,
//    eventually causing the call stack to exceed its memory limit and triggering the stack overflow error.

// If a stack overflow error occurs, the catch block will be executed and
//  the error message "Stack overflow error: " along with the error object will be printed to the console.

// --------------------------------------------------------------------------------------------------------------------------------------------------

// 9.

// function infiniteLoop() {
//     infiniteLoop();
//   }
  
//   try {
//     infiniteLoop();
//   } catch (error) {
//     console.log(error);
//   }



// --------------------------------------------------------------------------------------------------------------------------------------------------

// 10.         How does the call stack handle promise functions in JavaScript?
 
// console.log("Start");

// new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve("Promise resolved");
//   }, 1000);
// })
// .then(function(result) {
//   console.log(result);
// })
// .catch(function(error) {
//   console.log(error);
// });

// console.log("End");



// start , end , promise resolved

// --------------------------------------------------------------------------------------------------------------------------------------------------
 
// 11. Explain the call stack and how it handles arrow functions in JavaScript.
 
// const a = () => {
//     console.log("Start a");
//     b();
//     console.log("End a");
//   }
  
//   const b = () => {
//     console.log("Start b");
//     console.log("End b");
//   }
  
//   a();

//   start a , start b , end b , end a


// --------------------------------------------------------------------------------------------------------------------------------------------------

// 12. how does it work in javascript

// function factorial(n, acc = 1) {
//     if (n === 0) {
//       return acc;
//     }
//     return factorial(n - 1, n * acc);
//   }
  
//   console.log(factorial(5)); // Output: 120

//  first 4*5 where 5 is accumulated and 4 is n-1  = 20
// next now acummulated is 20 and 3 so 3*20 = 60 
// now 2 * 60 = 120
// now when we take 1 -1 = 0 if its zero get acc so acc is 120




// --------------------------------------------------------------------------------------------------------------------------------------------------

// 13.
// function logA() { console.log('A')  }
// function logB() { logA(); }
// function logC() { logB(); }
// function logD() { logC(); }
// function logE() { logD(); }

// setTimeout(function timeout() {
//     console.log("TIMEOUTTTT!");
// }, 0);

// function logF() { logE(); }
// function logG() { logF(); }
// function logH() { logG(); }
// function logI() { logH(); }
// function logJ() { logI(); }
// logJ();

// A,
// timeout


// --------------------------------------------------------------------------------------------------------------------------------------------------

// 14. what happens in callstack

// let a = 10; 
// let b = 10;

// const add = (a,b) => a+b;
// console.log(add(a,b));

// function changeValues( ) {
// setTimeout(function () {
// a=15;
// b=15;
// },0);
// };

// changeValues();

// console.log(add(a,b));

// 20
// as we consoled 2 times
// 20


// --------------------------------------------------------------------------------------------------------------------------------------------------

// 15. what could be the output

// function c() {
//     throw new Error("Error in function C");
//   }
  
//   function b() {
//     c();
//   }
  
//   function a() {
//     b();
//   }
  
//   try {
//     a();
//   } catch (error) {
//     console.error(error);
//   }


//   error in function c







// --------------------------------------------------------------------------------------------------------------------------------------------------

//                                                                     Questions given by Ma's

// --------------------------------------------------------------------------------------------------------------------------------------------------

// 1. they r in replit for now thank you










  
