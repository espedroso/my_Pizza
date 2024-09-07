//console.log(cardapio);
let card = "";
let section = document.getElementById("cardapio");
for(let pizza of cardapio){
    card += `
                <div class="card" >
                <p><strong>${pizza.nome}:</strong></p>
                <p>Ingredientes:${pizza.ingredientes}</p>
                </div> `
};

section.innerHTML = card;