import React, {
    useEffect,
    useState
} from 'react';
import context from './context';

function Provider({ children }) {

    const [ formType, setFormType ] = useState([]);

    const value = {
        formType,
        setFormType
    };
    return(
      <context.Provider value={ value }>
          { children }
      </context.Provider>
    );
}

export default Provider;
