import axios from 'axios';

class AuthService {
    async execute({ email, password, formType }) {
        const token = await axios.post(`http://localhost:3333/${ formType }/authentication`,{
            email,
            password
        })
        return token;
    }
}

export default new AuthService();