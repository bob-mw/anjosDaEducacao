import axios from 'axios';

class AuthService {
    async execute({ email, password, formType }) {
        const data = await axios.post(`http://localhost:3333/${ formType }/authentication`,{
            email,
            password
        })

        const { token } = data.data
        
        return token;
    }
}

export default new AuthService();