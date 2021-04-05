import axios from 'axios';

class ShowAvailableWishesService {
  async execute() {
    const data = await axios.get('http://localhost:3333/donation');

    const { data: donations } = data;

    return { donations };
  }
}

export default new ShowAvailableWishesService();
