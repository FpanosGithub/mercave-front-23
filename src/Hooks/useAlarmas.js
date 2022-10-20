import * as React from 'react';   
import alarmasReducer from './alarmasReducer'

const alarmas_inicial = {
    error: null,
    cargando: true,
    ejes:{activas:[],resueltas:[]}, 
    vagones:{activas:[],resueltas:[]}
};
function useAlarmas(url) {
    const [alarmas, alarmasDispatcher] = React.useReducer(alarmasReducer, alarmas_inicial);
    
    // Efecto para cargar las alarmas de ejes
    React.useEffect(() => {
        const getDataBD = async () => {
        try {
            const response_alarmas = await fetch(url.servidor_backend + url.alarmas);
            let actual_data_alarmas = await response_alarmas.json();
            alarmasDispatcher ({type:'CARGAR_ALARMAS', data:actual_data_alarmas});
            }
        catch(err) {alarmasDispatcher ({type:'ERROR', data: err.message})}  
        };
        getDataBD();
    }, [url.alarmas, url.servidor_backend]);

    return  alarmas
}
  
export default useAlarmas;