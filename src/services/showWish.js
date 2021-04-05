import axios from 'axios';

class ShowWishService {
    async execute(
      {
        token
      }
      ) {
        try {
          const data = await axios.get('http://localhost:3333/wish', {
            headers: {
              'Authorization': `token ${token}`
            }
          })

          const { wish } = data.data

          return { error: false, wish }; // returns all user wishes
        }
        catch (err) {
          const { error } = err.response.data
          return { error, wish: false }
        }
    }
}

export default new ShowWishService();
