const { log, dir } = console;

// function intersection(user1, user2) {
//     const user1Range = [...range(user1[0][0], user1[0][1]), ...range(user1[1][0], user1[1][1])];
//     const user2Range = [...range(user2[0][0], user2[0][1]), ...range(user2[1][0], user2[1][1])];

//     const result = intersectionArray(user1Range, user2Range);

//     return result
// }

// const range = (start, stop, step = 1) => Array.from({ length: ((stop - start) / step) + 1 }, (elem, index) => start + index * step);
// const intersectionArray = (arr1, arr2) => arr1.filter((item) => new Set(arr2).has(item));

// const prettyTime = (arr) => {
//     let result = []
//     const start = arr[0];
//     let end;
//     for (let i = start; i < arr.length; i++) {
//         if (i + )
//     }
// }

// log(intersection([[8, 12], [17, 22]], [[5, 11], [14, 18], [20, 23]])) // [[8, 11], [17, 18], [20, 22]])

// function voda(arr) {
//     let left = 0;
//     let right = arr.length

//     return right
// }

// log(voda([1, 8, 6, 2, 5, 4, 9, 3, 7]))

// const obj = {
//     a: 42,
//     say: function() {
//         const func = function() {
//             log(this.a)
//         }
//         setTimeout(func.bind(this), 1000)
//     }
// }

// obj.say()

// function sum (a) {
//     if (!a) return 0;

//     let sum = a;
//     return function help (b) {
//         if(b) {
//             sum = sum + b
//             return help
//         } else {
//             return sum
//         }
//     }
// }

// log(sum())
// log(sum(3)(4)())
// log(sum(3)(4)(5)(5)())

// function sum (a, b) {
//     return a + b
// }

// function mul (a,b) {
//     return a *b
// }

// function calculate(func) {
//     const args = []
//     return function help(a) {
//         if(a) {
//             args.push(a);
//             if(args.length === func.length) {return func(...args)}
//             return help
//         }
//     }
// }

// log(calculate(sum)(1)(2))

// const add = (...args) => {
//     if(!args.length) return "Error"

//     if(args.length === 1) {
//         return (b) => {
//             return b + args[0]
//         }
//     } else {
//         return args.reduce((acc, num) => acc + num)
//     }
// }

// log(add(2,5))
// log(add(2)(5))

// log chtoto 1

// const object = {
//     name: 'sasha',
//     method() {
//         log( "out method ",this)
//     },
//     method1: function() {
//         log( "out method1 ",this)

//     },
//     method2: () => {
//         log( "out method2 ",this)
//     }

// }

// // log(object)
// log(object.method())
// log(object.method1())
// log(object.method2())

// log(this)

// requestAnimationFrame(() => log('raf'))

// setTimeout(() => {
//     log('settimeout')
// })

// const p = Promise.resolve("resolve");
// p.then((res) => {
//     log(res)
// })

// for (let i = 0; i < 100; i++) {

//     p.then(() => {
//         log(i)
//     })
// }

// log('hello log');

// const objMap = new Map()

// function sum (arg, count = 0) {
//     let count = count;

//     if(arg === undefined) {
//         return count
//     } else {
//         count = count + arg;
//         return function help(arg)  {
//             if(arg === undefined) {
//                 return count
//             } else {
//                 count = count + arg;
//                 return help
//             }
//         }
//     }
// }

// function sum (arg1, count = 0) {
//     let counter = count;

//     if(typeof arg1 === "undefined") {
//         return counter
//     } else {
//        return (arg2) => sum(arg2, counter + arg1)
//     }
// }

// log(sum()) //0
// log(sum(3)()) //1
// log(sum(2)(2)()) //4

// f13333
// f23333