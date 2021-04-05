import axios from 'axios';

class CreateService {
    async execute(
      { 
        name,
        email,
        password,
        confirmPassword,
        phone,
        registerType
      }
      ) {
      
        try{
          const data = await axios.post(`http://localhost:3333/${ registerType }`, {
            name,
            email,
            password,
            confirmPassword,
            phone
          });
    
          const { user } = data.data
    
          return { error: false, user };
        }
        catch (err) {
          const { error } = err.response.data;
          return { error, user: false };
        }
    }
}

export default new CreateService();
