import * as React from 'react';
import styled from 'styled-components';
import DetalleCambio from './DetalleCambio'
import MapaCambios from './MapaCambios'
import GraficasCambios from './GraficasCambios'


function FichaCambio ({cambios, cambio, onSeleccion}){
    
    // RENDER FICHA DE CAMBIO!!!!!!
    return (     
    <PanelEventos>
        <DetalleCambio
            cambio = {cambio}/>
        <MapaCambios
            cambios = {cambios}
            seleccion = {cambio.id}
            onSeleccion = {onSeleccion}/>
        <GraficasCambios
            eventos = {cambios}/>
    </PanelEventos>
    )
}
const PanelEventos = styled.div`
    display:grid;
    padding:1px, 1px;
    gap:2px;
    grid-template-rows: 0fr 33rem 0fr;
    `
export default FichaCambio;