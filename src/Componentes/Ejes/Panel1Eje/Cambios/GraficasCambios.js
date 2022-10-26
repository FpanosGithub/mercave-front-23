import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PrepararDatosCambios from '../../../../Utilidades/PrepararDatosCambiosEje';
import GraficoDescerrojamiento from '../../../Varios/GraficoDescerrojamiento';
import GraficoCambio from '../../../Varios/GraficoCambio';
import GraficoEncerrojamiento from '../../../Varios/GraficoEncerrojamiento';

function GraficasCambios ({cambios}){ 
        const datos = PrepararDatosCambios (cambios)
        return (<>
        <Paper elevation = {1} sx={{mt:0.2, p:3, mb:0}}>
                <Typography color="text.secondary" sx={{fontSize: 18, textAlign:'center'}}>
                        Distribuciones de esfuerzos en rango de cambios seleccionado:
                </Typography>
        </Paper>
        <Panel>
            <GraficoDescerrojamiento datos = {datos}/>
            <GraficoCambio datos = {datos}/>
            <GraficoEncerrojamiento datos = {datos}/>
        </Panel>
        </>)
}

const Panel = styled.div`
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:3px;
        width:100%;
`

export default GraficasCambios;


//