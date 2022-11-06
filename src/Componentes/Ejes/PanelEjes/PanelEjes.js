import * as React from 'react';
import styled from 'styled-components';
import FiltroEjes from './FiltroEjes';
import Fallback from '../../Varios/Fallback';
import BannerMercave from '../../Varios/BannerMercave';
import ListaEjes from './ListaEjes';
import AlarmasEjes from './AlarmasEjes';
import MapaEjes from './MapaEjes';


export default function PanelEjes ({filtro, filtro_dispatcher, actores, onSeleccion, ejes, alarmas, url}) {

        const [hover, setHover] = React.useState(-1)
        return (
                <>
                {(ejes.cargando) ?
                        (<PanelContenido>
                                <BannerMercave height = {180} imagen = 'arte/ejesCabecera.jpg'/>
                                <FiltroEjes
                                        filtro = {filtro} 
                                        filtro_dispatcher = {filtro_dispatcher}
                                        actores = {actores} />
                                <Fallback
                                        elemento = 'Ejes' 
                                        modo = 'CARGANDO'
                                        imagen = 'arte/ejesImagen.jpg'/>
                        </PanelContenido>)
                        :
                        (<PanelContenido>
                                <BannerMercave height = {180} imagen = 'arte/ejesCabecera.jpg'/>
                                <FiltroEjes
                                        filtro = {filtro} 
                                        filtro_dispatcher = {filtro_dispatcher}
                                        actores = {actores} />
                                <PanelLista>
                                        <ListaEjes 
                                                onSeleccion = {onSeleccion}
                                                onHover = {setHover} 
                                                ejes = {ejes.lista}/>
                                        <PanelMapa>
                                                <MapaEjes
                                                        ejes = {ejes.lista} 
                                                        hover = {hover}
                                                        onHover = {setHover}
                                                        onSeleccion = {onSeleccion}/>    
                                                <AlarmasEjes 
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