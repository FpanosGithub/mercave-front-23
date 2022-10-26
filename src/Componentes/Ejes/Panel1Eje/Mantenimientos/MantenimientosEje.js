import * as React from 'react';
import styled from 'styled-components';
import Fallback from '../../../Varios/Fallback';
//import SeleccionarEvento from '../../../../Utilidades/SeleccionarEvento';
import RangoEventos from '../../../Varios/RangoEventos';
import ListaMantenimientos from './ListaMantenimientos';
import FichaMantenimiento from './FichaMantenimiento';

function MantenimientosEje ({eje, mantenimientos, rango, rangoDispatcher, onMostrar, url}){

    const [seleccion_mantenimiento, setSeleccionMantenimiento] = React.useState (0)
    
    // Sacamos el cambio seleccionado de la lista de cambios para pasarlo al componente <DetalleCambioEje>
    const mantenimiento = {}
    //const mantenimiento = SeleccionarEvento (seleccion_mantenimiento, setSeleccionMantenimiento, mantenimientos.lista)

    // RENDER MANTENIMIENTOS DE 1 EJE!!!!!!
    return (     
        <PanelLista>
        <RangoEventos
            rango = {rango}
            setRango = {rangoDispatcher}
            mostrar = 'Mantenimientos'
            onMostrar = {onMostrar}
            minWidth = {165}/>
        {mantenimientos.cargando ?
            (<><div></div><Fallback
                elemento = {`Mantenimientos del eje ${eje.codigo}`}
                modo = 'CARGANDO'
                imagen = 'arte/ejesImagen.jpg'/></>)
            :
            (mantenimientos.error ?
                (<><div></div><Fallback
                    elemento = {`Mantenimientos del eje ${eje.codigo}`}
                    modo = 'CARGANDO'
                    imagen = 'arte/ejesImagen.jpg'/></>)
                :
                (<>
                <ListaMantenimientos 
                    error = {mantenimientos.error}
                    mantenimientos={[]}
                    seleccion = {seleccion_mantenimiento}
                    onSeleccion = {setSeleccionMantenimiento} />
                <FichaMantenimiento
                    onSeleccion = {setSeleccionMantenimiento}
                    mantenimientos = {[]}  
                    mantenimiento = {mantenimiento}/>
                </>))}
        </PanelLista>
        )
}

const PanelLista = styled.div`
display:grid;
grid-template-columns: 0fr 0fr 1fr;
gap:2px;
width:100%;
`
export default MantenimientosEje;