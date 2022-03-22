export class Filter {

    //CATEGORIA
    static filterCategory(products, btn) {

        let category = btn.value

        const productsFilt = products.filter(
            (product) => product.category === category
          )
          return productsFilt
    }
  
    //NOME
    static filterSearchLabel(products, inputValue) {
        const inputSearch = inputValue
        console.log(inputSearch)

        // const productsFilt = products.filter((product) => {
        //   if (
        //     product.name.includes(inputSearch) ||
        //     product.section.includes(inputSearch) ||
        //     product.category.includes(inputSearch)
        //   ) {
        //     return true
        //   }
        // })
    
        // return productsFilt
    }
}