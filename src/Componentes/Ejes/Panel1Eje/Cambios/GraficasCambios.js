import styled from 'styled-components';
import GraficoDescerrojamiento from '../../../Varios/GraficoDescerrojamiento';
import GraficoCambio from '../../../Varios/GraficoCambio';
import GraficoEncerrojamiento from '../../../Varios/GraficoEncerrojamiento';

function GraficasCambios ({datos}){ 
        return (
        <Panel>
            <GraficoDescerrojamiento datos = {datos}/>
            <GraficoCambio datos = {datos}/>
            <GraficoEncerrojamiento datos = {datos}/>
        </Panel>
        )
}

const Panel = styled.div`
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:3px;
        width:100%;
`

export default GraficasCambios;


//