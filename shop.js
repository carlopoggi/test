function renderCartItem({ nome, counter, prezzo }) {
  return `
    <div class="row-cart">
      <div> ${nome} </div>
      <div> pz: ${counter} </div>
      <div> ${prezzo} Euro </div>
    </div>
  `
}

function renderProdItem({
    nome,
    addProduct,
    removeProduct,
    prezzo,
   }) {
  return `
    <div class="row-cart">
      <div> ${nome} </div>
      <button
        type="button"
        onclick="${addProduct(nome)}"
      >
        +
      </button> 
      <button
        type="button"
        onclick="${removeProduct(nome)}"
       >
        -
      </button>
      <div> ${prezzo} Euro </div>
    </div>
  `
}

function renderCart() {
  return `
    <div class="carrello">
    <h1>IL TUO CARRELLO  </h1>
    <div id="lista-prodotti"></div>
    <div id="total">
      TOTALE: 
    </div>
  </div>
  `
}

function render() {
  const el = document.getElementById("carrello")
  el.innerHTML = renderCart()
  var item = renderCartItem({
    nome: "tazza",
    counter: 1,
    prezzo: 10,
  });
  
  const ogg = document.getElementById("lista-prodotti");
  ogg.innerHTML = item;
 
}

render() 
