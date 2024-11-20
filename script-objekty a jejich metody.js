//Metody - funkce, která je přiřazena nějakému objektu

let person = {
    firstName: "Vojtěch",
    lastName: "Malínský",
    age: 39,
    height: 171,
    salary: 40000,
    great: (friends) => {
        return (`Ahoj, jmenuji se ${person.firstName} a mám ${friends} přátel.` ) 
    },
    toWork: (job) => {
        return "Jdu do své práce což je " + job
    }
}

console.log(person.great(10))
console.log(person.toWork("programátor"))

// Procvičení objektu s metodami a použití podmínek 
// Při použití return musíme to někde vypsat, napříkld v console.log() nebo kdekoli jinde.
let school = {
    type: "SPS",
    street: "Školní 109",
    city: "Trutnov",
    capacity: 201,
    open: function(){
        return `Škola ${this.type} ${this.city} je otevřená.`
    },
    closed: function(){
        return `Škola ${this.type} ${this.city} je zavřená.`
    },
    vladniNarizeni: false
}

let state = () => {
    if(school.vladniNarizeni) console.log(school.open() )
        else console.log(school.closed())
}

console.log(state())