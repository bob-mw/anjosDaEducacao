import axios from 'axios';

class CreateService {
    async execute({ name,
        email,
        password,
        confirmPassword,
        phone,
        registerType }) {
      const data = await axios.post(`http://localhost:3333/${ registerType }`, {
        name,
        email,
        password,
        confirmPassword,
        phone
      });

      const { user } = data.data

      return user;
    }
}

export default new CreateService();
