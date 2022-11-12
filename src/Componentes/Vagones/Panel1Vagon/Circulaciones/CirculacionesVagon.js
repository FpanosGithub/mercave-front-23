import * as React from 'react';
import styled from 'styled-components';
import Fallback from '../../../Varios/Fallback';
import SeleccionarEvento from '../../../../Utilidades/SeleccionarEvento';
import RangoEventos from '../../../Varios/RangoEventos';
import ListaCirculacionesVagon from './ListaCirculacionesVagon';
import FichaCirculacionVagon from './FichaCirculacionVagon';

function CirculacionesVagon ({vagon, circulaciones, rango, rangoDispatcher, onMostrar, url}){

    const [seleccion_circulacion, setSeleccionCirculacion] = React.useState (0)

    // Sacamos el evento de circulacion seleccionado de la lista de circulaciones para pasarlo al componente <DetalleCirculacionEje>
    const circulacion = SeleccionarEvento (seleccion_circulacion, setSeleccionCirculacion, circulaciones.lista)

    // RENDER CIRCULACIONES DE 1 EJE!!!!!!
    return (
        <PanelLista>
            <RangoEventos
                rango = {rango}
                setRango = {rangoDispatcher}
                mostrar = 'Circulaciones'
                onMostrar = {onMostrar}
                origen = 'Vagones'
                minWidth = {165}/>
            {circulaciones.cargando ?
                (<><div></div><Fallback
                    elemento = {`Circulaciones del vagón ${vagon.codigo}`}
                    modo = 'CARGANDO'
                    imagen = 'arte/vagonesImagen.jpg'/></>)
                :
                (circulaciones.error ?
                    (<><div></div><Fallback
                        elemento = {`Circulaciones del vagón ${vagon.codigo}`}
                        modo = 'CARGANDO'
                        imagen = 'arte/vagonesImagen.jpg'/></>)
                    :
                    (<>
                    <ListaCirculacionesVagon
                        seleccion = {seleccion_circulacion}
                        onSeleccion = {setSeleccionCirculacion}
                        circulaciones={circulaciones.lista} />  
                    <FichaCirculacionVagon
                        circulacion = {circulacion}
                        vagon = {vagon}
                        url = {url} />
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
export default CirculacionesVagon;