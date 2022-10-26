import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tarjeta22 from '../Varios/Tarjeta22';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { pink, grey, green } from '@mui/material/colors';
import { Map, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';

function DetalleOperacion ({operacion}){
        const fecha_larga = operacion.dt
        let fecha_corta = ''
        let hora = ''
        if (fecha_larga) {
                fecha_corta = fecha_larga.slice(0,10)
                hora = fecha_larga.slice(11,19)}
        let cambiador = ''
        let lat = 0
        let lng = 0 
        if (operacion.cambiador) {
                cambiador = operacion.cambiador.codigo
                lat = operacion.cambiador.lat
                lng = operacion.cambiador.lng
        }
        let sentido = ''
        if(operacion.sentido) {sentido = operacion.sentido}
        let alarma = 0
        if(operacion.alarma) {alarma = operacion.alarma}
        let activa = 0
        if(operacion.alarma_activa) {activa = operacion.alarma_activa}

        // Render JSX
        return (
                <> 
                <Paper elevation = {3}>
                <Paper elevation = {1} sx={{mt:0, p:1, mb:1}}>
                        <Typography color="text.secondary" sx={{fontSize: 18, ml:2}}>
                                Detalle de Operación número: [ {operacion.id} ]
                </Typography>
                </Paper>
                <PanelDetalle>
                        <Card sx={{width:90, height:200}}>
                                <CardContent>
                                <Typography sx={{ fontSize: 18, textAlign:'center', mt:-0.5, mb:1.2 }} color="green" gutterBottom>[ {operacion.id} ]</Typography>
                                <Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.secondary" gutterBottom>Alarma</Typography>
                                <Paper elevation = {1} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', ml:1, mt:2, mb:3, width:40, height:35}}>
                                        {alarma ? 
                                                (activa? (<LensBlurOutlinedIcon fontSize='large' sx={{ color: pink[500], mt:0.2 }}/>)
                                                        :(<LensBlurOutlinedIcon fontSize='large' sx={{ color: grey[500], mt:0.2  }}/>))
                                                :
                                                (<LensBlurOutlinedIcon fontSize='large' sx={{ color: green[500], mt:0.2  }}/>)
                                        }
                                </Paper>  
                                        {activa ? 
                                                (<Button size="small" variant="outlined" sx={{ fontSize: 14, textAlign:'center', mt:0, ml:-0.4 }}>Reset</Button>)
                                                :
                                                (alarma?
                                                        (<Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.secondary" gutterBottom>Inactiva</Typography>)    
                                                        :
                                                        (<Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.secondary" gutterBottom>NO</Typography>))
                                        }
                                
                                </CardContent>
                        </Card>
                        <Tarjeta22
                                texto1 = 'Fecha:'
                                valor1 = {fecha_corta}
                                texto2 = 'hora:'
                                valor2 = {hora}
                                minWidth = {145}
                                />
                        <Tarjeta22
                                texto1 = 'Cambiador:'
                                valor1 = {cambiador}
                                texto2 = 'Sentido:'
                                valor2 = {sentido}
                                minWidth = {145}
                                />
                        <Map 
                                provider={stamenToner}
                                dprs={[1, 2]} 
                                minWidth={200} 
                                defaultCenter={[40.4200, -3.5800]} 
                                defaultZoom={4} 
                                attribution = {false}
                                metaWheelZoom = {true}>
                                <Marker 
                                        width={40} 
                                        color = 'red'
                                        anchor={[lat,lng]} />
                                <Overlay anchor={[lat,lng]}>
                                        <Card sx={{ width:90, height:40}}>
                                        <CardContent>
                                        <Typography sx={{ fontSize: 14, mt:-0.7, ml:-0.6, textAlign:'center' }} color="red" gutterBottom>
                                                {cambiador}
                                        </Typography>
                                        </CardContent>
                                        </Card>
                                </Overlay>    
                        </Map>           
                </PanelDetalle>
                </Paper>
                </>)
}
const PanelDetalle = styled.div`
display:grid;
gap:2px;
grid-template-columns: 0fr 0.2fr 0.2fr 1fr;
`
export default DetalleOperacion;