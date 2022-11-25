const towns = ["Moscow", "Paris", "London", "NN"];

console.log(towns);
towns[1] = "Milan"

console.log(towns)

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix[1][1])

towns[4] = "St.Peterburg"
console.log(towns)
towns[9] = "Berlin"
console.log(towns)

let FavouriteFilms = ["pirates of carribien sea", "The alien"]
console.log(FavouriteFilms[0])
FavouriteFilms.push("Mars")
console.log(FavouriteFilms)
let last = FavouriteFilms.pop
console.log(FavouriteFilms.length)
console.log(FavouriteFilms[FavouriteFilms.length - 1])