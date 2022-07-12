function renderList() {
  const { prodotti } = store
  const keys = Object.keys(prodotti)
  const el = document.getElementById('lista-prodotti')
  el.innerHTML = ''

  const shopList = keys.map((id) => {
    const { nome, prezzo } = prodotti[id]
    renderProdItem(nome, id, prezzo)
  })

  el.innerHTML = shopList.join('')
}
