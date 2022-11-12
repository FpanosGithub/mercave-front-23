import * as React from 'react';   
import mantenimientosReducer from './mantenimientosReducer'

const mantenimientos_inicial = {
    error: null,
    cargando: true,
    pm:{}, 
    niveles :[],
    proximos:[],
    lista:[], 
};
function useMantenimientos(url) {
    const [mantenimientos, mantenimientosDispatcher] = React.useReducer(mantenimientosReducer, mantenimientos_inicial);
    return  ([mantenimientos, mantenimientosDispatcher])
}
  
export default useMantenimientos;