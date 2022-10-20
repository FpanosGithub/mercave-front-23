function actoresReducer(state, action) {
    switch (action.type) {
        case 'CARGANDO':
          return {
                    ...state,
                    error: null,
                    cargando:true,
                  }
        case 'CARGAR_ACTORES':
          return {
                    ...state,
                    error: null,
                    cargando:null,
                    operadores:action.data.operadores, 
                    keepers:action.data.keepers, 
                    fabricantes:action.data.fabricantes, 
                    mantenedores:action.data.mantenedores, 
                    versiones_ejes:action.data.versiones_ejes, 
                    tipos_vagones:action.data.modelos_vagones,
                    versiones_cambiadores:action.data.versiones_cambiadores, 
                    cambiadores:action.data.cambiadores,
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
export default actoresReducer;
