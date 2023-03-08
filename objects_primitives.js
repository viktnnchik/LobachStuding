let person = {
    name: "viktor",
    sayHello: function () {
        console.log("Hello!")
    }
}

person.sayHello()

let user = {
    name: "zxc",
    sayName: function () {
        console.log("Ivan")
    }
};

user.sayName();

let FavouriteFilms = {
    sayName : function (){
        console.log("The lord of rings")
    },
    date : 13,
    country : "USA"

}
FavouriteFilms.cash= 10000
delete FavouriteFilms.cash
console.log(FavouriteFilms)
