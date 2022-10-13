import * as React from 'react';
import styled from 'styled-components';
import FiltroEjes from './FiltroEjes';
import Fallback from '../../Varios/Fallback';
import ListaEjes from './ListaEjes';
import AlarmasEjes from './AlarmasEjes';
import MapaEjes from './MapaEjes';


export default function PanelEjes ({filtro, filtro_dispatcher, actores, onSeleccion, ejes})
        {
        return (
                <>
                {(ejes.cargando) ?
                        (<PanelContenido>
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
                                <FiltroEjes
                                        filtro = {filtro} 
                                        filtro_dispatcher = {filtro_dispatcher}
                                        actores = {actores} />
                                <PanelLista>
                                        <ListaEjes 
                                                onSeleccion = {onSeleccion}
                                                ejes = {ejes.lista}/>
                                        <PanelMapa>
                                                <MapaEjes
                                                        ejes = {ejes.lista} />    
                                                <AlarmasEjes ejes = {ejes} />
                                        </PanelMapa>
                                        
                                </PanelLista> 
                        </PanelContenido>)
                        } 
                </>
        )
}

const PanelContenido = styled.div`
display:grid;
grid-template-rows: 5rem 1fr;
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
grid-template-rows: 1fr 1fr;
gap:2px;
width:100%;
`