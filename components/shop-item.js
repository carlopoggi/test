function renderShopItem({
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
      onclick="addToCart(${id})"
    >
      Aggiungi al carrello
    </button> 
  </div>
`
}