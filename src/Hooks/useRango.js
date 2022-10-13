import * as React from 'react';
import rangoReducer from './rangoReducer';

const calcularRangoInicial = (dias_iniciales) => {
    let fecha_origen = new Date ('2022-01-01')
    let fecha_final = new Date()
    let fecha_inicial = new Date() 
    fecha_inicial.setDate(fecha_final.getDate() - parseInt(dias_iniciales))
    const rango = {
        'inicio':fecha_inicial.toISOString(),
        'fin': fecha_final.toISOString(),
        'num_max': 30,
        'origen' : fecha_origen.toISOString(),
        'hoy' : fecha_final.toISOString(),
        }
    return rango
}

function useRango(dias_iniciales) {
    const [rango, rangoDispatch] = React.useReducer(rangoReducer, dias_iniciales, calcularRangoInicial)
    return  ([rango, rangoDispatch])
}
  
export default useRango;