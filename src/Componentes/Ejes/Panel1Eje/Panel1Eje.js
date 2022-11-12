import * as React from 'react';
import styled from 'styled-components';
// Hooks
import useEventos from '../../../Hooks/useEventos';
import useMantenimientos from '../../../Hooks/useMantenimientos';
import useRango from '../../../Hooks/useRango';
// Componentes
import BannerEje from './BannerEje';
import CirculacionesEje from './Circulaciones/CirculacionesEje';
import CambiosEje from './Cambios/CambiosEje';
import MantenimientosEje from './Mantenimientos/MantenimientosEje';


function Panel1Eje ({eje, ejes_mismo_vagon, onVolver, url}){

        const [circulaciones, circulacionesDispatcher] = useEventos()
        const [cambios, cambiosDispatcher] = useEventos()
        const [mantenimientos, mantenimientosDispatcher] = useMantenimientos()
        
        const [rango, rangoDispatcher] = useRango (60)
        //const [rango_mantenimientos, rangoMantenimientosDispatcher] = useRango (60)

        // Variable para gestionar que tipo de evento mostramos en el panel de eventos
        const [mostrar, setMostrar] = React.useState('Circulaciones')

        // Lanzamos el side effect para cargar la info de las circulaciones del eje seleccionado
        React.useEffect(() => {
        const requestParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"rango": rango, 'id_eje': eje.id})
        }
        const getDataCirculaciones = async () => {
            circulacionesDispatcher({type:'CARGANDO'})
            try {
                const response = await fetch(url.servidor_backend + url.circulaciones_eje, requestParams);
                if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                let actual_data = await response.json();
                circulacionesDispatcher({type:'CARGAR_EVENTOS', data: actual_data})
                } 
            catch(err) {circulacionesDispatcher({type:'ERROR', data: err.message})} 
        }
        getDataCirculaciones()
        console.log('FETCH FETCH CIRCULACIONES')
        },[eje.id, circulacionesDispatcher, rango, url.eventos_eje, url.servidor_backend, url.circulaciones_eje]);

        // Lanzamos el side effect para cragar la info de los cambios del eje seleccionado
        React.useEffect(() => {
        const requestParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"rango": rango, 'id_eje': eje.id})
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
        },[eje.id, cambiosDispatcher, rango, url.cambios_eje, url.servidor_backend]);
        
        // Lanzamos el side effect para cragar la info de los mantenimientos del eje seleccionado
        React.useEffect(() => {
            const requestParams = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"rango": rango, 'id_eje': eje.id})
            }
            const getDataMtos = async () => {
                mantenimientosDispatcher({type:'CARGANDO'})
                try {
                    const response = await fetch(url.servidor_backend + url.mantenimientos_eje, requestParams);
                    if (!response.ok) {throw new Error(`HTTP error: The status is ${response.status}`);}
                    let actual_data = await response.json();
                    mantenimientosDispatcher({type:'CARGAR_MANTENIMIENTOS', data: actual_data})
                    } 
                catch(err) {mantenimientosDispatcher({type:'ERROR', data: err.message})} 
            }
            getDataMtos()
            console.log('FETCH FETCH CAMBIOS')
            },[eje.id, rango, url.servidor_backend, mantenimientosDispatcher, url.mantenimientos_eje]);
    console.log('!!!!!!!!!!!!!MANTENIMIENTOS!!!!!!!!!!!!')       
    console.log(mantenimientos)
    // RENDER INFO DE 1 EJE!!!!!!
        return (
                <PanelContenido>
                <BannerEje 
                        eje={eje} 
                        ejes_mismo_vagon = {ejes_mismo_vagon}
                        onVolver = {onVolver}/>
                {(mostrar === 'Circulaciones')?
                        (<CirculacionesEje
                                eje={eje}
                                circulaciones = {circulaciones}
                                rango = {rango}
                                rangoDispatcher = {rangoDispatcher}
                                onMostrar = {setMostrar}
                                url = {url}/>)
                        :
                        ((mostrar === 'Cambios')?
                                (<CambiosEje
                                        eje={eje}
                                        cambios = {cambios}
                                        rango = {rango}
                                        rangoDispatcher = {rangoDispatcher}
                                        onMostrar = {setMostrar}
                                        url = {url}/> )
                                        :
                                        (<MantenimientosEje
                                                eje={eje}
                                                mantenimientos = {mantenimientos}
                                                rango = {rango}
                                                rangoDispatcher = {rangoDispatcher}
                                                onMostrar = {setMostrar}
                                                url = {url}/>))} 
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
export default Panel1Eje;