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
    const productList = await ProductList.create({
      owner,
      name,
      products
    })

    return productList
  }
}

export default CreateProductListService
