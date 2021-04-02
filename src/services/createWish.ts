import Wish from '@schemas/wish'

interface IMaterialData {
  name: string;
  amount: number;
}

interface IWishData {
  owner: string;
  name: string;
  schoolName: string;
  city: string;
  state: string;
  teaching: string;
  materials: [IMaterialData]
}

class CreateWishService {
  async execute ({ owner, name, schoolName, state, city, teaching, materials }: IWishData) {
    const wish = await Wish.create({
      owner,
      name,
      schoolName,
      city,
      state,
      teaching,
      materials
    })

    return wish
  }
}

export default CreateWishService
