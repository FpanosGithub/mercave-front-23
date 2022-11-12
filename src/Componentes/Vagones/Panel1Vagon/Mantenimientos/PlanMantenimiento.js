import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tarjeta22 from '../../../Varios/Tarjeta22';
import Tarjeta22Links from '../../../Varios/Tarjeta22Links';
import Tarjeta12Border from '../../../Varios/Tarjeta12Border';
import TarjetaListaLink from '../../../Varios/TarjetaListaLink';

import { green } from '@mui/material/colors';

function PlanMantenimiento ({pm, niveles, km, fecha}){
        if (!fecha) {
                const hoy = new Date()
                const nueva_fecha = new Date(hoy.setDate(hoy.getDate() + 365)).toISOString()
                fecha = nueva_fecha
        } 
        fecha = fecha.slice(0,10)
        let lista_niveles = []
        niveles.map((nivel, i)=>{return (lista_niveles[i] = ('N' + nivel.nivel + ': ' + nivel.codigo))})

        // Render JSX
        return (
        <Paper elevation = {3}>
                <Paper elevation = {1} sx={{mt:0, p:1.5, mb:1}}>
                        <Typography color={green[800]} sx={{fontSize: 18, ml:2}}>
                                PLAN DE MANTENIMIENTO:
                        </Typography>
                </Paper>
                <PanelDetalle>
                
                <Tarjeta22
                        texto1 = 'Código:'
                        valor1 = {pm.codigo}
                        minWidth = {180}
                        />
                <Tarjeta22
                        texto1 = 'Revisión:'
                        valor1 = {pm.revision}
                        texto2 = 'Fecha:'
                        valor2 = {pm.fecha_revisión}
                        minWidth = {130}
                        />
                <Tarjeta22
                        texto1 = 'Elaborado por:'
                        valor1 = {pm.elaborado_por}
                        texto2 = 'Revisado por:'
                        valor2 = {pm.revisado_por}
                        minWidth = {170}
                        />
                <Tarjeta22
                        texto1 = 'Material:'
                        valor1 = {pm.material}
                        texto2 = 'Serie:'
                        valor2 = {pm.serie}
                        minWidth = {120}
                        />
                <Tarjeta22Links
                        texto1 = 'Normativa:'
                        valor1 = {pm.normativa}
                        texto2 = 'documento:'
                        valor2 = {pm.documento}
                        minWidth = {190}
                        />
                <TarjetaListaLink
                        texto = {'Niveles:'}
                        lista = {lista_niveles}
                        minWidth = {150}
                        />
                <Tarjeta12Border
                        texto1 = 'Próximo:'
                        valor1 = {'IS1'}
                        texto2 = ' - '
                        valor2 = {'-'}
                        minWidth = {110}
                        color = 'orange'
                        />
                <Tarjeta12Border
                        texto1 = 'Km -> mto:'
                        valor1 = {Math.round(km)}
                        texto2 = 'Fecha -> mto:'
                        valor2 = {fecha}
                        minWidth = {140}
                        color = 'orange'
                        />

                </PanelDetalle>
        </Paper>
        )
}

const PanelDetalle = styled.div`
display:grid;
gap:2px;
grid-template-columns: 0fr 0fr 1fr 1fr 1fr 0fr 0fr 1fr;
`
export default PlanMantenimiento;