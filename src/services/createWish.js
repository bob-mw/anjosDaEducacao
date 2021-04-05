import axios from 'axios';

class CreateWishService {
    async execute(
      {
        name,
        schoolName,
        state,
        city,
        teaching,
        materials,
        token
      }
      ) {
      
        try{
          const data = await axios.post('http://localhost:3333/wish', {
            data: {
              name,
              schoolName,
              state,
              city,
              teaching,
              materials
            },
            headers: {
              'Authorization': `token ${token}`
            }
          });

          const { wish } = data.data

          return wish;
        }
        catch (err) {
          const { error } = err.response.data
          return { error, wish: false }
        }
    }
}

export default new CreateWishService();
