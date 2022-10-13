import * as React from 'react';   
import actoresReducer from './actoresReducer'

const actores_inicial = {
    error: null,
    cargando: true,
    operadores:[], 
    keepers:[], 
    fabricantes:[], 
    mantenedores:[], 
    versiones_ejes:[], 
    tipos_vagones:[]
};
function useActores(url) {
    const [actores, actoresDispatcher] = React.useReducer(actoresReducer, actores_inicial);
    React.useEffect(() => {
        const getDataBD = async () => {
            try {
                const response_actores = await fetch(url.servidor_backend + url.actores);
                let actual_data_actores = await response_actores.json();
                actoresDispatcher ({type:'CARGAR_ACTORES', data:actual_data_actores});
                }
            catch(err) {actoresDispatcher ({type:'ERROR', data: err.message})}  
            };
            getDataBD();
        }, [url.servidor_backend, url.actores]);

    return  actores
}
  
export default useActores;