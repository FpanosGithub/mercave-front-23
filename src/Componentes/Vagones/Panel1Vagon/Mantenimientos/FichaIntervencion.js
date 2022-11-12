import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tarjeta33 from '../../../Varios/Tarjeta33';
import { green } from '@mui/material/colors';
import TarjetaListaLink from '../../../Varios/TarjetaListaLink';
import Tarjeta22Links from '../../../Varios/Tarjeta22Links';
import TarjetaLed from '../../../Varios/TarjetaLed';

function FichaIntervencion ({intervencion}){
        const instrumentos = ['TR.IM.23/Calibre', 'TR.IM.77/UltraS']
        const elementos = ['TR.0023/Bulón', 'TR.124/Tornillo', 'TR.721/Valona', 'TR.021/Fieltro']
        const Hay_NC = ()=>{
                if (intervencion.NC ) {return 'SI'}
                return 'NO'}

        // Render JSX
        return (
        <Paper elevation = {3}>
                <Paper elevation = {1} sx={{mt:0, p:1.5, mb:1}}>
                        <Typography color={green[800]} sx={{fontSize: 18, ml:2}}>
                                FICHA DE LA INTERVENCIÓN: [{intervencion.id}]
                        </Typography>
                </Paper>
                <PanelDetalle>
                
                <Tarjeta33
                        texto1 = 'Nivel:'
                        valor1 = {intervencion.nivel}
                        texto2 = 'Lugar:'
                        valor2 = {intervencion.punto_red.codigo}
                        minWidth = {150}
                        />
                <Tarjeta33
                        texto1 = 'Inicio:'
                        valor1 = {intervencion.inicio}
                        texto2 = 'Fin:'
                        valor2 = {intervencion.fin}
                        minWidth = {120}
                        />
                <Tarjeta33
                        texto1 = 'Firmado:'
                        valor1 = {intervencion.firmado_por}
                        texto2 = 'Supervisado:'
                        valor2 = {intervencion.supervisado_por}
                        minWidth = {180}
                        />
                <Tarjeta22Links
                        texto1 = 'No Conformidad:'
                        valor1 = {Hay_NC()}
                        texto2 = 'Número:'
                        valor2 = {intervencion.NoConformidad}
                        minWidth = {160}
                        />
                <TarjetaListaLink
                        texto = {'Instr. medida:'}
                        lista = {instrumentos}
                        minWidth = {180}
                        />
                <TarjetaListaLink
                        texto = {'Elem. sustit.:'}
                        lista = {elementos}
                        minWidth = {180}
                        />
                <TarjetaLed
                        texto = {'Cerrada:'}
                        activa = {intervencion.cerrada}
                        minWidth = {85}
                        />
                <TarjetaLed
                        texto = {'Apta:'}
                        activa = {intervencion.apta}
                        minWidth = {85}
                        />
                </PanelDetalle>
        </Paper>
        )
}

const PanelDetalle = styled.div`
display:grid;
gap:2px;
grid-template-columns: 0fr 1fr 1fr 1fr 1fr 1fr 0fr 0fr;
`
export default FichaIntervencion;