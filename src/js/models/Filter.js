export class Filter {

    //CATEGORIA
    static filterCategory(products, btn) {

        let category = btn.value

        const productsFilt = products.filter(
            (product) => product.categoria.toLowerCase() === category.toLowerCase()
          )
          return productsFilt
    }
  
    //NOME
    static filterSearchLabel(products, inputValue) {

        const inputSearch = inputValue.toLowerCase()

        const productsFilt = products.filter((product) => {
          if (
            product.nome.toLowerCase().includes(inputSearch) ||
            product.categoria.toLowerCase().includes(inputSearch)
          ) {
            return true
          }
        })
    
        return productsFilt
    }
}