function renderCartItem({
  nome,
  id,
  qty,
  prezzo,
}) {
  return `
    <div class="row-cart">
      <div> ${nome} </div>
      <div> pz: ${qty} </div>
      <div> ${prezzo} Euro </div>
      <button
        onclick='incrementCartItemQty(${id})'
      >
      +
      </button>
      <button
        onclick='decrementCartItemQty(${id})'
      >
       -
      </button>
    </div>
  `
}