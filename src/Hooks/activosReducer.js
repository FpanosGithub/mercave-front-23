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
                    lista:action.data,
                  }
        case 'ERROR':
            return {
                    ...state,
                    cargando:null,
                    error:action.data,
                    lista:[],
                    }
        default: {
            throw new Error(`Unsupported action type: ${action.type}`)
            }
    }
} 
export default activosReducer;
