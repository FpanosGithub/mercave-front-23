import * as React from 'react';
import styled from 'styled-components';
import FiltroEjes from './FiltroEjes';
import Fallback from '../../Varios/Fallback';
import BannerMercave from '../../Varios/BannerMercave';
import ListaEjes from './ListaEjes';
import AlarmasEjes from './AlarmasEjes';
import MapaEjes from './MapaEjes';


export default function PanelEjes ({filtro, filtro_dispatcher, actores, onSeleccion, ejes, url}) {

        const [alarmas, setAlarmas] = React.useState([])
        const [hover, setHover] = React.useState(-1)

        // Efecto para cargar las alarmas de ejes
        React.useEffect(() => {
                const getDataBD = async () => {
                    try {
                        const response_actores = await fetch(url.servidor_backend + url.alarmas_ejes);
                        let actual_data_alarmas = await response_actores.json();
                        setAlarmas (actual_data_alarmas);
                        }
                    catch(err) {setAlarmas ('error')}  
                    };
                    getDataBD();
                }, [url.alarmas_ejes, url.servidor_backend]);
        
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
                                        imagen = 'eje.png'/>
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
                                                        alarmas = {alarmas} />
                                        </PanelMapa>
                                        
                                </PanelLista> 
                        </PanelContenido>)
                        } 
                </>
        )
}

const PanelContenido = styled.div`
display:grid;
grid-template-rows: 0fr 5rem 1fr;
gap:2px;
`
const PanelLista = styled.div`
display:grid;
grid-template-columns: 0fr 1fr;
gap:2px;
width:100%;
`
const PanelMapa = styled.div`
display:grid;
grid-template-rows: 1fr 0.6fr;
gap:2px;
width:100%;
`