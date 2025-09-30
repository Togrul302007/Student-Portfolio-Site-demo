let objectim1 = [["'Lorem1 Lorem2 Lorem3'", "Albert"], ["'Lorem4 Lorem5 Lorem6'", "Robert"], ["'Lorem7 Lorem8 Lorem9'", "Kalliman"]]

let objectim2 = [["'Lorem11 Lorem12 Lorem13'", "Socrates"],["'Lorem14 Lorem15 Lorem16'", "Hippokrat"],["'Lorem17 Lorem18 Lorem19'", "Osman Bey"]]

let objectim3 = [["'Lorem21 Lorem22 Lorem23'", "Ertugrul Bey"],["'Lorem24 Lorem25 Lorem26'", "Orhan Bey"],["'Lorem27 Lorem28 Lorem29'", "Suleyman Shah"]]

let secim1 = objectim1[Math.floor(Math.random() * 3)];
document.querySelector(".element1").innerText = secim1[0];
document.querySelector(".small1").innerText = secim1[1];
let secim2 = objectim2[Math.floor(Math.random() * 3)];
document.querySelector(".element2").innerText = secim2[0];
document.querySelector(".small2").innerText = secim2[1];
let secim3 = objectim3[Math.floor(Math.random() * 3)];
document.querySelector(".element3").innerText = secim3[0];
document.querySelector(".small3").innerText = secim3[1];


console.log(secim1)
console.log(secim2)
console.log(secim3)

// console.log(Math.floor(Math.random() * 3) + 1)