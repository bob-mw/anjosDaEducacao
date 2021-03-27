import React, {
    useState
} from 'react';
import context from './context';

function Provider({ children }) {

    const [ formType, setFormType ] = useState([]);
    const [ angelRegister, setAngelRegister ] = useState({});
    const [ angelFormValidation, setAngelFormValidation ] = useState(false)
    const [ responsabeRegister, setResponsabeRegister ] = useState({});
    const [ responsabeFormValidation, setResponsabeFormValidation ] = useState(false)

    const value = {
        formType,
        setFormType,
        angelRegister,
        setAngelRegister,
        angelFormValidation,
        setAngelFormValidation,
        responsabeRegister,
        setResponsabeRegister,
        responsabeFormValidation,
        setResponsabeFormValidation
    };
    return(
      <context.Provider value={ value }>
          { children }
      </context.Provider>
    );
}

export default Provider;
