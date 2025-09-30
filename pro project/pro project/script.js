const login = document.querySelector(".login");
const second = document.querySelector(".second");
const part1 = document.querySelector(".part1");
const part2 = document.querySelector(".part2");
const qeyd = document.querySelector(".qeyd");
const elem = document.querySelector(".daire")

const element = document.querySelector(".account");
const del = document.querySelector(".delete")
const dl = document.querySelector(".dl")

second.classList.add("art");
part1.classList.add("art1");
part2.classList.add("art1");

let loginStatus = false

let load = document.querySelector(".pageload")
function loadingler() {
    setTimeout(() =>{
        load.style.display = "none"
    },2000)
}
loadingler()


function check(e){
    var user = document.querySelector(".user").value;
    var email = document.querySelector(".email").value;
    if(user.length !=0 && email!= ""){
        console.log("Success");
        // elem.classList.replace("nope","gor")
        
        element.classList.replace("nope","gor")
        elem.classList.replace("nope","gor");
        
        alert("Success!");
        var user2 = document.querySelector(".user").value;
        let split_user2 = user2.split(" ");
        let soz = ""
        for(let elem of split_user2){
            soz+=elem.charAt(0);
        }
        part1.classList.replace("art","art1");
        part2.classList.replace("art","art1");
        second.classList.replace("art1","art")
        document.querySelector(".daire1").textContent = soz
        document.querySelector(".daire").textContent = soz
        var email2 = document.querySelector(".email").value;
        
        document.querySelector(".username").textContent = "Username:" + " " + user2;
        document.querySelector(".email1").textContent = "Email:" + " " + email2;
        loginStatus = true
        qeyd.style.display = "none"
        let load2 = document.querySelector(".pageload")
        function loadings() {
            setTimeout(() =>{
                load2.style.display = "none"
            },2000)
        }
        loadings()
        // location.reload(true)
    }
    else{
        alert("Pelase fill the gaps correctly!")
        console.log("Pelase fill the gaps correctly!");
        e.preventDefault()
    }
}

login.addEventListener("click", check);

// element.classList.add("nope")


function fn2(){
    part1.classList.replace("art1","art");
    part2.classList.replace("art1","art");
    
    second.classList.replace("art","art1")
}


qeyd.addEventListener("click",fn2)

function add(){
    let me = document.querySelectorAll("a");
    for(let item of me){
        item.classList.add("roboto-uniquifier")
    }
}
add()


function fn(){
    dl.classList.replace("none","block");
}

elem.addEventListener("click", fn)




const cix = document.querySelector(".cix")

function cixx(e){
    element.classList.replace("gor","nope")
    elem.classList.replace("gor","nope");  
    location.reload(true)
}

cix.addEventListener("click",cixx)


function sil(){
    dl.classList.replace("block", "none");
    
}

del.addEventListener("click",sil)



// ***********************************************//

let objectim1 = [["\"Live as if you were to die tomorrow. Learn as if you were to live forever.\"", "Mahatma Gandhi"], ["\"The more that you read, the more things you will know. The more that you learn, the more places you’ll go.\"", "Dr. Seuss"], ["\"Tell me and I forget, teach me and I may remember, involve me and I learn.\"", "Benjamin Franklin"]]

let objectim2 = [["\"A man who asks a question is a fool for a minute, a man who does not is a fool for life.\"", "Confucius"],["\"Study without desire spoils the memory, and it retains nothing that it takes in.\"", "Leonardo da Vinci"],["\"Education is not the filling of a pail, but the lighting of a fire.\"", "William Butler Yeats"]]

let objectim3 = [["\"A wise man can learn more from a foolish question than a fool can learn from a wise answer.\"", "Bruce Lee"],["\"The purpose of education is to replace an empty mind with an open one.\"", "Malcolm Forbes"],["\"I am always ready to learn although I do not always like being taught.\"", "Winston Churchill"]]

let secim1 = objectim1[Math.floor(Math.random() * 3)];
document.querySelector(".elementimm1").innerText = secim1[0];
document.querySelector(".small1").innerText = secim1[1];
let secim2 = objectim2[Math.floor(Math.random() * 3)];
document.querySelector(".elementimm2").innerText = secim2[0];
document.querySelector(".small2").innerText = secim2[1];
let secim3 = objectim3[Math.floor(Math.random() * 3)];
document.querySelector(".elementimm3").innerText = secim3[0];
document.querySelector(".small3").innerText = secim3[1];


console.log(secim1)
console.log(secim2)
console.log(secim3)


const left = document.querySelector(".left");
const right = document.querySelector(".right");

function right1(){
    const k1 = document.querySelector(".k1");
    const k2 = document.querySelector(".k2");
    const k3 = document.querySelector(".k3");
    k1.classList.replace("k1","k2");
    k3.classList.remove("card_an");
    k2.classList.remove("card_an");
    k1.classList.add("card_an");
    k3.classList.remove("card_an1");
    // k2.classList.remove("card_an")
    k2.classList.replace("k2","k3");
    // k2.classList.add("card_an");
    // k3.classList.remove("card_an")
    k3.classList.replace("k3","k1");
    // k3.classList.add("card_an");
}


right.addEventListener("click",left1)

function left1(){
    
    const k1 = document.querySelector(".k1");
    const k2 = document.querySelector(".k2");
    const k3 = document.querySelector(".k3");
    k3.classList.add("card_an1");
    k2.classList.remove("card_an1");
    k1.classList.remove("card_an");
    k2.classList.replace("k2","k1");
    k3.classList.replace("k3","k2");
    k1.classList.replace("k1","k3");
}


left.addEventListener("click",right1)


let htmlcss1 = document.querySelector(".htmlcss");
let javascript = document.querySelector(".javascript");
let java = document.querySelector(".java");
let cplusplus = document.querySelector(".cplus");
let git1 = document.querySelector(".git");
let datastructure = document.querySelector(".datastructure");
let python = document.querySelector(".python");
let sql = document.querySelector(".sql");
let manqodb = document.querySelector(".manqodb");
let mlbasis = document.querySelector(".mlbasis");

let yenii = document.querySelector(".minee");
let yess = document.querySelector(".yes");
let noo = document.querySelector(".no");
let yess1 = document.querySelector(".yes1");
let noo1 = document.querySelector(".no1");
let yess2 = document.querySelector(".yes2");
let noo2= document.querySelector(".no2");
let yess3 = document.querySelector(".yes3");
let noo3 = document.querySelector(".no3");
let yess4 = document.querySelector(".yes4");
let noo4 = document.querySelector(".no4");
let yess5 = document.querySelector(".yes5");
let noo5 = document.querySelector(".no5");
let yess6 = document.querySelector(".yes6");
let noo6 = document.querySelector(".no6");
let yess7 = document.querySelector(".yes7");
let noo7 = document.querySelector(".no7");
let yess8 = document.querySelector(".yes8");
let noo8 = document.querySelector(".no8");
let yess9 = document.querySelector(".yes9");
let noo9 = document.querySelector(".no9");



function elavee0(e){
    e.preventDefault()
    let secdiyim = document.querySelector(".ustalerta");
    secdiyim.style.display="flex"
    document.querySelector("body").style.backgroundColor = "green"
}
htmlcss1.addEventListener("click",elavee0)

function elavee01(){
    let secdiyim = document.querySelector(".ustalerta");
    secdiyim.style.display="none"
}
noo.addEventListener("click", elavee01)

function elavee(e){
    if(loginStatus == true){
        let secim = document.querySelector(".elaveedinler");
        let newelement = document.createElement("p");
        newelement.classList.add("elaveedin")
        newelement.innerText = " > Html and Css";
        secim.appendChild(newelement)
        let secdiyim = document.querySelector(".ustalerta");
        secdiyim.style.display="none";
        // window.location.assign("html&Css/index.html")
    }
    else{
        alert("Please login the site")
    }
}
yess.addEventListener("click", elavee)

//------------------------------------------------------------------------------

function elavee0a(e){
    e.preventDefault()
    let secdiyim1 = document.querySelector(".ustalerta1");
    secdiyim1.style.display="flex"
}
javascript.addEventListener("click",elavee0a)

function elavee02(){
    let secdiyim1 = document.querySelector(".ustalerta1");
    secdiyim1.style.display="none"
    secdiyim8.style.backgroundColor = "gray"

}
noo1.addEventListener("click", elavee02)

function elaveea(){
    if(loginStatus == true){
        let secim1 = document.querySelector(".elaveedinler");
        let newelement = document.createElement("p");
        newelement.classList.add("elaveedin")
        newelement.innerText = " > Javascript";
        secim1.appendChild(newelement)
        // //window.location.href = "Javascript/index.html"
        let secdiyim1 = document.querySelector(".ustalerta1");
        secdiyim1.style.display="none"
    }
    else{
        alert("Please login the site")
    }
}
yess1.addEventListener("click", elaveea)

//------------------------------------------------------------------------------

function elavee0b(e){
    e.preventDefault()
    let secdiyim2 = document.querySelector(".ustalerta2");
    secdiyim2.style.display="flex"
}
java.addEventListener("click",elavee0b)

function elavee03(){
    let secdiyim2 = document.querySelector(".ustalerta2");
    secdiyim2.style.display="none"
}
noo2.addEventListener("click", elavee03)

function elaveeb(){
    if(loginStatus == true){
        let secim2 = document.querySelector(".elaveedinler");
        let newelement = document.createElement("p");
        newelement.classList.add("elaveedin");
        newelement.innerText = " > Java Programming";
        secim2.appendChild(newelement)
        //window.location.href = "Java/index.html"
        let secdiyim2 = document.querySelector(".ustalerta2");
        secdiyim2.style.display="none"
    }
    else{
        alert("Please login the site")
    }
}
yess2.addEventListener("click", elaveeb)

//------------------------------------------------------------------------------

function elavee0c(e){
    e.preventDefault()
    let secdiyim3 = document.querySelector(".ustalerta3");
    secdiyim3.style.display="flex"
}
cplusplus.addEventListener("click",elavee0c)

function elavee04(){
    let secdiyim3 = document.querySelector(".ustalerta3");
    secdiyim3.style.display="none"
}
noo3.addEventListener("click", elavee04)

function elaveec(){
    if(loginStatus==ture){
        let secim3 = document.querySelector(".elaveedinler");
        let newelement = document.createElement("p");
        newelement.classList.add("elaveedin");
        newelement.innerText = " > C++ Programming";
        secim3.appendChild(newelement)
        let secdiyim3 = document.querySelector(".ustalerta3");
        secdiyim3.style.display="none"
        //window.location.href = "C++/index.html"

    }
    else{
        alert("Please login the site")
    }
}
yess3.addEventListener("click", elaveec);

//------------------------------------------------------------------------------

function elavee0d(e){
    e.preventDefault()
    let secdiyim4 = document.querySelector(".ustalerta4");
    secdiyim4.style.display="flex"
}
git1.addEventListener("click",elavee0d)

function elavee05(){
    let secdiyim4 = document.querySelector(".ustalerta4");
    secdiyim4.style.display="none"
}
noo4.addEventListener("click", elavee05)

function elaveed(){
    if(loginStatus == true){
        let secim4 = document.querySelector(".elaveedinler");
        let newelement = document.createElement("p");
        newelement.classList.add("elaveedin");
        newelement.innerText = " > Git & Github";
        secim4.appendChild(newelement)
        let secdiyim4 = document.querySelector(".ustalerta4");
        secdiyim4.style.display="none"
        //window.location.href = "Git/index.html"

    }
    else{
        alert("Please login the site")
    }
}
yess4.addEventListener("click", elaveed)

//------------------------------------------------------------------------------

function elavee0e(e){
    e.preventDefault()
    let secdiyim5 = document.querySelector(".ustalerta5");
    secdiyim5.style.display="flex"
}
datastructure.addEventListener("click",elavee0e)

function elavee06(){
    let secdiyim5 = document.querySelector(".ustalerta5");
    secdiyim5.style.display="none"
}
noo5.addEventListener("click", elavee06)

function elaveee(){
    if(loginStatus == true){
        let secim5 = document.querySelector(".elaveedinler");
        let newelement = document.createElement("p");
        newelement.classList.add("elaveedin");
        newelement.innerText = " > Data Structure";
        secim5.appendChild(newelement)
        let secdiyim5 = document.querySelector(".ustalerta5");
        secdiyim5.style.display="none";
        //window.location.href = "Data_Structure/index.html"

    }
    else{
        alert("Please login the site")
    }
}
yess5.addEventListener("click", elaveee)

//------------------------------------------------------------------------------

function elavee0f(e){
    e.preventDefault()
    let secdiyim6 = document.querySelector(".ustalerta6");
    secdiyim6.style.display="flex"
}
python.addEventListener("click",elavee0f)

function elavee07(){
    let secdiyim6 = document.querySelector(".ustalerta6");
    secdiyim6.style.display="none"
}
noo6.addEventListener("click", elavee07)

function elaveef(){
    if(loginStatus==true){
        let secim6 = document.querySelector(".elaveedinler");
        let newelement = document.createElement("p");
        newelement.classList.add("elaveedin");
        newelement.innerText = " > Python Programming";
        secim6.appendChild(newelement)
        let secdiyim6 = document.querySelector(".ustalerta6");
        secdiyim6.style.display="none";
        //window.location.href = "Python/index.html"

    }
    else{
        alert("Please login the site")
    }
}
yess6.addEventListener("click", elaveef)

//------------------------------------------------------------------------------

function elavee0g(e){
    e.preventDefault()
    let secdiyim7 = document.querySelector(".ustalerta7");
    secdiyim7.style.display="flex"
}
sql.addEventListener("click",elavee0g)

function elavee08(){
    let secdiyim7 = document.querySelector(".ustalerta7");
    secdiyim7.style.display="none"
}
noo7.addEventListener("click", elavee08)

function elaveeg(){
    if(loginStatus == true){
        let secim7 = document.querySelector(".elaveedinler");
        let newelement = document.createElement("p");
        newelement.classList.add("elaveedin");
        newelement.innerText = " > SQL";
        secim7.appendChild(newelement)
        let secdiyim7 = document.querySelector(".ustalerta7");
        secdiyim7.style.display="none";
        //window.location.href = "SQL/index.html"
    }
    else{
        alert("Please login the site")
    }
}
yess7.addEventListener("click", elaveeg)

//------------------------------------------------------------------------------

function elavee0h(e){
    e.preventDefault()
    let secdiyim8 = document.querySelector(".ustalerta8");
    secdiyim8.style.display="flex"
}
manqodb.addEventListener("click",elavee0h)

function elavee09(){
    let secdiyim8 = document.querySelector(".ustalerta8");
    secdiyim8.style.display="none"
}
noo8.addEventListener("click", elavee09)

function elaveeh(){
    if(loginStatus == true){
        let secim8 = document.querySelector(".elaveedinler");
        let newelement = document.createElement("p");
        newelement.classList.add("elaveedin");
        newelement.innerText = " > Mango DB";
        secim8.appendChild(newelement);
        let secdiyim8 = document.querySelector(".ustalerta8");
        secdiyim8.style.display="none";
        //window.location.href = "ManqoDB/index.html"

    }
    else{
        alert("Please login the site")
    }
}
yess8.addEventListener("click", elaveeh);

//------------------------------------------------------------------------------

function elavee0x(e){
    e.preventDefault()
    let secdiyim9 = document.querySelector(".ustalerta9");
    secdiyim9.style.display="flex"
}
mlbasis.addEventListener("click",elavee0x)

function elavee010(){
    let secdiyim9 = document.querySelector(".ustalerta9");
    secdiyim9.style.display="none"
}
noo9.addEventListener("click", elavee010)

function elaveex(){
    if(loginStatus == true){
        let secim9 = document.querySelector(".elaveedinler");
        let newelement = document.createElement("p");
        newelement.classList.add("elaveedin");
        newelement.innerText = " > ML Basis";
        secim9.appendChild(newelement)
        let secdiyim9 = document.querySelector(".ustalerta9");
        secdiyim9.style.display="none"
        //window.location.href = "ML Basis/index.html"

    }
    else{
        alert("Please login the site")
    }
}
yess9.addEventListener("click", elaveex);


// let c100 = document.querySelector(".c100");

// function fn() {
//     c100.classList.add("ca__fx-skewOutRight")
//     // location.reload(true)
    
// }

// c100.classList.remove("ca__fx-skewOutRight")
 

// c100.addEventListener("click",fn)