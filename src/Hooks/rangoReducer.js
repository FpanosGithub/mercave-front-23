
function rangoReducer(state, action) {

  switch (action.type) {
    case 'ACTUALIZAR_RANGO':
      const inicio = new Date(action.payload.inicio)
      const fin = new Date(action.payload.fin)
      let num_max = 20
      //Si num_max no es un entero válido, le damos valor de 30
      try {num_max = parseInt (action.payload.num_max)}
      catch {num_max = 30}
      // Si las fechas son válidas devolvemos las fechas + num_max
      if ((fin !== "Invalid Date") && (inicio !== "Invalid Date")) {
        return {
                ...state,
                'inicio':inicio.toISOString(),
                'fin':fin.toISOString(),
                'num_max':num_max,
                }
        }
        return {
                ...state,
                'num_max':num_max,
              }
    default:
      throw new Error(`No es conocida la acción: ${action.type}`);
    }
  }

  export default rangoReducer;