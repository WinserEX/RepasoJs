let employee = "Winser"
let job = 'Project Manager'

console.log(`${employee} is a ${job}`) 

const login = user => {
    if ( user.name == "admin" && user.password == "123456") {
        console.log("correct");
    }else{
        console.log("Wrong");
    }
}

const user = {
    name: "pepe",
    password: "123456"
}

//map is awesome and this is how it works
let numeros = [1,2,3,4,5,6];
const double = num => num * 2;
const doubled = numeros.map(double)

