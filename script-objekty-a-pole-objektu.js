// Objekty v JavaScriptu

let myBook = {
    title: "Harry Potter a kámen mudrců",
    author: "J.K.Rowling",
    published: 1997
}

console.log(myBook.title)
console.log(myBook.author)
console.log(myBook.published);

// Pole objektů a vypsání pomocí funkce.
const myBooks = [{
    title: "Harry Potter a kámen mudrců",
    author: "J.K.Rownling",
    published: 1997,
    bestseller: true
},{
    title: "Harry Potter a tajemná komnata",
    author: "J.K.Rownling",
    published: 1998,
    bestseller: true
},{
    title: "Harry Potter a vězeň z azkabanu",
    author: "J.KRownling",
    published: 1999,
    bestseller: false
}]

let getBook = (index) => {
    return `Název: ${myBooks[index].title}, Autor: ${myBooks[index].author}, Publikováno: ${myBooks[index].published}`
}

console.log(getBook(1))
console.log(getBook(0))
console.log(getBook(2))

// Přidání podmínky pro výpis zda je kniha bestseller 
const bestseller = (index) => {
    if(myBooks[index].bestseller){
        return `Tato kniha ${myBooks[index].title} je bestseller.`
    }else return `Tato kniha ${myBooks[index].title} není bestseller!`
}

console.log(bestseller(2))

