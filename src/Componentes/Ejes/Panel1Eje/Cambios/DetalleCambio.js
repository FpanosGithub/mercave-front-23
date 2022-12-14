import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tarjeta33 from '../../../Varios/Tarjeta33';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { pink, green } from '@mui/material/colors';

function DetalleCambio ({cambio}){

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

        if (cambio) {
                if (cambio.inicio) {
                        fecha_corta = cambio.inicio.slice(0,10)
                        hora = cambio.inicio.slice(11,19)}
                if (cambio.alarma){alarma = cambio.alarma}
                if (cambio.cambiador){cambiador = cambio.cambiador.codigo}
                if (cambio.sentido){sentido = cambio.sentido}
                if (cambio.V){V = cambio.V}
                if (cambio.FV){FV = cambio.FV}
                if (cambio.fdaM){fdaM = cambio.fdaM}
                if (cambio.fdbM){fdbM = cambio.fdbM}
                if (cambio.fcaM){fcaM = cambio.fcaM}
                if (cambio.fcbM){fcbM = cambio.fcbM}
                if (cambio.feam){feam = cambio.feam}
                if (cambio.febm){febm = cambio.febm}}

        // Render JSX
        return (
        <Paper elevation = {3}>
                <Paper elevation = {1} sx={{mt:0, p:1.5, mb:1}}>
                        <Typography color={green[800]} sx={{fontSize: 18, ml:2}}>
                                DETALLE DEL CAMBIO: [ {cambio.id} ]
                        </Typography>
                </Paper>
                <PanelDetalle>
                <Card sx={{width:100, height:160}}>
                        <CardContent>
                                <Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.secondary" gutterBottom>Alarma</Typography>
                                <Paper elevation = {1} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', ml:1.5, mt:2, mb:3, width:40, height:35}}>
                                        {alarma ? 
                                                (<LensBlurOutlinedIcon fontSize='large' sx={{ color: pink[500], mt:0.2 }}/>)
                                                :
                                                (<LensBlurOutlinedIcon fontSize='large' sx={{ color: green[500], mt:0.2  }}/>)}
                                </Paper>  
                        </CardContent>
                </Card>
                <Tarjeta33
                        texto1 = 'Fecha:'
                        valor1 = {fecha_corta}
                        texto2 = 'hora:'
                        valor2 = {hora}
                        minWidth = {100}
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
                        valor1 = {`${V.toFixed(1)} Km/h`}
                        texto2 = 'Peso:'
                        valor2 = {`${FV.toFixed(1)} kN`}
                        minWidth = {100}
                        />
                <Tarjeta33
                        texto1 = 'F.Desc.A:'
                        valor1 = {`${fdaM.toFixed(2)} kN`}
                        texto2 = 'F.Desc.B:'
                        valor2 = {`${fdbM.toFixed(2)} kN`}
                        minWidth = {90}
                        />
                <Tarjeta33
                        texto1 = 'F.Camb.A:'
                        valor1 = {`${fcaM.toFixed(2)} kN`}
                        texto2 = 'F.Camb.B:'
                        valor2 = {`${fcbM.toFixed(2)} kN`}
                        minWidth = {90}
                        />
                <Tarjeta33
                        texto1 = 'F.Enc.A:'
                        valor1 = {`${feam.toFixed(2)} kN`}
                        texto2 = 'F.Enc.B:'
                        valor2 = {`${febm.toFixed(2)} kN`}
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
export default DetalleCambio;