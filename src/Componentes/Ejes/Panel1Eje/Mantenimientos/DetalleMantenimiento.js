import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tarjeta33 from '../../../Varios/Tarjeta33';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { pink, green } from '@mui/material/colors';

function DetalleMantenimiento ({mantenimiento}){

        let fecha_corta = '2023-01-01'
        let hora = '12:00:00'
        let alarma = 0
        let cambiador = 'Córdoba'
        let sentido = 'UIC->IB'
        let V = 7
        let FV = 100
        let fdaM = 20
        let fdbM = 20
        let fcaM = 20
        let fcbM = 20
        let feam = 20
        let febm = 20

        if (mantenimiento) {
                if (mantenimiento.inicio) {
                        fecha_corta = mantenimiento.inicio.slice(0,10)
                        hora = mantenimiento.inicio.slice(11,19)}
                if (mantenimiento.alarma){mantenimiento = mantenimiento.alarma}}

        // Render JSX
        return (
        <Paper elevation = {3}>
                <Paper elevation = {1} sx={{mt:0, p:1.5, mb:1}}>
                        <Typography color={green[800]} sx={{fontSize: 18, ml:2}}>
                                DETALLE DEL MANTENIMIENTO: [ {mantenimiento.id} ]
                        </Typography>
                </Paper>
                <PanelDetalle>
                <Card sx={{width:80, height:200}}>
                        <CardContent>
                                <Typography sx={{ fontSize: 18, textAlign:'center', mt:-0.5, mb:1.2 }} color="green" gutterBottom>[ {mantenimiento.id} ]</Typography>
                                <Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.secondary" gutterBottom>Alarma</Typography>
                                <Paper elevation = {1} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', ml:0.8, mt:2, mb:3, width:40, height:35}}>
                                        {alarma ? 
                                                (<LensBlurOutlinedIcon fontSize='large' sx={{ color: pink[500], mt:0.2 }}/>)
                                                :
                                                (<LensBlurOutlinedIcon fontSize='large' sx={{ color: green[500], mt:0.2  }}/>)}
                                </Paper>  
                                {alarma?
                                        (<Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.secondary" gutterBottom>SI</Typography>)    
                                        :
                                        (<Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.secondary" gutterBottom>NO</Typography>)}
                        </CardContent>
                </Card>
                <Tarjeta33
                        texto1 = 'Fecha:'
                        valor1 = {fecha_corta}
                        texto2 = 'hora:'
                        valor2 = {hora}
                        minWidth = {90}
                        />
                <Tarjeta33
                        texto1 = 'Cambiador:'
                        valor1 = {cambiador}
                        texto2 = 'Sentido:'
                        valor2 = {sentido}
                        minWidth = {100}
                        />
                <Tarjeta33
                        texto1 = 'Velocidad:'
                        valor1 = {`${V} Km/h`}
                        texto2 = 'Peso:'
                        valor2 = {`${FV} kN`}
                        minWidth = {100}
                        />
                <Tarjeta33
                        texto1 = 'F.Desc.A:'
                        valor1 = {`${fdaM} kN`}
                        texto2 = 'F.Desc.B:'
                        valor2 = {`${fdbM} kN`}
                        minWidth = {90}
                        />
                <Tarjeta33
                        texto1 = 'F.Camb.A:'
                        valor1 = {`${fcaM} kN`}
                        texto2 = 'F.Camb.B:'
                        valor2 = {`${fcbM} kN`}
                        minWidth = {90}
                        />
                <Tarjeta33
                        texto1 = 'F.Enc.A:'
                        valor1 = {`${feam} kN`}
                        texto2 = 'F.Enc.B:'
                        valor2 = {`${febm} kN`}
                        minWidth = {90}
                        />
                </PanelDetalle>
        </Paper>
        )
}

const PanelDetalle = styled.div`
display:grid;
gap:2px;
grid-template-columns: 0fr 1fr 1fr 1fr 1fr 1fr 1fr;
`
export default DetalleMantenimiento;