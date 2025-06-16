console.log("Hello World")

// hoisting
console.log(s)
var s = "string" 

s = 4
console.log(s)

// let can be reassigned
let a = 'hi';
console.log(a)
a = '20';
console.log(a)

// const cannot be reassigned
const c = 20;
console.log(c)

// Indentifier - CamelCase
let firstName;
let lastName;

// comparison
console.log(a==c); // true - values

console.log(a===c); //false - datatypes

// Conditions


function checkAge(){
    if(age < 18){
        console.log(age);
    }
    if(age>50){
        console.log("old");
    }else if (30 <= age < 60){
        console.log("adultug");
    }else if (18 <= age <30){
        console.log("middle age");
    }
    else{
        console.log("Young");
    }
}

// loops
for (let i =0; i<5; i++){
    console.log(i);
}

// Objects
const Movie = {
    Name: "Gilli",
    Year: 2001,
    starring: {
        hero: "vijay",
        heroine: "trisha",
    },
    Music: "g"
}

console.log(Movie)
Movie.Year = "2004"
// Dot notation
console.log(Movie.Year);
// bracket
console.log(Movie.starring['hero']);
delete Movie.Music;
console.log(Movie);

// Arrays
const Movies = []
Movies.push(Movie);
console.log(Movies[0]['Name'])
console.log(Movies[0]['starring'].heroine)


// Event listerner
document.getElementById("checkAge").addEventListener("click", function() {
    let age = document.getElementById("age");
    console.log(age.value);
    checkAge(age);
});
