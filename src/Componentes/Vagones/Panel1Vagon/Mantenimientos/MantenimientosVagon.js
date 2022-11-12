import * as React from 'react';
import styled from 'styled-components';
import Fallback from '../../../Varios/Fallback';
import SeleccionarEvento from '../../../../Utilidades/SeleccionarEvento';
import RangoEventos from '../../../Varios/RangoEventos';
import PlanMantenimiento from './PlanMantenimiento';
import ListaMantenimientos from './ListaMantenimientos';
import MapaMantenimientos from './MapaMantenimientos';
import FichaIntervencion from './FichaIntervencion';
import InformeIntervencion from './InformeIntervencion';

function MantenimientosVagon ({vagon, mantenimientos, rango, rangoDispatcher, onMostrar, url}){

    const [seleccion_mantenimiento, setSeleccionMantenimiento] = React.useState (-1)
    
    // Sacamos el mantenimiento seleccionado de la lista de cambios para pasarlo al componente <DetalleCambioEje>
    const intervencion = SeleccionarEvento (seleccion_mantenimiento, setSeleccionMantenimiento, mantenimientos.lista)
    console.log(intervencion)
    // RENDER MANTENIMIENTOS DE 1 EJE!!!!!!
    return (     
        <PanelMantenimiento>
            <RangoEventos
                rango = {rango}
                setRango = {rangoDispatcher}
                mostrar = 'Mantenimientos'
                onMostrar = {onMostrar}
                origen = 'Vagones'
                minWidth = {165}/>
            {mantenimientos.cargando ?
                (<><div></div><Fallback
                                    elemento = {`Mantenimientos del vagón ${vagon.codigo}`}
                                    modo = 'CARGANDO'
                                    imagen = 'arte/ejesImagen.jpg'/></>)
                :
                (mantenimientos.error ?
                (<><div></div><Fallback
                                    elemento = {`Mantenimientos del vagón ${vagon.codigo}`}
                                    modo = 'CARGANDO'
                                    imagen = 'arte/ejesImagen.jpg'/></>)
                    :
                    (<>
                    <PanelDatosMantenimiento>
                        <PlanMantenimiento
                            pm = {mantenimientos.pm}
                            niveles = {mantenimientos.niveles}
                            km = {vagon.km_proximo_mant}
                            fecha = {vagon.fecha_ultimo_mant}/>
                        <PanelListaMantenimiento>
                            <ListaMantenimientos 
                                intervenciones={mantenimientos.lista}
                                seleccion = {seleccion_mantenimiento}
                                onSeleccion = {setSeleccionMantenimiento} />
                            <MapaMantenimientos
                                intervenciones={mantenimientos.lista}
                                seleccion = {seleccion_mantenimiento}
                                onSeleccion = {setSeleccionMantenimiento}/>
                        </PanelListaMantenimiento>
                        <FichaIntervencion
                            intervencion = {intervencion}/>
                        <InformeIntervencion
                            mantenimientos = {[]}/>
                    </PanelDatosMantenimiento>
                </>))}
        </PanelMantenimiento>
        )
}
const PanelMantenimiento = styled.div`
display:grid;
grid-template-columns: 0fr 1fr;
gap:2px;
width:100%;
`
const PanelDatosMantenimiento = styled.div`
display:grid;
grid-template-rows: 0fr 30rem 14rem 1fr;
gap:2px;
width:100%;
`
const PanelListaMantenimiento = styled.div`
display:grid;
grid-template-columns: 0fr 1fr;
gap:2px;
width:100%;
`
export default MantenimientosVagon;