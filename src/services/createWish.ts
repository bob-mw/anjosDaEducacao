import Wish from '@schemas/wish'

interface IMaterialData {
  name: string;
  amount: number;
}

interface IWishData {
  name: string;
  schoolName: string;
  state: string;
  teaching: string;
  listName: string;
  materials: [IMaterialData]
}

class CreateWishService {
  async execute ({ name, schoolName, state, teaching, listName, materials }: IWishData) {
    const wish = await Wish.create({
      name,
      schoolName,
      state,
      teaching,
      listName,
      materials
    })

    return wish
  }
}

export default CreateWishService
