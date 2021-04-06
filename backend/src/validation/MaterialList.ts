import lists from '@config/lists'

interface IMaterialData {
  name: string;
  amount: number;
}

interface IMaterialListData {
  teaching: string;
  materials: [IMaterialData]
}

class CreateMaterialListValidation {
  async isValid ({ teaching, materials }: IMaterialListData) {
    if (
      teaching !== 'EI' &&
      teaching !== 'F1' &&
      teaching !== 'F2' &&
      teaching !== 'EM'
    ) {
      return false
    }

    if (materials.length !== lists[teaching].length) {
      return false
    }

    for (let i = 0; i < lists[teaching].length; i++) {
      if (
        materials[i].name !== lists[teaching][i].name ||
        materials[i].amount > lists[teaching][i].amount
      ) {
        return false
      }
    }

    return true
  }
}

export default new CreateMaterialListValidation()
