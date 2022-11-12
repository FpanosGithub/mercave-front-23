import * as React from 'react';
import styled from 'styled-components';
import FiltroVagones from './FiltroVagones';
import Fallback from '../../Varios/Fallback';
import BannerMercave from '../../Varios/BannerMercave';
import ListaVagones from './ListaVagones';
import AlarmasVagones from './AlarmasVagones';
import MapaVagones from './MapaVagones';


//------------//
// COMPONENTE //
//------------//
function PanelVagones ({vagones, filtro, filtro_dispatcher, actores, alarmas, onSeleccion, url})
        {
        const [hover_vagones, setHoverVagones] = React.useState(-1)
        
        return (
                <>
                {(vagones.cargando) ?
                        (<PanelContenido>
                                <BannerMercave height = {180} imagen = 'arte/vagonesCabecera.jpg'/>
                                <FiltroVagones
                                        filtro = {filtro} 
                                        filtro_dispatcher = {filtro_dispatcher}
                                        actores = {actores} />
                                <Fallback
                                        elemento = 'Vagones' 
                                        modo = 'CARGANDO'
                                        imagen = 'arte/vagonesImagen.jpg'/>
                        </PanelContenido>)
                        :
                        (<PanelContenido>
                                <BannerMercave height = {180} imagen = 'arte/vagonesCabecera.jpg'/>
                                <FiltroVagones
                                        filtro = {filtro} 
                                        filtro_dispatcher = {filtro_dispatcher}
                                        actores = {actores} />
                                <PanelLista>
                                        <ListaVagones 
                                                onSeleccion = {onSeleccion}
                                                onHover = {setHoverVagones} 
                                                vagones = {vagones.lista}/>
                                        <PanelMapa>
                                                <MapaVagones
                                                        vagones = {vagones.lista} 
                                                        hover = {hover_vagones}
                                                        onHover = {setHoverVagones}
                                                        onSeleccion = {onSeleccion}/>    
                                                <AlarmasVagones 
                                                        alarmas = {alarmas}
                                                        onSeleccion = {onSeleccion} />
                                        </PanelMapa>
                                        
                                </PanelLista> 
                        </PanelContenido>)
                        } 
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
grid-template-columns: 1fr 0.7fr;
gap:2px;
width:100%;
`
const PanelMapa = styled.div`
display:grid;
grid-template-rows: 1fr 0fr;
gap:2px;
width:100%;
`
export default PanelVagones;