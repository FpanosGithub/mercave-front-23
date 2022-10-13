import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Tarjeta22 from './Tarjeta22';
import Alarmasb from './Alarmasb'

function DetalleCambio ({evento}){
        const fecha_larga = evento.inicio
        let fecha_corta = ''
        let hora = ''
        if (fecha_larga) {
                fecha_corta = fecha_larga.slice(0,10)
                hora = fecha_larga.slice(11,19)}
        // Render JSX
        return (
                <> 
                <Paper elevation = {3} sx={{height:175, pt:2, pl:1, pb:0, pr:1, mt:0.3}}>
                        <Stack direction="row" spacing={1}>
                        <Tarjeta22
                                texto1 = 'Cambio:'
                                valor1 = {evento.num_cambio_eje}
                                minWidth= {80}/>
                        <Tarjeta22
                                texto1 = 'Fecha:'
                                valor1 = {fecha_corta}
                                texto2 = 'hora:'
                                valor2 = {hora}
                                minWidth= {150}/>
                        <Tarjeta22
                                texto1 = 'Cambiador:'
                                valor1 = {evento.cambiador}
                                texto2 = 'Sentido:'
                                valor2 = {evento.sentido}
                                minWidth= {200}/>
                        <Tarjeta22
                                texto2 = 'Velocidad:'
                                valor2 = {`${evento.V} m/s`}
                                texto1= 'Peso:'
                                valor1 = {`${evento.FV} kN`}
                                minWidth= {150}/>
                        <Alarmasb tipo= '' activa = {evento.alarma}/>
                        </Stack>
                </Paper>
                </>)
}

export default DetalleCambio;