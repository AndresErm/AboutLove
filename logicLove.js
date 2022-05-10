console.log("Hola");

let createTarjet = function(){
    // <div>
    //     <img src="" alt="">
    //   <div>
    //     <p></p>
    //   </div>
    // </div>

    // Creando divContentFather
    let createDivTarjets = document.createElement("div");
    createDivTarjets.classList = "card";
    
    // Creando img card
    let createImg = document.createElement("img");
    createImg.classList = "cardImg";
    
    // Creando divContentBody
    let createDivBodyTarjets = document.createElement("div");
    createDivBodyTarjets.classList = "cardBody";
    
    // Creando PInfoCards
    let createInfoCards = document.createElement("p");
    createInfoCards.classList = "cardInfo";




}


let createPoem = function(){

    // Creando div
    let createDiv = document.createElement("div");
    createDiv.classList = "contentPoemNew";
    // Creando contenido
    let newContentPoem = document.createTextNode("ERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSAERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSAERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSAERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSAERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSAERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSAERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSAERES MUY HERMOSA ERES MUY HERMOSA ERES MUY HERMOSA");
    // Añadiendo contenido al nuevo div
    createDiv.appendChild(newContentPoem);
    
    // Obteniendo div desde html
    let getDivDom = document.getElementById("contentPoem");
    // Renderizando elementos creados
    document.body.appendChild(createDiv, getDivDom);
    
    
    console.log("HOLA THIS IS LOVE");


} 


let generateAPoem = function(){
    
    let btnGeneratePoem = document.getElementById("btnGeneratePoem");
    btnGeneratePoem.addEventListener( "click", createPoem);

    return console.log("SE HA EJECUTADO 1 VES");    
    


}

generateAPoem();
