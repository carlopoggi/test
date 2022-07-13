const store = {
  prodotti: {
    1: {
      nome: 'tazza',
      prezzo: 10,
    },
    2: {
      nome: 'Pomello', 
      prezzo: 8,
    },
    3: {
      nome: 'sedia',
      prezzo: 15,
    },
    4: {
      nome: 'finestra',
      prezzo: 500,
    },
    5: {
      nome: 'tavolo',
      prezzo: 150,
    }
  },
  carrello: {
    // id: quantita
    // 1: 1
  }
 }

 // get product
function getProduct(id) {
  return store.prodotti[id] || {}
}

 // get cart quantity
function getCartQty(id) {
  return store.carrello[id] || 0
}
 // increment cart quantity
function incrementCartQty(id) {
  var currentQty = getCartQty(id)
  store.carrello[id] = currentQty + 1
}
 // decrement cart quantity
 function decrementCartQty(id) {
  var currentQty = getCartQty(id)
  if (currentQty <= 1) {
    return delete store.carrello[id]
  }
  store.carrello[id] = currentQty - 1
 }
 