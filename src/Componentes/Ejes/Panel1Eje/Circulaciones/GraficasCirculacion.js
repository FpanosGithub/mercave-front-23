import styled from 'styled-components';
import Card from '@mui/material/Paper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CabeceraGrafica from '../../../Varios/CabeceraGrafica';
import CurvaVelocidad from '../../../Varios/CurvaVelocidad';
import CurvaTemperaturas from '../../../Varios/CurvaTemperaturas';
import PrepararDatosCirculaciones from '../../../../Utilidades/PrepararDatosCirculacionesEje';
import CurvaAceleraciones from '../../../Varios/CurvaAceleraciones';

function GraficasCirculacion ({eventos, url}){
        const datos = PrepararDatosCirculaciones (eventos)
        return (
        <>
        <PanelGeneral>
        <Paper elevation = {1} sx={{mt:0.1, p:2, mb:0}}>
                <Typography color="text.secondary" sx={{fontSize: 18, textAlign:'center'}}>
                        Graficas de la circulación seleccionada:
                </Typography>
        </Paper>
        {/* GRÁFICAS VELOCIDAD Y TEMPERATURA */}
        <Card sx = {{mt:0.2}}>        
                <PanelGraficas>
                <PanelGrafica>
                        <CabeceraGrafica
                                titulo = 'Velocidades'
                                subtitulo = 'en Km/h'
                                height = {60}/>
                        <CurvaVelocidad
                                datos = {datos.velocidades} 
                                height = {200} />
                </PanelGrafica>
                <PanelGrafica>
                        <CabeceraGrafica
                                titulo = 'Temperaturas en cajas de grasa'
                                subtitulo = 'Evolución temp en º'
                                height = {60}/>
                        <CurvaTemperaturas
                                datos = {datos.temperaturas} 
                                height = {200} />
                </PanelGrafica>
                </PanelGraficas>
        </Card>
        {/* GRÁFICAS ACELERACIONES EJE Z */}
        <Card sx = {{mt:0.3}}>        
                <PanelGraficas>
                <PanelGrafica>
                        <CabeceraGrafica
                                titulo = 'Aceleraciones Máximas - EJE Z'
                                subtitulo = ''
                                height = {40}/>
                        <CurvaAceleraciones
                                datos = {datos.azM} 
                                lim_max = {10} 
                                height = {200} />
                </PanelGrafica>
                <PanelGrafica>
                        <CabeceraGrafica
                                titulo = 'Aceleraciones medias - EJE Z'
                                subtitulo = ''
                                height = {40}/>
                        <CurvaAceleraciones
                                datos = {datos.azmed} 
                                lim_max = {8} 
                                height = {200} />
                </PanelGrafica>
                </PanelGraficas>
        </Card>
        {/* GRÁFICAS ACELERACIONES EJE Y */}
        <Card>        
                <PanelGraficas>
                <PanelGrafica>
                        <CabeceraGrafica
                                titulo = 'Aceleraciones Máximas - EJE Y'
                                subtitulo = ''
                                height = {40}/>
                        <CurvaAceleraciones
                                datos = {datos.ayM}
                                lim_max = {6} 
                                height = {200} />
                </PanelGrafica>
                <PanelGrafica>
                        <CabeceraGrafica
                                titulo = 'Aceleraciones medias - EJE Y'
                                subtitulo = ''
                                height = {40}/>
                        <CurvaAceleraciones
                                datos = {datos.aymed} 
                                lim_max = {4} 
                                height = {200} />
                </PanelGrafica>
                </PanelGraficas>
        </Card>   
        {/* GRÁFICAS ACELERACIONES EJE X */}     
        <Card>        
                <PanelGraficas>
                <PanelGrafica>
                        <CabeceraGrafica
                                titulo = 'Aceleraciones Máximas - EJE X'
                                subtitulo = ''
                                height = {40}/>
                        <CurvaAceleraciones
                                datos = {datos.axM} 
                                lim_max = {5} 
                                height = {200} />
                </PanelGrafica>
                <PanelGrafica>
                        <CabeceraGrafica
                                titulo = 'Aceleraciones medias - EJE X'
                                subtitulo = ''
                                height = {40}/>
                        <CurvaAceleraciones
                                datos = {datos.axmed} 
                                lim_max = {3} 
                                height = {200} />
                </PanelGrafica>
                </PanelGraficas>
        </Card>
        </PanelGeneral>
        </>)
}

const PanelGeneral = styled.div`
display:grid;
        grid-template-rows: 4rem 0fr 0fr 0fr 0fr;
        gap:1px;
        width:100%;
`
const PanelGraficas = styled.div`
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
