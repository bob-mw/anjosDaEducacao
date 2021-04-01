import lists from '@config/lists'

interface IMaterialData {
  name: string;
  amount: number;
}

interface IMaterialListData {
  listName: string;
  materials: [IMaterialData]
}

class CreateMaterialListValidation {
  async isValid ({ listName, materials }: IMaterialListData) {
    if (
      listName !== 'EI' &&
      listName !== 'F1' &&
      listName !== 'F2' &&
      listName !== 'EM'
    ) {
      return false
    }

    if (materials.length !== lists[listName].length) {
      return false
    }

    for (let i = 0; i < lists[listName].length; i++) {
      if (
        materials[i].name !== lists[listName][i].name ||
        materials[i].amount > lists[listName][i].amount
      ) {
        return false
      }
    }

    return true
  }
}

export default new CreateMaterialListValidation()
