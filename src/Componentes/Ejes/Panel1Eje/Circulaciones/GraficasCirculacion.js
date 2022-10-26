import styled from 'styled-components';
import Card from '@mui/material/Paper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CabeceraGrafica from '../../../Varios/CabeceraGrafica';
import CurvaVelocidad from '../../../Varios/CurvaVelocidad';
import CurvaTemperaturas from '../../../Varios/CurvaTemperaturas';
import AceleracionesEvento from '../../../Varios/AceleracionesEvento';
import PrepararDatosCirculaciones from '../../../../Utilidades/PrepararDatosCirculacionesEje';

function GraficasCirculacion ({eventos, url}){
        const datos = PrepararDatosCirculaciones (eventos)
        return (
        <>
        <PanelGeneral>
        <Paper elevation = {1} sx={{mt:0.2, p:2, mb:0}}>
                <Typography color="text.secondary" sx={{fontSize: 18, textAlign:'center'}}>
                        Graficas de la circulación seleccionada:
                </Typography>
        </Paper>
                <Card>        
                        <PanelGraficasVT>
                                <PanelGrafica>
                                <CabeceraGrafica
                                        titulo = 'Velocidades'
                                        subtitulo = 'en Km/h'
                                        height = {65}/>
                                <CurvaVelocidad
                                        datos = {datos.velocidades} 
                                        height = {230} />
                                </PanelGrafica>
                                <PanelGrafica>
                                <CabeceraGrafica
                                        titulo = 'Temperaturas en cajas de grasa'
                                        subtitulo = 'Evolución temp en º'
                                        height = {65}/>
                                <CurvaTemperaturas
                                        datos = {datos.temperaturas} 
                                        height = {230} />
                                </PanelGrafica>
                        </PanelGraficasVT>
                </Card>
                <AceleracionesEvento
                        evento = {eventos[0]}
                        url = {url}/>
        </PanelGeneral>
        </>)
}

const PanelGeneral = styled.div`
display:grid;
        grid-template-rows: 4rem 0fr 1fr;
        gap:1px;
        width:100%;
`
const PanelGraficasVT = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1px;
` 
const PanelGrafica = styled.div`
    display:grid;
    grid-template-rows: 0fr 0fr;
    gap:1px;
` 
export default GraficasCirculacion;
