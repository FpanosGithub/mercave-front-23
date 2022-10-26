import * as React from 'react';
import styled from 'styled-components';
import Fallback from '../../../Varios/Fallback';
import SeleccionarEvento from '../../../../Utilidades/SeleccionarEvento';
import RangoEventos from '../../../Varios/RangoEventos';
import ListaCambios from './ListaCambios';
import FichaCambio from './FichaCambio';

function CambiosEje ({eje, cambios, rango, rangoDispatcher, onMostrar, url}){

    const [seleccion_cambio, setSeleccionCambio] = React.useState (0)
    
    // Sacamos el cambio seleccionado de la lista de cambios para pasarlo al componente <DetalleCambioEje>
    const cambio = SeleccionarEvento (seleccion_cambio, setSeleccionCambio, cambios.lista)

    // RENDER CAMBIOS DE 1 EJE!!!!!!
    return (     
        <PanelLista>
        <RangoEventos
            rango = {rango}
            setRango = {rangoDispatcher}
            mostrar = 'Cambios'
            onMostrar = {onMostrar}
            minWidth = {165}/>
        {cambios.cargando ?
            (<><div></div><Fallback
                elemento = {`Cambios del eje ${eje.codigo}`}
                modo = 'CARGANDO'
                imagen = 'arte/imagenEje.jpg'/></>)
            :
            (cambios.error ?
                (<><div></div><Fallback
                    elemento = {`Cambios del eje ${eje.codigo}`}
                    modo = 'CARGANDO'
                    imagen = 'arte/imagenEje.jpg'/></>)
                :
                (<>
                <ListaCambios 
                    error = {cambios.error}
                    cambios={cambios.lista}
                    seleccion = {seleccion_cambio}
                    onSeleccion = {setSeleccionCambio} />
                <FichaCambio
                    onSeleccion = {setSeleccionCambio}
                    cambios = {cambios.lista}  
                    cambio = {cambio}/>
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
export default CambiosEje;