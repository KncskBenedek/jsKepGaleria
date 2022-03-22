window.addEventListener("load", init);
//window.addEventListener("click", galeria);


function ID(elem) {
    return document.getElementById(elem);
}

var kepeim = [{
    eleres: "kepek/kep01.jpg",
    cim: "Állatok",
    leiras: "Kecskék",},
    {
    eleres: "kepek/kep02.jpg",
    cim: "Japán fa",
    leiras: "Szép sétány"
    },
    {
    eleres: "kepek/kep03.jpg",
    cim: "Sárga virágok",
    leiras: "Szép mezőföld"
    },
    {
    eleres: "kepek/kep04.jpg",
    cim: "Tájkép",
    leiras: "Fent a magasban!"
    },
    {
    eleres: "kepek/kep05.jpg",
    cim: "Az út mellet",
    leiras: "Szép fehér virágok az út mellet"
    }]

var kepindex = 0;
function galeria(){
    var txt = "";
    var hossz = kepeim.length;
    for (let index = 0; index < hossz; index++) {
        txt += `<div calss="kep"><img id="${index}" src="${ kepeim[index].eleres}" alt="">
        </div>`;
    }
    ID("inp").innerHTML=txt;

    for (let index = 0; index < hossz; index++) {
       ID(index).addEventListener("click", kepkivalasztas);
       document.getElementsByClassName("kep")[index].style.border = "5px solid red";
       document.getElementsByClassName("kep")[index].classname += " kepekformazasa";
        }
    
       
}
function init() {
    megjelenit()
    galeria();
    ID("balra").addEventListener("click", balra);
    ID("jobbra").addEventListener("click", jobbra);
}

function kepkivalasztas(){
    //console.log(event.target.src);
    kepindex =Number(event.target.id);
}


function megjelenit() {
    ID("kivalasztott").src = kepeim[kepindex].eleres;
    ID("kivalasztott").alt = kepeim[kepindex].cim;

}
function balra() {
    if(kepindex <= 0){
        kepindex = kepeim.length-1;
    }
    else{
        kepindex -= 1;
    }
    console.log(kepindex);
    megjelenit(kepindex);
}
function jobbra() {
    if(kepindex >= kepeim.length-1){
        kepindex = 0;
    }
    else{
        kepindex += 1;
    }
    console.log(kepindex);
    megjelenit(kepindex)
}
/*
function elsokepClick(){
    let text = document.getElementById("elsokep").innerHTML;
    document.getElementById("valtoz").innerHTML = text;
    console.log(text)
}
function harkepClick(){
    let text = document.getElementById("harmadikkep").innerHTML;
    document.getElementById("valtoz").innerHTML = text;
    console.log(text)
}*/