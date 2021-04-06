import ProductList from '@schemas/productList'

interface IProductData {
  name: string;
  price: string;
  amount: string;
}

interface IProductListData {
  owner: string;
  name: string;
  products: [IProductData]
}

class CreateProductListService {
  async execute ({ owner, name, products }: IProductListData) {
    console.log(owner, name, products)
    const productList = await ProductList.create({
      owner,
      name,
      products
    })

    console.log('Service end')

    return productList
  }
}

export default CreateProductListService
