import styled from 'styled-components';
import GraficoVelocidad from '../../../Varios/GraficoVelocidad';
import GraficoTemperaturas from '../../../Varios/GraficoTemperaturas';

function GraficasCirculaciones ({datos, estado_eje, vel_eje, tempa, tempb}){
        return (
        <>
        <Panel>
            <GraficoVelocidad 
                datos = {datos}
                estado_eje = {estado_eje}
                vel_eje = {vel_eje}/>
            <GraficoTemperaturas 
                datos = {datos}/>
        </Panel>
        </>)
}

const Panel = styled.div`
display:grid;
        grid-template-columns: 1fr 1fr;
        gap:3px;
        width:100%;
`

export default GraficasCirculaciones;
