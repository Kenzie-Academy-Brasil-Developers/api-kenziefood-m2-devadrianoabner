export class Filter {

    //CATEGORIA
    static filterCategory(products, btn) {

        let category = btn.value

        const productsFilt = products.filter(
            (product) => product.categoria === category
          )
          return productsFilt
    }
  
    //NOME
    static filterSearchLabel(products, inputValue) {

        const inputSearch = inputValue

        const productsFilt = products.filter((product) => {
          if (
            product.nome.includes(inputSearch) ||
            product.categoria.includes(inputSearch)
          ) {
            return true
          }
        })
    
        return productsFilt
    }
}