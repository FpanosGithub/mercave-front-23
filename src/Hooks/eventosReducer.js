function eventosReducer(state, action) {
    switch (action.type) {
        case 'CARGANDO':
          return {
                    ...state,
                    error: false,
                    cargando:true,
                  }
        case 'CARGAR_EVENTOS':
          return {
                    ...state,
                    error: false,
                    cargando:false,
                    lista:action.data
                  }
        case 'ERROR':
            return {
                    ...state,
                    cargando:false,
                    error:action.data,
                    lista:[],
                    }
        default: {
            throw new Error(`EventosReducer. Accion no conocida: ${action.type}`)
            }
    }
} 
export default eventosReducer;
