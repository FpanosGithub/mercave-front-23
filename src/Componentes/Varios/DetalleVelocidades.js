import styled from 'styled-components';
import Tarjeta10 from './Tarjeta10';
import TarjetaEstadoCirculacion from './TarjetaEstadoCirculacion';

export default function DetalleVelocidades({estado_eje, vel_eje, vel_maxima}) {
        return (
        <>
        <PanelDetalle>
                <TarjetaEstadoCirculacion
                                estado = {estado_eje}
                                minWidth= {120}/>
                <Tarjeta10
                                texto1 = 'Velocidad Act.'
                                valor1 = {vel_eje}
                                unidades = 'm/s'
                                minWidth= {120}/>
                <Tarjeta10
                                texto1 = 'Velocidad Máx.'
                                valor1 = {vel_maxima}
                                unidades = 'm/s'
                                minWidth= {120}/>
        </PanelDetalle>
    </>
)
}

const PanelDetalle = styled.div`
display:grid;
gap:3px;
height:105px;
grid-template-columns: 1fr 1fr 1fr;
`