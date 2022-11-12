import * as React from 'react';
import styled from 'styled-components';
import useEventos from '../../../../Hooks/useEventos';
import Fallback from '../../../Varios/Fallback';
import DetalleCirculacionVagon from './DetalleCirculacionVagon'
import MapaCirculacionVagon from './MapaCirculacionVagon'


function FichaCirculacionVagon ({circulacion, vagon, url}){

    // Iniciamos variables para eventos
    const [eventos, eventosDispatcher] = useEventos()
    const [hover_eventos, setHoverEventos] = React.useState(-1)
    
    // Lanzamos el side effect para cragar la info de los eventos de la circualacion seleccionada
    React.useEffect(() => {
        if (circulacion.id) {
            const requestParams = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({'id_circulacion': circulacion.id})
            }
            const getDataCambios = async () => {
                eventosDispatcher({type:'CARGANDO'})
                try {
                    const response = await fetch(url.servidor_backend + url.eventos_circulacion_vagon, requestParams);
                    if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                    let actual_data = await response.json();
                    eventosDispatcher({type:'CARGAR_EVENTOS', data: actual_data})
                    } 
                catch(err) {eventosDispatcher({type:'ERROR', data: err.message})} 
            }
            getDataCambios()
        }
    },[url.servidor_backend, circulacion.id, eventosDispatcher, url.eventos_circulacion_vagon]);


    // RENDER EVENTOS DE 1 CIRCULACION!!!!!!
    return (     
    <PanelEventos>
        <DetalleCirculacionVagon
            circulacion = {circulacion}/>
        {eventos.cargando
            ?
            (<>
            <MapaCirculacionVagon
                eventos = {[]} 
                vagon = {vagon}
                hoverEventos = {hover_eventos}
                onHoverEventos = {setHoverEventos}/>
            <Fallback
                elemento = {`eventos de la circulacion ${circulacion.id}`}
                modo = 'CARGANDO'
                imagen = 'arte/ejesImagen.jpg'/>
            </>)
            :
            (eventos.error ?
                (<>
                <MapaCirculacionVagon
                    eventos = {[]} 
                    vagon = {vagon}
                    hoverEventos = {hover_eventos}
                    onHoverEventos = {setHoverEventos}/>
                <Fallback
                    elemento = {`eventos de la circulacion ${circulacion.id}`}
                    modo = 'ERROR'
                    imagen = 'arte/ejesImagen.jpg'/>
                </>)
                :
                (<>
                <MapaCirculacionVagon
                    eventos = {eventos.lista} 
                    vagon = {vagon}
                    hoverEventos = {hover_eventos}
                    onHoverEventos = {setHoverEventos}/>
                </>))}
    </PanelEventos>
    )
}
const PanelEventos = styled.div`
    display:grid;
    padding:1px, 1px;
    gap:2px;
    grid-template-rows: 0fr 54.8rem;
    `
export default FichaCirculacionVagon;