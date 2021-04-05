import axios from 'axios';

class ShowService {
    async execute(
      {
        token,
        registerType
      }
      ) {
        const data = await axios.get(`http://localhost:3333/${registerType}`, {
          headers: {
            'Authorization': `token ${token}`
          }
        })

      const { user } = data.data

      return user;
    }
}



export default new ShowService();
