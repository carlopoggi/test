function renderCart() {
  const { carrello, prodotti } = store
  const keys = Object.keys(carrello)
  const el = document.getElementById('lista-carrello')
  el.innerHTML = ''

  const cartList = keys.map((id) => {
    const qty = carrello[id]
    const { nome, prezzo } = prodotti[id]
    return renderCartItem({ nome, id, qty, prezzo })
  })
  el.innerHTML = cartList.join('')
}

function incrementCartItemQty(id) {
  incrementCartQty(id)
  renderCart()
}

function decrementCartItemQty(id) {
  decrementCartQty(id)
  renderCart()
}