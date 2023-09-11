// Var vs let vs const 
// Scope

// function name() {   //function scope
    
// }

// {  // block scope        
//     const a = 5;
// }
// console.log(a);

// var a = 5;   //global scope

                                        //-- variable shadowing --//

// function  test() {
//     let a = "Hello";

//     if (true) {
//      let a = "Hi";
//      console.log(a)
//     }
//     console.log(a)
// }
// test()

                                       //-- Illegal Shadowing --//

// function test() {
//     var a = "Hello";
//     let b = "Bye";

//     if(true) {
//      let a = "Hi";
//      var b = "GoodBye";
//      console.log(a)
//      console.log(b)
//     }
// }
// test();

                                        //-- Delcartion --//

// var a;                                        
// var a; 

// let a;
// let a;

// const a;
// const a;

                                    //  Declartion without initialistion //

// const a = 5;

                                    //  Re-initialistion //
// var a = 5;
// a = 5;

// let a = 5;
// a = 5;

// const a = 5;
// a = 5;

                                    // Hoisting //

// console.log(count)
// let count = 1;
// var count2 = 2;

// function abc() {
//     console.log(a)

//     var a = 10;
// }
// abc()
function abc() {
    console.log(a, b, c)

    const c = 30;
    let b = 20;
    var a = 10; 

}
abc()

















