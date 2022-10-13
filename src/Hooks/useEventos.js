import * as React from 'react';
import eventosReducer from './eventosReducer'

const eventos_inicio = {
    error: null,
    cargando: false,
    lista:[],
    mapa:'',
}

function useEventos() {
    const [eventos, eventosDispatcher] = React.useReducer(eventosReducer, eventos_inicio)
    return  ([eventos, eventosDispatcher])
}
  
export default useEventos;
