import * as React from 'react';
import styled from 'styled-components';
import Fallback from '../Varios/Fallback';
import BannerMercave from '../Varios/BannerMercave';
import FiltroVagones from './FiltroVagones';
import ListaVagones from './ListaVagones';
import MapaVagones from './MapaVagones';
import FichaVagon from './FichaVagon';
import useEventos from '../../Hooks/useEventos';
import useRango from '../../Hooks/useRango';

//Función que busca el vagón seleccionado en la lista de vagones y devuelve un objeto vagón
const seleccionarVagon = (seleccion, vagones)=> {
        if(vagones.length > 0){
                let indice = 0
                try {
                        function comprobar(value, index) 
                                {
                                if (value.id === seleccion) {indice = index}
                                }
                        vagones.forEach(comprobar)
                        return(vagones[indice])}
                catch {
                        return {id:-1, codigo:'Ninguno', imagen:'vagones.jpg', ejes:[]}
        }
        }
        return {id:-1, codigo:'NaN', imagen:'vagones.jpg', ejes:[]}
}

//------------//
// COMPONENTE //
//------------//
function ContainerVagones ({vagones, filtro, filtroDispatcher, actores, seleccionDispatcher, url})
        {
        // Estados para gestionar la navegación en el mapa y leyenda del mapa
        const [ver_todos, setVerTodos] = React.useState (true)
        const [seleccion_vagon, setSeleccionVagon] = React.useState (-1)
        const [hover_vagones, setHoverVagones] = React.useState(-1)
        const [hover_circulaciones, setHoverCirculaciones] = React.useState(-1)
        
        // Estados de circulaciones del vagón selecionado + filtro para query
        const [circulaciones_vagon, setCirculaciones] = useEventos()
        const [rango_circulaciones, rangoCirculacionesDispatcher] = useRango (600)
        
        //llama a las funciones de datos para recoger los datos a pasar a los componentes hacia abajo
        const vagon = seleccionarVagon(seleccion_vagon, vagones.lista)  
        
        // Efecto para cargar la lista de circulaciones cuando hay cambio en la selección!!!
        React.useEffect(() => {
                if(seleccion_vagon !== -1){
                        setVerTodos(false)
                        setHoverCirculaciones(-1)
                        const requestParams = {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({"rango": rango_circulaciones, 'id_vagon': seleccion_vagon})
                            }
                        const getDataCirculaciones = async () => {
                                setCirculaciones({type:'CARGANDO'})
                                try     {
                                        const response = await fetch(url.servidor_backend + url.eventos_vagon, requestParams);
                                        if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                                        let actual_data = await response.json();
                                        setCirculaciones({type:'CARGAR_EVENTOS', data: actual_data})
                                        } 
                                catch(err) {setCirculaciones({type:'ERROR', data: err.message})} 
                                }
                        getDataCirculaciones()}     
                }, [rango_circulaciones, seleccion_vagon, setCirculaciones, url.eventos_vagon, url.servidor_backend]);

        //Render
        return (
                <>
                {vagones.cargando ?
                        (<PanelContenido>
                                <BannerMercave height = {160} imagen = 'arte/vagonesCabecera.jpg'/>
                                <FiltroVagones
                                        filtro = {filtro} 
                                        filtro_dispatcher = {filtroDispatcher}
                                        actores = {actores} />
                                <Fallback
                                        elemento = 'Vagones' 
                                        modo = 'CARGANDO'
                                        imagen = 'arte/vagonesImagen.jpg'/>     
                        </PanelContenido>)
                        :
                        (vagones.error ?
                                (<PanelContenido>
                                <BannerMercave height = {160} imagen = 'arte/vagonesCabecera.jpg'/>
                                <FiltroVagones
                                        filtro = {filtro} 
                                        filtro_dispatcher = {filtroDispatcher}
                                        actores = {actores} />
                                <Fallback
                                        elemento = 'Vagones' 
                                        modo = 'ERROR'
                                        imagen = 'arte/vagonesImagen.jpg'/>     
                                </PanelContenido>)
                                :
                                (<PanelContenido>
                                        <BannerMercave height = {180} imagen = 'arte/vagonesCabecera.jpg'/>
                                        <FiltroVagones
                                                filtro = {filtro} 
                                                filtro_dispatcher = {filtroDispatcher}
                                                actores = {actores} />
                                        <PanelLista>
                                                <ListaVagones
                                                        onSeleccion = {setSeleccionVagon}
                                                        onHover = {setHoverVagones} 
                                                        setVerTodos = {setVerTodos}
                                                        vagones = {vagones.lista} />   
                                                <MapaVagones 
                                                        hoverVagones = {hover_vagones}
                                                        onHoverVagones = {setHoverVagones}
                                                        vagones = {vagones.lista}
                                                        onSeleccionVagon = {setSeleccionVagon}
                                                        hoverCirculaciones = {hover_circulaciones}
                                                        onHoverCirculaciones = {setHoverCirculaciones}
                                                        circulaciones = {circulaciones_vagon.lista}
                                                        ver_todos = {ver_todos}
                                                        setVerTodos = {setVerTodos}
                                                        vagonSeleccionado = {vagon}
                                                        rango = {rango_circulaciones}
                                                        setRango = {rangoCirculacionesDispatcher}/>   
                                        </PanelLista> 
                                        <FichaVagon
                                                vagon = {vagon} 
                                                onSeleccion = {seleccionDispatcher}/>   
                                </PanelContenido>)
                        )} 
                </>     
                )
        }
const PanelContenido = styled.div`
display:grid;
grid-template-rows: 0fr 5.5rem 1fr 0fr;
gap:2px;
`
const PanelLista = styled.div`
display:grid;
grid-template-columns: 0.2fr 1fr;
gap:2px;
width:100%;
`
export default ContainerVagones;