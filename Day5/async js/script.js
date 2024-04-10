// // console.log('GEC Start');

// function printPretty(elem){
//     console.log('prettyStart');
//     let ans = 2+3;
//     console.log(ans);
//     console.log('prettyEnd');
// }

// // setTimeout(printPretty,10000);

// // console.log("GEC End");



// const btn = document.getElementById( 'btn' );
// btn.addEventListener("click",printPretty);

// console.log('Start');

// const req = fetch("https://api.github.com/users/kajla22");

// console.log(req);

// req.then(() =>console.log('Fetched') );

// console.log('End');

// console.log('Start');
//    let a= fetch('https://dummyjson.com/products/1')
//     .then(res => console.log(res))
//     // .then(json => console.log(json))
//     console.log(a);

//     console.log('End');

console.log('Start');
let req = fetch('https://dummyjson.com/products/1')
let res = req.then(res => res.json());
res.then((data) => console.log(data));
console.log('End');