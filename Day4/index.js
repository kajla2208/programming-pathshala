// let a=new String('Hello');
// let b = "hello";
// if(a==b){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }

// const obj={
//     "name" : "abk",
//     "lastname": "kkk",
// }

// const str = JSON.stringify(obj);
// document.write(str);

// const obj={
//         "name" : "abk",
//         "lastname": "kkk"
//     }
    
// console.log(obj);

// const obj={
//         "name" : "abk",
//         "lastname": "kkk",
//     }
// obj.name=20;
// console.log(obj);

// let arr=[1,2,3,4];
// arr=[2,3,4];
// console.log(arr);

// const arr=[1,2,3,4];
// arr[1]=20;
// console.log(arr);

// const arr=[1,2,3,4];
// arr[10]=20;
// console.log(arr);
// console.log(arr.length);
// console.log(typeof(arr));
// console.log(Array.isArray(arr));

// const obj={
//             "name" : "abk",
//             "lastname": "kkk",
//         }
//     console.log(obj);

// let k=[1,2,3,4];
// let k2={"name":"ajay"};
// let k3 =undefined;
// let k4= null;

// console.log(k instanceof Object);
// console.log(k2 instanceof Object);
// console.log(k3 instanceof Object);
// console.log(k4 instanceof Object);

// function checkIfobj(x){
//     if(Array.isArray(x)){
//         console.log("no");
//     }
//     else if(typeof (x) === 'object'){
//         console.log("yes");
//     }
//     else{
//         console.log("no");
//     }
// } 

// checkIfobj([1,2,3,4]);
// checkIfobj({"name":"ajay"});


// const arr=["name" , 2];
// const obj ={"name":"ajay" ,age:20};

// for(let i=0;i<2;i++){
//     console.log(i);

// }

// for(let i of arr){
//     console.log(i);
// }
// for(let i of obj){
//     console.log(i);
// }

// for(let i in arr){
//         console.log(i);
//     }
//     for(let i in obj){
//         console.log(i);
//     }


// console.log(window);
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// console.log(window.document);
// console.dir(window.document);
// console.log(window);
// console.log(console);
// console.dir(window);

// const s= document.getElementsByTagName('h1');
// console.log(s);

// const ss= document.getElementById('t2');
// console.log(ss);

// const s1= document.querySelectorAll('div>h3');
// console.log(s1);

// const s1= document.querySelector('h3');
// console.log(s1);

// const s1= document.getElementById("ht1");
// s1['innerText']="Hello World!";
// s1.innerText="Hello World!";
// console.log(s1);



// const s1= document.getElementsByTagName("div");
// s1[0].innerText="<h4>Hello World!</h4>";
// s1[0].innerHTML="<h4>Hello World!</h4>";
// console.log(s1);

// const ne = document.createElement("h3");
// ne.innerText= "Dynamic Text";
// // console.log(ne);
// document.appendChild(ne);


// const ne = document.createElement("h3");
// ne.innerText= "Dynamic Text";
// // console.log(ne);
// const firstDiv = document.getElementsByClassName("c1");
// firstDiv[0].appendChild(ne);

const e=document.getElementById('ht1');
e.remove(2);