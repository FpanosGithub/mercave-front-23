import * as React from 'react';
import activosReducer from './activosReducer'

const activos_inicio = {
    error: null,
    cargando: true,
    lista:[],
    mapa:'',
}

function useActivosMercave() {
    const [activos, activosDispatch] = React.useReducer(activosReducer, activos_inicio)
    return  ([activos, activosDispatch])
}
  
export default useActivosMercave;