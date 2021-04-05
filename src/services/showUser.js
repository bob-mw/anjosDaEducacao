import axios from 'axios';

class ShowService {
    async execute(
      {
        token,
        registerType
      }
      ) {
        try {
          const data = await axios.get(`http://localhost:3333/${registerType}`, {
            headers: {
              'Authorization': `token ${token}`
            }
          })

          const { user } = data.data

          return { error: false, user };
        }
        catch (err) {
          const { error } = err.response.data;
          return { error, user: false };
        }
    }
}

export default new ShowService();
