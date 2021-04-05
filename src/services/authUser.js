import axios from 'axios';

class AuthService {
    async execute({ email, password, formType }) {
        try{
            const data = await axios.post(`http://localhost:3333/${ formType }/authentication`,{
                email,
                password
            });

            const { token } = data.data;
            
            return { error: false, token };
        }
        catch (err) {
            const { error } = err.response.data;
            return { error, token: false };
        }
    }
}

export default new AuthService();