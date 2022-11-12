function mantenimientosReducer(state, action) {
    switch (action.type) {
        case 'CARGANDO':
          return {
                    ...state,
                    error: null,
                    cargando:true,
                    pm: {},
                    niveles:[],
                    proximos:[],
                    lista:[]
                  }
        case 'CARGAR_MANTENIMIENTOS':
          return {
                    ...state,
                    error: null,
                    cargando:null,
                    pm:action.data.pm, 
                    niveles:action.data.niveles, 
                    proximos:action.data.proximos, 
                    lista:action.data.lista, 
                  }
        case 'ERROR':
            return {
                    ...state,
                    cargando:null,
                    error:action.data,
                    }
        default: {
            throw new Error(`Unsupported action type: ${action.type}`)
            }
    }
} 
export default mantenimientosReducer;
