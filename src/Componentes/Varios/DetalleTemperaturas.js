import styled from 'styled-components';
import TarjetaTemperatura from './TarjetaTemperatura';

export default function DetalleTemperaturas({tempa_max, tempa_med, tempa_min, tempb_max, tempb_med, tempb_min}) {
        return (
        <>
        <PanelDetalle>
                <TarjetaTemperatura
                                texto = 'Máx. A'
                                temperatura = {tempa_max}
                                minWidth= {70}/>
                <TarjetaTemperatura
                                texto = 'med A'
                                temperatura = {tempa_med}
                                minWidth= {70}/>
                <TarjetaTemperatura
                                texto = 'mín. A'
                                temperatura = {tempa_min}
                                minWidth= {70}/>
                <TarjetaTemperatura
                                texto = 'Máx. B'
                                temperatura = {tempb_max}
                                minWidth= {70}/>
                <TarjetaTemperatura
                                texto = 'med B'
                                temperatura = {tempb_med}
                                minWidth= {70}/>
                <TarjetaTemperatura
                                texto = 'mín. B'
                                temperatura = {tempb_min}
                                minWidth= {70}/>
        </PanelDetalle>
    </>
)
}

const PanelDetalle = styled.div`
display:grid;
height:105px;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`