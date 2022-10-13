import * as React from 'react';
import styled from 'styled-components';
import useEventos from '../../../../Hooks/useEventos';
import useRango from '../../../../Hooks/useRango';
import Fallback from '../../../Varios/Fallback';
import SeleccionarEvento from '../../../../Utilidades/SeleccionarEvento';
import RangoCambios from './RangoCambios';
import ListaCambiosEje from './ListaCambiosEje';
import DetalleCambioEje from '../../../Varios/DetalleCambio';
import MapaEje from '../../../Varios/MapaEje';



function CambiosEje ({eje, url}){

    // Iniciamos variables para cambios
    const [rango_cambios, rangoCambiosDispatcher] = useRango (60)
    const [seleccion_cambio, setSeleccionCambio] = React.useState (0)
    const [cambios, cambiosDispatcher] = useEventos()
    
    // Lanzamos el side effect para cragar la info de los cambios del eje seleccionado
    React.useEffect(() => {
        const requestParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"rango": rango_cambios, 'id_eje': eje.id})
        }
        const getDataCambios = async () => {
            cambiosDispatcher({type:'CARGANDO'})
            try {
                const response = await fetch(url.servidor_backend + url.cambios_eje, requestParams);
                if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                let actual_data = await response.json();
                cambiosDispatcher({type:'CARGAR_EVENTOS', data: actual_data})
                } 
            catch(err) {cambiosDispatcher({type:'ERROR', data: err.message})} 
    }
    getDataCambios()
    console.log('FETCH FETCH CAMBIOS')
    },[eje.id, cambiosDispatcher, rango_cambios, url.cambios_eje, url.servidor_backend]);
    
    // Sacamos el cambio seleccionado de la lista de cambios para pasarlo al componente <DetalleCambioEje>
    const cambio = SeleccionarEvento (seleccion_cambio, setSeleccionCambio, cambios.lista)

    // RENDER CAMBIOS DE 1 EJE!!!!!!
    return (     
        <PanelEventos>
        {(cambios.cargando) 
            ?
            (<Fallback
                elemento = {`Cambios del eje ${eje.codigo}`}
                modo = 'CARGANDO'
                imagen = 'eje.png'/>)
            :
            (<>
            <RangoCambios
                    codigo_eje = {eje.codigo}
                    rango={rango_cambios}
                    setRango = {rangoCambiosDispatcher}
                    cambios = {cambios.lista} />
                
            <PanelLista>
                <ListaCambiosEje 
                    error = {cambios.error}
                    cambios={cambios.lista}
                    seleccion = {seleccion_cambio}
                    onSeleccion = {setSeleccionCambio} />
                <PanelMapaEventos>
                    <MapaEje mapa = {cambios.mapa}/>
                    <DetalleCambioEje  
                        evento = {cambio}/>
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
    grid-template-rows: 0fr 1fr;
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
        align-items: center;
        background-color: black;
        grid-template-rows: 1fr 0fr;
    `
export default CambiosEje;