function SeleccionarEvento(seleccion_evento, setSeleccionEvento, eventos) {
//Función que busca el evento seleccionado en la lista de eventos y devuelve el evento
    // Si hay eventos miramos selección
    if (eventos !== null){
        if(eventos.length >0 ) {
            // Si no hay selección seleccionamos el primer evento y lo devolvemos
            if (seleccion_evento === 0) {
                setSeleccionEvento(eventos[0].id)
                return eventos[0]
            }
            // Si hay evento seleccionado lo buscamos y lo devolvemos
            let indice = 0
            eventos.forEach(comprobar)
            function comprobar(value, index, array) 
                {
                    if (value.id === seleccion_evento) {indice = index}
                }
            return eventos[indice]
            }
        }
    // Si no hay ningun evento creamos un evento sintético  
    return [{dt: new Date(), id: 1}]      
    }
  
export default SeleccionarEvento;