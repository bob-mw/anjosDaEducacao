import React, {
    useState
} from 'react';
import context from './context';

function Provider({ children }) {

    const [ formType, setFormType ] = useState('');
    const [ register, setRegister ] = useState([]);
    const [ formValidation, setFormValidation ] = useState(false)
    const [ childrenRegister, setChildrenRegister ] = useState([]);
    const [ registerType, setRegisterType ] = useState('');
    const [ authLogin, setAuthLogin ] = useState({});
    const [ idChipIn, setIdChipIn ] = useState(0);
    const [ chipInPage, setChipInPage  ] = useState(false);

    const value = {
        formType,
        setFormType,
        register,
        setRegister,
        formValidation,
        setFormValidation,
        childrenRegister,
        setChildrenRegister,
        registerType,
        setRegisterType,
        authLogin,
        setAuthLogin,
        idChipIn,
        setIdChipIn,
        chipInPage,
        setChipInPage
    };

    return(
      <context.Provider value={ value }>
          { children }
      </context.Provider>
    );
}

export default Provider;
