import React, {
    useEffect,
    useState
} from 'react';
import context from './context';

function Provider({ children }) {

    const [ products, setProducts ] = useState([]);
    
    const requestApi = async() => {
        try {
           const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=escolar');
           const json = await response.json();
           const results = json.results;
           const arrayProducts = [];


           results.map((item) => {
               arrayProducts.push({
                id: item.id,
                name: item.title,
                price: item.price,
                thumbnail: item.thumbnail,
                link: item.permalink
               });
            });

            setProducts(arrayProducts);

        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
        requestApi();
    },[])

    const value = {
        products,
        setProducts
    };
    return(
      <context.Provider value={ value }>
          { children }
      </context.Provider>
    );
}

export default Provider;
