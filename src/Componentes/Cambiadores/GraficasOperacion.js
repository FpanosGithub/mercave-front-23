import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import PrepararDatos from '../../Utilidades/PrepararDatosCambiosEje';
import CabeceraGrafica from '../Varios/CabeceraGrafica';
import HistogramaCambios from '../Varios/HistogramaCambios';

function GraficasOperacion ({cambios}){ 
        const datos = PrepararDatos (cambios)
        return (
        <Panel>
                <PanelDescerrojamiento>
                        <CabeceraGrafica
                                titulo = 'Descerrojamiento.'
                                subtitulo = 'Distrib. F. Máx. - kN -'
                                height = {65}/>
                        <HistogramaCambios
                                datos = {datos.descerrojamiento} 
                                height = {230} />
                        </PanelDescerrojamiento>

                <PanelDescerrojamiento>
                        <CabeceraGrafica
                                titulo = 'Cambio'
                                subtitulo = 'Distrib. F. Máx. - kN -'
                                height = {65}/>
                        <HistogramaCambios
                                datos = {datos.cambio} 
                                height = {230} />
                        </PanelDescerrojamiento>

                <PanelDescerrojamiento>
                        <CabeceraGrafica
                                titulo = 'Encerrojamiento.'
                                subtitulo = 'Distrib. F. min. - kN -'
                                height = {65}/>
                        <HistogramaCambios
                                datos = {datos.encerrojamiento} 
                                height = {230} />
                        </PanelDescerrojamiento>

        </Panel>
        )
}

const Panel = styled.div`
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:2px;
`
const PanelDescerrojamiento = styled.div`
        display:grid;
        grid-template-rows: 0fr 0fr;
        gap:1px;
`
export default GraficasOperacion;