import * as React from 'react';
import styled from 'styled-components';
import ListaVagones from './ListaVagones';
import MapaVagones from './MapaVagones';

function InfoVagones ({onSeleccion, vagones, mapa})
    {      
    return (
        <PanelInfo>
            <ListaVagones
                        onSeleccion = {onSeleccion}
                        vagones = {vagones} />   
            <PanelMapa>
                <MapaVagones mapa = {mapa} /> 
            </PanelMapa>  
        </PanelInfo>

        )
}

const PanelInfo = styled.div`
    display:grid;
    grid-template-columns: 0fr 1fr;
    gap:2px;
    width:100%;
`
const PanelMapa = styled.div`
    display:grid;
    grid-template-rows: 1fr 0fr;
    gap:2px;
    width:100%;
`
export default InfoVagones;