import axios from 'axios';

class UpdateWishService {
    async execute(
      {
        name,
        schoolName,
        state,
        city,
        teaching,
        materials,
        id,
        token
      }
      ) {
      const data = await axios.put('http://localhost:3333/wish', {
        data: {
          name,
          schoolName,
          state,
          city,
          teaching,
          materials,
          id
        },
        headers: {
          'Authorization': `token ${token}`
        }
      });

      const { wish } = data.data

      return wish;
    }
}

export default new UpdateWishService();
