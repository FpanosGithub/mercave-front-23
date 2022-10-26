import * as React from 'react';
import styled from 'styled-components';
import useEventos from '../../../../Hooks/useEventos';
import Fallback from '../../../Varios/Fallback';
import DetalleCirculacion from './DetalleCirculacion'
import MapaCirculacion from './MapaCirculacion'
import GraficasCirculacion from './GraficasCirculacion'


function FichaCirculacion ({circulacion, eje, url}){

    // Iniciamos variables para eventos
    const [eventos, eventosDispatcher] = useEventos()
    const [hover_eventos, setHoverEventos] = React.useState(-1)
    
    // Lanzamos el side effect para cragar la info de los eventos de la circualacion seleccionada
    React.useEffect(() => {
        if (circulacion.id) {
            const requestParams = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({'id_operacion': circulacion.id})
            }
            const getDataCambios = async () => {
                eventosDispatcher({type:'CARGANDO'})
                try {
                    const response = await fetch(url.servidor_backend + url.eventos_circulacion_eje, requestParams);
                    if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                    let actual_data = await response.json();
                    eventosDispatcher({type:'CARGAR_EVENTOS', data: actual_data})
                    } 
                catch(err) {eventosDispatcher({type:'ERROR', data: err.message})} 
            }
            getDataCambios()
        }
    },[url.servidor_backend, url.cambios_operacion, circulacion.id, eventosDispatcher, url.eventos_circulacion_eje]);


    // RENDER EVENTOS DE 1 CIRCULACION!!!!!!
    return (     
    <PanelEventos>
        <DetalleCirculacion
            circulacion = {circulacion}/>
        {eventos.cargando
            ?
            (<>
            <MapaCirculacion
                eventos = {[]} 
                eje = {eje}
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
                <MapaCirculacion
                    eventos = {[]} 
                    eje = {eje}
                    hoverEventos = {hover_eventos}
                    onHoverEventos = {setHoverEventos}/>
                <Fallback
                    elemento = {`eventos de la circulacion ${circulacion.id}`}
                    modo = 'ERROR'
                    imagen = 'arte/ejesImagen.jpg'/>
                </>)
                :
                (<>
                <MapaCirculacion
                    eventos = {eventos.lista} 
                    eje = {eje}
                    hoverEventos = {hover_eventos}
                    onHoverEventos = {setHoverEventos}/>
                <GraficasCirculacion
                    eventos = {eventos.lista}
                    url = {url}/>
                </>))}
    </PanelEventos>
    )
}
const PanelEventos = styled.div`
    display:grid;
    padding:1px, 1px;
    gap:2px;
    grid-template-rows: 0fr 33rem 60rem;
    `
export default FichaCirculacion;