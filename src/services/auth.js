import axios from 'axios';

class AuthService {
    async execute({ email, password, formType }) {
        console.log(email, password)
        const token = await axios.post(`http://localhost:3333/${ formType }/authentication`,{
            email,
            password
        })
        console.log(token)
        return token;
    }
}

export default new AuthService();