// const firstNameChange = (e) => {
//     const val = e.target.value;
//     if(val.length>3){
//         console.log('correct')
//     }
//     // console.log(e.target.value);
// }

const submitForm = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    const t = e.target;
    const res = {
        Hobbies: [],
    }
    for (let i = 0; i < t.length; i++) {
        //(2) console.dir(t[i].value);
        //(2) console.dir(t[i].type);
        //(1) console.log(e.target[i].value);
        const ty = t[i].type;
        if (ty != 'submit') {
            const vl = t[i].value;
            const nm = t[i].name;
            // console.log(ty, vl);

            if (ty != 'checkbox') {
                res[nm] = vl;
            }
            if (ty == 'checkbox' && t[i].checked) {
                res.Hobbies.push(vl);
            }
        }
    }
    console.log(res);
}

function sum(a,b,func){
    const ans=a+b;
    // func(ans); for callback
}
function print(x){
    console.log('    **',x,'****   ');
}

sum(3,4,print);


