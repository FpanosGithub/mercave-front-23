import * as React from 'react';
import styled from 'styled-components';
// Hooks
import useEventos from '../../../Hooks/useEventos';
import useMantenimientos from '../../../Hooks/useMantenimientos';
import useRango from '../../../Hooks/useRango';
// Componentes
import BannerVagon from './BannerVagon';
import CirculacionesVagon from './Circulaciones/CirculacionesVagon';
import MantenimientosVagon from './Mantenimientos/MantenimientosVagon';


function Panel1Vagon ({vagon, onSeleccion, url}){

        const [circulaciones, circulacionesDispatcher] = useEventos()
        const [mantenimientos, mantenimientosDispatcher] = useMantenimientos()
        const [rango, rangoDispatcher] = useRango (60)
        // Variable para gestionar que tipo de evento mostramos en el panel de eventos
        const [mostrar, setMostrar] = React.useState('Circulaciones')

        // Lanzamos el side effect para cargar la info de las circulaciones del vagón seleccionado
        React.useEffect(() => {
        const requestParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"rango": rango, 'id_vagon': vagon.id})
        }
        const getDataCirculaciones = async () => {
            circulacionesDispatcher({type:'CARGANDO'})
            try {
                const response = await fetch(url.servidor_backend + url.circulaciones_vagon, requestParams);
                if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                let actual_data = await response.json();
                circulacionesDispatcher({type:'CARGAR_EVENTOS', data: actual_data})
                } 
            catch(err) {circulacionesDispatcher({type:'ERROR', data: err.message})} 
        }
        getDataCirculaciones()
        console.log('FETCH CIRCULACIONES VAGÓN')
        },[circulacionesDispatcher, rango, url.servidor_backend, vagon.id, url.circulaciones_vagon]);
       
        // Lanzamos el side effect para cragar la info de los mantenimientos del vagón seleccionado
        React.useEffect(() => {
            const requestParams = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"rango": rango, 'id_vagon': vagon.id})
            }
            const getDataMtos = async () => {
                mantenimientosDispatcher({type:'CARGANDO'})
                try {
                    const response = await fetch(url.servidor_backend + url.mantenimientos_vagon, requestParams);
                    if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                    let actual_data = await response.json();
                    mantenimientosDispatcher({type:'CARGAR_MANTENIMIENTOS', data: actual_data})
                    } 
                catch(err) {mantenimientosDispatcher({type:'ERROR', data: err.message})} 
            }
            getDataMtos()
            console.log('FETCH MANTENIMIENTOS VAGÓN')
            },[vagon.id, rango, url.servidor_backend, mantenimientosDispatcher, url.mantenimientos_vagon]);

    // RENDER INFO DE 1 VAGÓN!!!!!!
        return (
                <PanelContenido>
                <BannerVagon 
                        vagon={vagon} 
                        onSeleccion = {onSeleccion}/>
                {(mostrar === 'Circulaciones')?
                        (<CirculacionesVagon
                                vagon={vagon}
                                circulaciones = {circulaciones}
                                rango = {rango}
                                rangoDispatcher = {rangoDispatcher}
                                onMostrar = {setMostrar}
                                url = {url}/>)
                        :
                        ((mostrar === 'Mantenimientos')?
                            (<MantenimientosVagon
                                vagon={vagon}
                                mantenimientos = {mantenimientos}
                                rango = {rango}
                                rangoDispatcher = {rangoDispatcher}
                                onMostrar = {setMostrar}
                                url = {url}/>)
                            :
                            (<CirculacionesVagon
                                vagon={vagon}
                                circulaciones = {circulaciones}
                                rango = {rango}
                                rangoDispatcher = {rangoDispatcher}
                                onMostrar = {setMostrar}
                                url = {url}/>))
                            } 
                </PanelContenido>
        )
}

const PanelContenido = styled.div`
  display:grid;
  grid-template-rows: 10rem 1fr;
  gap: 2px;
  min-height: 100%;
  width:100%;
  margin-top:2px;
  margin-bottom:2px;
  `
export default Panel1Vagon;