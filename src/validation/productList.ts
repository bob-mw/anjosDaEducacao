import lists from '@config/lists'

interface IProductData {
  name: string;
  price: number
  amount: number;
}

interface IProductListData {
  name: string;
  products: [IProductData]
}

class CreateProductListValidation {
  async isValid ({ name, products }: IProductListData) {
    if (
      name !== 'EI' &&
      name !== 'F1' &&
      name !== 'F2' &&
      name !== 'EM'
    ) {
      return false
    }

    if (products.length !== lists[name].length) {
      return false
    }

    for (let i = 0; i < lists[name].length; i++) {
      if (
        products[i].name !== lists[name][i].name ||
        products[i].amount > lists[name][i].amount ||
        !products[i].price
      ) {
        return false
      }
    }

    return true
  }
}

export default new CreateProductListValidation()
