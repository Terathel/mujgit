let employees = ["David", "Harry", "Hermiona", "Ron", "Draco"]

employees.forEach(function(person){
    console.log(person)
})

employees.forEach(function(){
    console.log("testujeme")
})

employees.forEach((person) => {
    console.log(person)
})

employees.forEach((name, index) => {
    console.log(index, name);
})

// Pro Git

//Pokus o push s kolizí 