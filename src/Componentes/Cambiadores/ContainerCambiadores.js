import * as React from 'react';
import styled from 'styled-components';
import Fallback from '../Varios/Fallback';
import BannerMercave from '../Varios/BannerMercave';
import FiltroCambiadores from './FiltroCambiadores';
import ListaOperaciones from './ListaOperaciones';
import RangoOperaciones from './RangoOperaciones';
import FichaOperacion from './FichaOperacion';
import useEventos from '../../Hooks/useEventos';
import useRango from '../../Hooks/useRango';
import SeleccionarEvento from '../../Utilidades/SeleccionarEvento';

//------------//
// COMPONENTE //
//------------//
function ContainerCambiadores ({filtro, filtroDispatcher, actores, url})
        {
        // Iniciamos variables para operaciones de cambio
        const [rango_operaciones, rangoOperacionesDispatcher] = useRango (60)
        const [seleccion_operacion, setSeleccionOperacion] = React.useState (-1)
        const [operaciones, operacionesDispatcher] = useEventos()
        
        // Efecto para cargar la lista de circulaciones cuando hay cambio en la selección!!!
        React.useEffect(() => {
                if(seleccion_operacion === -1){
                        const requestParams = {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({"rango": rango_operaciones})
                            }
                        const getDataOperaciones = async () => {
                                operacionesDispatcher({type:'CARGANDO'})
                                try     {
                                        const response = await fetch(url.servidor_backend + url.operaciones_de_cambio, requestParams);
                                        if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                                        let actual_data = await response.json();
                                        operacionesDispatcher({type:'CARGAR_EVENTOS', data: actual_data})
                                        } 
                                catch(err) {operacionesDispatcher({type:'ERROR', data: err.message})} 
                                }
                        getDataOperaciones()}     
                }, [operacionesDispatcher, rango_operaciones, seleccion_operacion, url.eventos_vagon, url.operaciones_de_cambio, url.servidor_backend]);


        const operacion = SeleccionarEvento (seleccion_operacion, setSeleccionOperacion, operaciones.lista)

        //Render
        return (
                <>
                {operaciones.cargando ?
                        (<PanelContenido>
                                <BannerMercave height = {160} imagen = 'arte/cambiadoresCabecera.jpg'/>
                                <FiltroCambiadores
                                        filtro = {filtro} 
                                        filtro_dispatcher = {filtroDispatcher}
                                        actores = {actores} />
                                <Fallback
                                        elemento = 'Cambiadores' 
                                        modo = 'CARGANDO'
                                        imagen = 'arte/cambiadoresImagen.jpg'/>     
                        </PanelContenido>)
                        :
                        (operaciones.error ?
                                (<PanelContenido>
                                <BannerMercave height = {160} imagen = 'arte/cambiadoresCabecera.jpg'/>
                                <FiltroCambiadores
                                        filtro = {filtro} 
                                        filtro_dispatcher = {filtroDispatcher}
                                        actores = {actores} />
                                <Fallback
                                        elemento = 'Cambiadores' 
                                        modo = 'ERROR'
                                        imagen = 'arte/cambiadoresImagen.jpg'/>     
                                </PanelContenido>)
                                :
                                (<PanelContenido>
                                        <BannerMercave height = {180} imagen = 'arte/cambiadoresCabecera.jpg'/>
                                        <FiltroCambiadores
                                                filtro = {filtro} 
                                                filtro_dispatcher = {filtroDispatcher}
                                                actores = {actores} />
                                        
                                        <PanelLista>
                                                <RangoOperaciones 
                                                        rango = {rango_operaciones}
                                                        setRango = {rangoOperacionesDispatcher}
                                                        minWidth = {165}/>
                                                <ListaOperaciones
                                                        onSeleccion = {setSeleccionOperacion}
                                                        operaciones = {operaciones.lista} />  
                                                <FichaOperacion
                                                        operacion = {operacion}
                                                        url = {url} />
                                                
                                        </PanelLista> 
                                </PanelContenido>)
                        )} 
                </>     
                )
        }
const PanelContenido = styled.div`
display:grid;
grid-template-rows: 0fr 5.5rem 1fr;
gap:2px;
`
const PanelLista = styled.div`
display:grid;
grid-template-columns: 0.2fr 1fr 1fr;
gap:2px;
width:100%;
`
export default ContainerCambiadores;