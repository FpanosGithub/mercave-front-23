import * as React from 'react';
import styled from 'styled-components';
import DetalleMantenimiento from './DetalleMantenimiento'
import MapaMantenimientos from './MapaMantenimientos'
//import GraficasCambios from './GraficasCambios'


function FichaMantenimiento ({mantenimientos, mantenimiento, onSeleccion}){
    
    // RENDER FICHA DE MANTENIMIENTO!!!!!!
    return (     
    <PanelEventos>
        <DetalleMantenimiento
            mantenimiento = {mantenimiento}/>
        <MapaMantenimientos
            mantenimientos = {mantenimientos}
            seleccion = {0}
            onSeleccion = {onSeleccion}/>
    </PanelEventos>
    )
}
const PanelEventos = styled.div`
    display:grid;
    padding:1px, 1px;
    gap:2px;
    grid-template-rows: 0fr 33rem 0fr;
    `
export default FichaMantenimiento;