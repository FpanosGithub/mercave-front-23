function activosReducer(state, action) {
    switch (action.type) {
        case 'CARGANDO':
          return {
                    ...state,
                    error: null,
                    cargando:true,
                  }
        case 'CARGAR_ACTIVOS':
          return {
                    ...state,
                    error: null,
                    cargando:null,
                    lista:action.data.lista,
                    mapa:action.data.mapa,
                  }
        case 'ERROR':
            return {
                    ...state,
                    cargando:null,
                    error:action.data,
                    lista:[],
                    mapa:'<></>'
                    }
        default: {
            throw new Error(`Unsupported action type: ${action.type}`)
            }
    }
} 
export default activosReducer;
