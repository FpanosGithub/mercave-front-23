function alarmasReducer(state, action) {
    switch (action.type) {
        case 'CARGANDO':
          return {
                    ...state,
                    error: null,
                    cargando:true,
                  }
        case 'CARGAR_ALARMAS':
          return {
                    ...state,
                    error: null,
                    cargando:null,
                    ejes: {
                      activas: action.data.ejes.activas, 
                      resueltas: action.data.ejes.resueltas,
                    },
                    vagones: {
                      activas: action.data.vagones.activas,
                      resueltas: action.data.vagones.resueltas,
                    }
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
export default alarmasReducer;
