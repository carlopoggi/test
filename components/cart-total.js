function calcolaTotale() {
  let conto = 0
  var keys = Object.keys(store.carrello)
  keys.map((id) => {
    const {prezzo} = getProduct(id)
    const amount = getCartQty(id)
    conto += prezzo * amount 
} ) 

  return conto
}


function renderTotale() {
  var tot = calcolaTotale()
  var el = document.getElementById('totale')
  el.innerHTML = `Totale ${tot}`
}

