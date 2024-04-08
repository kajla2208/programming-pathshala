// const res= document.querySelector("div");
// const c= document.querySelector("p");
// // const c= document.querySelector("p:nth-of-type(2)");
// console.log(res);
// //div.innerHTML="<p>Hello World</p>";
// //div[0].innerHTML="<p>Hello World</p>"
// // res.remove();
// res.removeChild(c);

// function getInfo(){
//     // console.log("Btn Clicked");
//     const d= document.querySelector('div');
//     // const el = document.createElement('p');
//     // el.innerText= "My Name is pppp";
//     d.prepend('My Name is pppp');
// }
function getInfo(e){
    console.log(e);
    // const d= document.querySelector("div");
    // d.prepend("My Name is pppp");
    // e.target.setAttribute('style','color:red');
    // e.target.setAttribute('style','background-color: green');
    e.target.style.backgroundColor='green';
    e.target.style.color='red';
}