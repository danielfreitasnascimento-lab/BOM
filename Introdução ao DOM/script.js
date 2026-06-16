// O JavaScript é uma Linguagem WEB

// Variáveis - Valores armazenados na memória do compudador

// Funçães -Blocos de códico

function carregar(){
    //alert("Bem vindo ao JavaScript")
    var msg = Window.document.getElementById ("msg")
var msg = Window.document.getElementById ("imagen")

var data = new Date()
var hora = data.getHours() 
var minutos = data.getMinutes()

    msg.innerHTML = "Agoa são ${hora}:${minutos}Am"

if(hora>= 0 && hora <21){
    ing.scr = "manha.png"
    Document.body.style.background ="#ffd000"
}
else if(hora >= 12 && hora < 18){
    ing.scr = "tarde.png"
    Document.body.style.background ="#ff6d00"
}
else{
ing.scr = "noite.png"
    Document.body.style.background ="#212529"
    }
}
   

