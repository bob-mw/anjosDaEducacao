import axios from 'axios';

class ShowWishService {
    async execute(
      {
        token
      }
      ) {
        const data = await axios.get('http://localhost:3333/wish', {
          headers: {
            'Authorization': `token ${token}`
          }
        })

      const { wish } = data.data

      return wish; // returns all user wishes
    }
}

export default new ShowWishService();
