interface IObjectData {
  list?: string;
}

class ListValidation {
  async isValid (obj: IObjectData) {
    const { list } = obj

    if (
      list !== 'EI' &&
      list !== 'F1' &&
      list !== 'F2' &&
      list !== 'EM'
    ) {
      return false
    }

    return true
  }
}

export default new ListValidation()
