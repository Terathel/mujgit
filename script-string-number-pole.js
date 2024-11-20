//String - na stringu máme spousta předpřipravených metod k použití jako lenght, trim, toLowerCase, includes atd. více na MDN

let password = "vb74fdhsd5l4hh"

const checkPassword = () => {
    if(password.includes("1234"))console.log("Heslo nelze použít z důvodu 1234"); else {
        if(password.length > 13) console.log("Velmi silné heslo")
            else if(password.length < 14 &&  7 < password.length ) console.log("silné heslo")
                else console.log("slabé heslo")
    }

}
console.log(password.length)
checkPassword(password)

//Number - knihovna Math, otěp více na MDN

let pocetHodu = 6;
let number;
let result = 0;

for (let i = 0; i < 6; i++ ){
    number = Math.ceil(Math.random() * 6)
    result += number;
}

if(result >= 25) console.log("vítěz"); else console.log("Nevadí zkus to znovu")
console.log(result)

//Pole - Prvky pole leze, přepsat, přidat či odebrat na konec nebo začátek pole použítím metod níže.
// přepsání prvku
let testArray = ["test1", "test2", "test3"]
testArray[0] = "Nový prvek v poli"
console.log(testArray)

// přidání posledního prvku 
let myArray = ["Jedna", "Dva", "Tři"]
myArray.push("Čtyři")
console.log(myArray)

// odstranění posledního prvku pole
myArray.pop()
console.log(myArray)

// přidání prvního prvku
myArray.unshift("Nultý")
console.log(myArray)

// odstranění prvního prvku
myArray.shift()
console.log(myArray)

// Metoda splice - trochu složitější metoda, která upravuje přímo v poli. 

//zde parametry (0,1) 0-index kde se má začít, 1 počet výrazů k odstranění
let mySecondArray = ["Jedna", "Dva", "Tři"]
mySecondArray.splice(0,1)
console.log(mySecondArray)

//zde parametry (2,0, "Tři") 2- index, kde se má začít, 0- počet prvků k vymazání a "Tři"- prvek pole který se má vložit. Metoda splice vždy ukládá na prvek, který je index a ostatní prvky posune.
let myThirdArray = ["Jedna", "Dva", "Čtyři", "Pět"]
myThirdArray.splice(2,0,"Tři")
console.log(myThirdArray)


