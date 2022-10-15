import styled from 'styled-components';
import Tarjeta10 from './Tarjeta10';
import Alarmasb from './Alarmasb';

export default function DetalleCirculacion({evento}) {
        const fecha_larga = evento.dt
        let fecha_corta = ''
        let hora = ''
        try {   fecha_corta = fecha_larga.slice(0,10)
                hora = fecha_larga.slice(11,19)}
        catch {}
        return (
        <>
        <PanelDetalle>
                <Tarjeta10
                                texto1 = 'Num.:'
                                valor1 = {evento.id}
                                minWidth= {30}/>
                <Tarjeta10
                                texto1 = 'Fecha:'
                                valor1 = {fecha_corta}
                                minWidth= {60}/>
                <Tarjeta10
                                texto1 = 'Hora:'
                                valor1 = {hora}
                                minWidth= {60}/>
                <Tarjeta10
                                texto1 = 'Tipo:'
                                valor1 = {evento.evento}
                                minWidth= {60}/>
                <Tarjeta10
                                texto1 = 'Velocidad:'
                                valor1 = {evento.vel}
                                unidades = 'm/s'
                                minWidth= {60}/>
                <Tarjeta10
                                texto1 = 'Vagon:'
                                valor1 = {evento.en_vagon}
                                minWidth= {60}/>
                <Alarmasb tipo= '' activa = {evento.alarma}/>
        </PanelDetalle>
    </>
)
}

const PanelDetalle = styled.div`
display:grid;
gap:1px;
padding-top:1px;
height:105px;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 0fr;
`