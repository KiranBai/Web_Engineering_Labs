const user = {
    name:'kiran',
    password: '123' ,
    email:'kiran@gmail.com',
    passkey : '23',
    secrete : 'secure'
}

const {password,passkey,secrete, ...restofobject} = user;
console.log(restofobject);

const xy1 = {
    name:'KiranTalreja',
    password: '123' ,
    email:'kiranT@gmail.com',
    passkey : '23',
    secrete : 'secure'
}
const xy2=xy1;
xy1.name = 'kiran';
console.log(xy2);
console.log(xy1);


console.log('Starting setTimeout example...');
setTimeout(() => {
console.log('This message will be displayed after 2 seconds.');
}, 2000); // 2000 milliseconds = 2 seconds
console.log('setTimeout example scheduled.');