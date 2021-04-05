import axios from 'axios';

class ShowMuralService {
  async execute() {
    const data = await axios.get('http://localhost:3333/mural');

    const { mural } = data.data;

    return { mural };
  }
}

export default new ShowMuralService();
