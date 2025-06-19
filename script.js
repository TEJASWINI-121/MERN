
    // function add(a,b) {    //functions)
    //     return a + b;
        
    // }
    // const mul=(a,b) =>{
    //     return a * b;
    // }
    // console.log(add(4,3));
    // console.log(mul(2,3));
    

// const obj = {  
//     name:'TEJASWINI',
//     age:19,
//     greet:function() {
//         let name=obj.name;
//         let age=obj.age;
//         console.log(`Hello, my name is ${name} and I am ${age} years old.`);
//     }
// }
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.greet());


  //map function

// const mappednum=numbers.map((num)=>num*3)
// console.log(mappednum);



//filter function
// const posNum=numbers.filter((num)=>num>0);
// console.log(posNum);

// const negNum=numbers.filter((num)=>num%2!==0);
// console.log(negNum);

// //reduce function
// const total=numbers.reduce((sum,n)=>sum+0)
// console.log(total);



// //obj array
// const products=[
//     {name:'laptop',price:50000},
//     {name:'mobile',price:20000},
//     {name:'tablet',price:3000},
//     {name:'watch',price:15000}

// ]
// const productPrice=products.reduce((sum,product) => sum + products.price,0)
// console.log(productPrice);


//filtering products with price less than 5000
// const numresult=products.filter((product)=>product.price<5000)
// console.log(numresult);



//destructuring the object and arrayy
// const user={name:'c32',password:'1234555'}
// const {name,password}=user
// console.log(password);


// const arr=[1,2,3,4,5]
// const [first,second,third,fourth,fifth]=arr
// console.log(first);
// console.log(second);



// //spread operator
// // const arrs=[1,2,3]
// // const copy=[...arr1,4,5,6]
// // console.log(copy);


// const arr1=[1,2,3]
// const arr2=[4,5,6]  
// const arr3=[...arr2,...arr1,7,8,9] //combining two arrays
// console.log(arr3);


//spread operator with objects
// const n=[1,2,3,4,5]
// const [first1,second1,...spread]=n//spreoperator
// console.log(spread);






//rest operator
// const n1=[1,2,3,4,5]
// const [first1,second1,...rest]=n1//restperator
// console.log(rest);


// function add(...args) { //rest operator
//     return args.reduce((sum, num) => sum + num, 0);
// }
// console.log(add(1, 2, 3, 4, 5)); // Output: 15



//callback function

// function call(){
//     console.log("Hello, this is a callback function!");
// }
// function fun(name,callback){
//     callback();
//     return `Hello ${name}`;
// }
// console.log(fun("Tejaswini",call)); // Output: Hello Tejaswini



async function fetchUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        data.map((a)=>console.log(a.name)); // Log each user's name
        //console.log(data);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
fetchUsers(); // Call the function to fetch users


