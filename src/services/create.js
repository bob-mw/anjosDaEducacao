import axios from 'axios';

class CreateService {
    async execute({ name,
        email,
        password,
        confirmPassword,
        phone,
        cpf, 
        registerType }) {
      const user = await axios.post(`http://localhost:3333/${ registerType }`, {
        name,
        email,
        password,
        confirmPassword,
        phone,
        cpf,
      });

      return user;
    }
}



export default new CreateService();
