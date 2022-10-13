import * as React from 'react';
import seleccionReducer from './seleccionReducer';

const seleccion_inicio = {
    menu : 'Inicio',
    eje: 'todos',
    vagon: 'todos',
    bogie: 'todos',
    cambiador: 'todos'
}

function useSeleccion() {
    const [seleccion, seleccionDispatch] = React.useReducer(seleccionReducer, seleccion_inicio)
    return  ([seleccion, seleccionDispatch])
}
  
export default useSeleccion;