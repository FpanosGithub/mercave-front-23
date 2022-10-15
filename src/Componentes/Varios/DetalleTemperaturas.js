import styled from 'styled-components';
import TarjetaTemperatura from './TarjetaTemperatura';

export default function DetalleTemperaturas({tempa_max, tempa_min, tempb_max, tempb_min}) {
        return (
        <>
        <PanelDetalle>
                <TarjetaTemperatura
                                texto = 'Máx. A'
                                temperatura = {tempa_max}
                                minWidth= {50}/>
                <TarjetaTemperatura
                                texto = 'mín. A'
                                temperatura = {tempa_min}
                                minWidth= {50}/>
                <TarjetaTemperatura
                                texto = 'Máx. B'
                                temperatura = {tempb_max}
                                minWidth= {50}/>
                <TarjetaTemperatura
                                texto = 'mín. B'
                                temperatura = {tempb_min}
                                minWidth= {50}/>
        </PanelDetalle>
    </>
)
}

const PanelDetalle = styled.div`
display:grid;
height:105px;
grid-template-columns: 1fr 1fr 1fr 1fr;
`