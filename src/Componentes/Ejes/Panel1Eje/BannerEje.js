import styled from 'styled-components';
import TarjetaVolver from '../../Varios/TarjetaVolver'
import Tarjeta22 from '../../Varios/Tarjeta22'
import TarjetaEnVagon from '../../Varios/TarjetaEnVagon'
import Alarma from '../../Varios/Alarma'
import TarjetaOtrosEjes from '../../Varios/TarjetaOtrosEjes'
import TarjetaImagen from '../../Varios/TarjetaImagen'

function BannerEjes ({eje, ejes_mismo_vagon, onVolver}){
        
    return(
        <> <PanelBanner>   
                <TarjetaVolver
                        onVolver = {onVolver}
                        target = 'Ejes'
                />
                <Tarjeta22
                        texto1 = 'Eje:'
                        valor1 = {eje.codigo}
                        texto2 = 'Versión:'
                        valor2 = {eje.version}
                        minWidth= {140}/>
                <Alarma tipo= 'Temp.' activa = {eje.alarma_temp}/>
                <Alarma tipo= 'Aceler.' activa = {eje.alarma_acel}/>
                <Alarma tipo= 'Cambio' activa = {eje.alarma_cambio}/>
                <Alarma tipo= 'Mnto.' activa = {eje.alarma_mantenimiento}/>
                <TarjetaEnVagon
                        vagon = {eje.vagon}
                        bogie = {eje.bogie}
                        onVolver = {onVolver}
                        minWidth= {130}/>
                <TarjetaOtrosEjes
                        otros_ejes = {ejes_mismo_vagon}
                        vagon = {eje.vagon.codigo}
                        onVolver = {onVolver}/>
                <Tarjeta22
                        texto1 = 'Owner:'
                        valor1 = {eje.owner}
                        texto2 = 'Keeper:'
                        valor2 = {eje.keeper}
                        minWidth= {120}/>
                {/*<Tarjeta12
                        texto1 = 'Fabricante:'
                        valor1 = {eje.fabricante}
                        texto2 = 'Fecha Fab.:'
                        valor2 = {eje.fecha_fab}
                        minWidth= {130}/>      */}        
                <Tarjeta22
                        texto1 = 'E.E.M.:'
                        valor1 = {eje.EEM}
                        texto2 = 'Km->Mant:'
                        valor2 = {Math.round(eje.km_proximo_mant)}
                        minWidth= {120}/>
                <Tarjeta22
                        texto1 = 'Cambios:'
                        valor1 = {eje.num_cambios}
                        texto2 = 'Km:'
                        valor2 = {Math.round(eje.km_totales)}
                        minWidth= {130}/>
                <TarjetaImagen
                        nombre = {'ejes/eje.png'}
                        alt = ''
                        height = {150}
                        width = {300}/>
            </PanelBanner></> 
        )
    }

const PanelBanner = styled.div`
    display:grid;
    grid-template-columns: 0fr 0.5fr 0fr 0fr 0fr 0fr 0.5fr 0fr 1fr 1fr 1fr 0.6fr 0fr;
    gap:2px;
    width:100%;
    height:9.9rem;
`

export default BannerEjes
