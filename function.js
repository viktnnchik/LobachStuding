let MyfavouriteFilm = {
    name: "The lord of rings",
    date: 2010,
    sayName: function () {
        console.log("The lord of rings");
    },
};
MyfavouriteFilm.money = 1000;
delete MyfavouriteFilm.date;
console.log(MyfavouriteFilm);
MyfavouriteFilm.sayName();
let user = {
    sayName: function () {
        console.log("Ivan");
    },
};
user.sayName();

let str = "Hello Viktor";
console.log(str);

let number = 1.5534343;
console.log(number.toFixed(2));
let num = 255;
console.log(num.toString());
console.log(num.toString(8));
console.log(num.toString(2));
let func = (number, word) => {
    let big = word[number];
    console.log(big.toUpperCase());
    if (word[number] > big.toUpperCase()) {
        console.log(true);
    } else {
        console.log(false);
    }
};
func(0, "BadxxxX");
