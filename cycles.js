console.log("true");
console.log("true");
let name = "Viktor";
if (name === "Viktor") {
    console.log(`Привет, ${name}`);
    name = "Gena";
} else {
    console.log(`Привет, ${name}`);
}
if (name === "Ilia") {
    console.log(`Привет , ${name}`)
} else if (name === "Petr") {
    console.log(`Привет , ${name}`)
} else if (name === "Viktor") {
    console.log(`Привет , ${name}`)
} else {
    console.log(`Привет , 123`)
}
let name1 = "gg"
if (name1 === "gg1") {
    console.log(123)
} else if (name1 === "gg") {
    console.log(1)
} else if (name1 === "gg2") {
    console.log(2)
} else {
    console.log(3)
}
let z = name === "Viktor" ? 2 : 3;
console.log(z)
const age="18";
switch (age){
    case "18":
        console.log(18);
        break;
    case 17:
        console.log(17);
        break;
    default:
        console.log(16);
        break;
}

const lenght1=39;
const lenght2=45;
const lenght3=79;
if (lenght1>lenght2){
    if (lenght1>lenght3){
        console.log(lenght1);
    }else {
        console.log(lenght3)
    }
}else if (lenght2>lenght3){
    console.log(lenght2)
}else {
    console.log(lenght3)
}


const man1 = "admin"
 const man2 = "mod"
 const man3 = "user"

switch (man3){
    case "admin":
        console.log(man1);
        break;
    case  "mod":
        console.log(man2);
        break;
    case "user":
        console.log(man3);
        break;
}


const lenght12=139;
const lenght22=85;
const lenght32=79;

if(lenght12>lenght22 && lenght12>lenght32){
    console.log(lenght12)
}else if(lenght22>lenght12 && lenght22>lenght32){
    console.log(lenght22)
}else {
    console.log(lenght32)
}
console.log(null||0||""||undefined)
console.log("яблоко"&& true && null && 1)
console.log(0 || true && "false"||null)
console.log(0&&true||"false"&&null)
console.log(!0&&!!1)
console.log(!(null || !"апельсин"&&true))
