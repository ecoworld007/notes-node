let square = x => x*x;
console.log(square(9));

let user = {
    name : 'Himanshu Negi',
    sayHi : () => {
        //console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt (){
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}

user.sayHi();//this keyword does not get bound
user.sayHiAlt(1,2,3);