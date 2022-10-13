import * as React from 'react';
import styled from 'styled-components';
import useEventos from '../../../../Hooks/useEventos';
import useRango from '../../../../Hooks/useRango';
import SeleccionarEvento from '../../../../Utilidades/SeleccionarEvento';
import RangoCirculaciones from './RangoCirculaciones';
import Fallback from '../../../Varios/Fallback';
import ListaCirculacionesEje from './ListaCirculacionesEje';
import MapaEje from '../../../Varios/MapaEje';
import DetalleCirculacion from '../../../Varios/DetalleCirculacion';
import AceleracionesEvento from '../../../Varios/AceleracionesEvento';

function CirculacionesEje ({eje, url}){

    // Iniciamos variables para eventos de circulación
    const [rango_circulaciones, rangoCirculacionesDispatcher] = useRango (60)
    const [seleccion_circulacion, setSeleccionCirculacion] = React.useState (0)
    const [circulaciones, circulacionesDispatcher] = useEventos()

    // Lanzamos el side effect para cragar la info de los eventos de circulación del eje seleccionado
    React.useEffect(() => {
        const requestParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"rango": rango_circulaciones, 'id_eje': eje.id})
        }
        const getDataCirculaciones = async () => {
            circulacionesDispatcher({type:'CARGANDO'})
            try {
                const response = await fetch(url.servidor_backend + url.eventos_eje, requestParams);
                if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                let actual_data = await response.json();
                circulacionesDispatcher({type:'CARGAR_EVENTOS', data: actual_data})
                } 
            catch(err) {circulacionesDispatcher({type:'ERROR', data: err.message})} 
        }
        getDataCirculaciones()
        console.log('FETCH FETCH CIRCULACIONES')
        },[eje.id, circulacionesDispatcher, rango_circulaciones, url.eventos_eje, url.servidor_backend]);

    // Sacamos el evento de circulacion seleccionado de la lista de circulaciones para pasarlo al componente <DetalleCirculacionEje>
    const circulacion = SeleccionarEvento (seleccion_circulacion, setSeleccionCirculacion, circulaciones.lista)

    // RENDER CIRCULACIONES DE 1 EJE!!!!!!
    return (
        <PanelEventos>
        {(circulaciones.cargando) 
            ?
            (<Fallback
                elemento = {`Circulaciones del eje ${eje.codigo}`}
                modo = 'CARGANDO'
                imagen = 'eje.png'/>)
            :
            (<>
            <RangoCirculaciones
                    codigo_eje = {eje.codigo}
                    rango={rango_circulaciones}
                    setRango = {rangoCirculacionesDispatcher}
                    circulaciones = {circulaciones.lista}
                    estado_eje = {eje.estado}
                    vel_eje = {eje.vel}
                    tempa = {eje.tempa}
                    tempb = {eje.tempb} />
            <PanelLista>
                <ListaCirculacionesEje 
                            error = {circulaciones.error}
                            circulaciones={circulaciones.lista}
                            seleccion = {seleccion_circulacion}
                            onSeleccion = {setSeleccionCirculacion}/>
                <PanelMapaEventos>
                    <MapaEje mapa = {circulaciones.mapa}/>
                    <PanelDetalle>
                        <DetalleCirculacion evento = {circulacion}/>
                        <AceleracionesEvento 
                            evento = {circulacion}
                            url = {url}/>
                    </PanelDetalle>
                </PanelMapaEventos>
            </PanelLista>
            </>)}  
            </PanelEventos>   
        )
}

const PanelEventos = styled.div`
    display:grid;
    padding:1px, 1px;
    gap:2px;
    grid-template-rows: 0fr 0fr;
  `
const PanelLista = styled.div`
    display:grid;
    gap:2px;
    margin-left: 1px;
    grid-template-columns: 0fr 1fr;
    `
const PanelMapaEventos = styled.div`
display:grid;
gap:1px;
grid-template-rows: 0fr 0fr;
`
const PanelDetalle = styled.div`
display:grid;
gap:1px;
grid-template-rows: 0fr 1fr;
`
export default CirculacionesEje;