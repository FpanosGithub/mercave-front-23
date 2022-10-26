import * as React from 'react';
import styled from 'styled-components';
import useEventos from '../../Hooks/useEventos';
import Fallback from '../Varios/Fallback';
import DetalleOperacion from './DetalleOperacion'
import GraficasOperacion from './GraficasOperacion'
import ListaCambios from './ListaCambios'




function FichaOperacion ({operacion, url}){

    // Iniciamos variables para cambios
    const [cambios, cambiosDispatcher] = useEventos()
    
    // Lanzamos el side effect para cragar la info de los cambios de la operación seleccionada
    React.useEffect(() => {
        if (operacion.id) {
            const requestParams = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({'id_operacion': operacion.id})
            }
            const getDataCambios = async () => {
                cambiosDispatcher({type:'CARGANDO'})
                try {
                    const response = await fetch(url.servidor_backend + url.cambios_operacion, requestParams);
                    if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                    let actual_data = await response.json();
                    cambiosDispatcher({type:'CARGAR_EVENTOS', data: actual_data})
                    } 
                catch(err) {cambiosDispatcher({type:'ERROR', data: err.message})} 
            }
            getDataCambios()
        }
    },[cambiosDispatcher, url.servidor_backend, operacion, url.cambios_operacion]);


    // RENDER CAMBIOS DE 1 EJE!!!!!!
    return (     
        <PanelEventos>
        {(cambios.cargando) 
            ?
            (<>
            <DetalleOperacion
                operacion = {operacion}/>
            <Fallback
                elemento = {`Cambios de la operacion ${operacion.id}`}
                modo = 'CARGANDO'
                imagen = 'arte/cambiadoresImagen.jpg'/>
            </>)
            :
            (<>
            <DetalleOperacion
                operacion = {operacion}/>
            <GraficasOperacion
                cambios = {cambios.lista}/>
            <ListaCambios
                cambios = {cambios.lista}/>
            
            </>
            )}
        </PanelEventos>
        )
}
const PanelEventos = styled.div`
    display:grid;
    padding:1px, 1px;
    gap:2px;
    grid-template-rows: 0fr 0fr;
    `
export default FichaOperacion;