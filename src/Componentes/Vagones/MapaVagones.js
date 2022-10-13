import * as React from 'react';
import styled from 'styled-components';
import LeyendaMapa from './LeyendaMapa';

function MapaVagones ({mapa_todos, circulaciones, ver_todos, setVerTodos,codigo_vagon, rango, setRango}){
    let mapa = ''
    if (ver_todos) {
        mapa = mapa_todos
    }
    else {
        mapa = circulaciones.mapa
    }
    return(
        <>
        <PanelMapa>
            <div dangerouslySetInnerHTML={{ __html: mapa }} />
            <LeyendaMapa
                ver_todos = {ver_todos}
                onSeleccion = {setVerTodos}
                codigo_vagon = {codigo_vagon}
                loading = {circulaciones.loading}
                error = {circulaciones.error}
                rango = {rango}
                setRango ={setRango}
                />
        </PanelMapa>
        </>
    );
}

const PanelMapa = styled.div`
    display:grid;
    grid-template-columns: 1fr 0fr;
    background-color: black;
    gap:2px;
    align-items: center;
`

export default MapaVagones