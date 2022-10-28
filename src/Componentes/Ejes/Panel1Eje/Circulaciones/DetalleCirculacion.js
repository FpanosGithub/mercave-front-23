import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tarjeta33 from '../../../Varios/Tarjeta33';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { pink, grey, green } from '@mui/material/colors';

export default function DetalleCirculacion({circulacion}) {
        const fecha_larga_inicial = circulacion.dt_inicial
        const fecha_larga_final = circulacion.dt_final
        let fecha_corta_inicial = '2022-01-05'
        let hora_inicial = '12:00:00'
        let fecha_corta_final = '2022-01-05'
        let hora_final = '12:00:00'
        let coord_inicial = '[40.4200, -3.5800]'
        let lugar_inicial = 'Vicalvaro'
        let coord_final = '[40.4200, -3.5800]'
        let lugar_final = 'Algeciras'
        let alarma = 0
        let activa = 0
        let en_vagon = 0
        let en_bogie = 0
        
        if (fecha_larga_inicial){
                fecha_corta_inicial = fecha_larga_inicial.slice(0,10)
                hora_inicial = fecha_larga_inicial.slice(11,19)
                fecha_corta_final = fecha_larga_final.slice(0,10)
                hora_final = fecha_larga_final.slice(11,19)
                alarma = circulacion.alarma
                activa = circulacion.alarma_activa
                en_vagon = circulacion.en_vagon
                en_bogie = circulacion.en_bogie
                lugar_inicial = circulacion.punto_red_inicial
                lugar_final = circulacion.punto_red_final
                coord_inicial = `[${circulacion.lat_inicial},${circulacion.lng_inicial}]`
                coord_final = `[${circulacion.lat_final},${circulacion.lng_final}]`
        }

        // Render JSX
        return (<> 
        <Paper elevation = {3}>
                <Paper elevation = {1} sx={{mt:0, p:1.5, mb:1}}>
                        <Typography color={green[800]} sx={{fontSize: 18, ml:2}}>
                                DETALLE DE CIRCULACIÓN: [ {circulacion.id} ]
                        </Typography>
                </Paper>
                <PanelDetalle>
                <Card sx={{width:90, height:200}}>
                        <CardContent>
                                <Typography sx={{ fontSize: 18, textAlign:'center', mt:-0.5, mb:1.2 }} color="green" gutterBottom>[ {circulacion.id} ]</Typography>
                                <Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.secondary" gutterBottom>Alarma</Typography>
                                <Paper elevation = {1} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', ml:1, mt:2, mb:3, width:40, height:35}}>
                                {alarma ? 
                                        (activa ?(<LensBlurOutlinedIcon fontSize='large' sx={{ color: pink[500], mt:0.2 }}/>)
                                                :(<LensBlurOutlinedIcon fontSize='large' sx={{ color: grey[500], mt:0.2  }}/>))
                                        :
                                        (<LensBlurOutlinedIcon fontSize='large' sx={{ color: green[500], mt:0.2  }}/>)}
                                </Paper>  
                                {activa ? 
                                        (<Button size="small" variant="outlined" sx={{ fontSize: 14, textAlign:'center', mt:0, ml:-0.6 }}>Reset</Button>)
                                        :
                                        (alarma?
                                                (<Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.secondary" gutterBottom>Inactiva</Typography>)    
                                                :
                                                (<Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.secondary" gutterBottom>NO</Typography>))}
                        </CardContent>
                </Card>
                <Tarjeta33
                        texto1 = 'Dia inicio:'
                        valor1 = {fecha_corta_inicial}
                        texto2 = 'hora:'
                        valor2 = {hora_inicial}
                        minWidth = {100}
                        />
                <Tarjeta33
                        texto1 = 'Lugar inicio'
                        valor1 = {lugar_inicial}
                        texto2 = 'Coordenadas'
                        valor2 = {coord_inicial}
                        minWidth = {120}
                        />
                <Tarjeta33
                        texto1 = 'Día final:'
                        valor1 = {fecha_corta_final}
                        texto2 = 'hora:'
                        valor2 = {hora_final}
                        minWidth = {100}
                        />
                <Tarjeta33
                        texto1 = 'Lugar final'
                        valor1 = {lugar_final}
                        texto2 = 'Coordenadas'
                        valor2 = {coord_final}
                        minWidth = {120}
                        />
                <Tarjeta33
                        texto1 = 'Vagón:'
                        valor1 = {en_vagon}
                        texto2 = 'Bogie:'
                        valor2 = {en_bogie}
                        minWidth = {120}
                        />
                </PanelDetalle>
        </Paper>
        </>)
}

const PanelDetalle = styled.div`
display:grid;
gap:2px;
grid-template-columns: 0fr 1fr 1fr 1fr 1fr 1fr;
`