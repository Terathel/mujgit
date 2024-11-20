// variable shadowing
let myName = "David"

if(true){
    let myName = "Harry"

    if(true){
        let myName = "Hermiona"
        console.log(myName)    
    }
}

if(true){
    console.log(myName)
}
let number;
let naDruhou = function(number){
    let result = number * number;
    return result;
}

console.log(naDruhou(5))

const naTreti = (num) => {
    let result = num * num * num
    return result;
}

console.log(naTreti(4))

const adultChecker = (age) => {
    if(age >= 18) {
        console.log("dospělý")
    }else {
        console.log("dítě")
    }
}

adultChecker(18);

//vícero parametrů a defaultní parametry ve funkci

const zaznam = (skore, name="Vojta") => {
    return `Tvoje jmeno je ${name} a tvé skore je ${skore}`
}

console.log(zaznam(50))

// Tenplate string

let name = "Vojta";
let age = 39;

const getAge = () => {
    return `Ahoj, jmenuji se ${name} a je mi ${age} let.`
}

console.log(getAge())

let firstName = "Harry"
let secondName = "Potter"
let age2 = 15
let firstFriend = "Ron"
let secondFriend = "Hermiona"

const getFriend = () => {
    return `Ahoj jmenuji se ${firstName} ${secondName}, je mi ${age2} let a moji přátelé jsou ${firstFriend} a ${secondFriend}`;  
}

console.log(getFriend());
