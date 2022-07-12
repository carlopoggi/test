
function renderProdItem({
  nome,
  id,
  prezzo,
 }) {
return `
  <div class="row-cart">
    <div>
      ${nome}
    </div>
    <div>
      ${prezzo} Euro
    </div>
    <button
      type="button"
      onclick="incrementQty(${id})"
    >
      Aggiungi al carrello
    </button> 
  </div>
`
}