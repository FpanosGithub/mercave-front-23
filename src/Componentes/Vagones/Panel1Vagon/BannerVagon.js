import styled from 'styled-components';
import TarjetaVolver from '../../Varios/TarjetaVolver'
import Tarjeta22 from '../../Varios/Tarjeta22'
import Tarjeta12 from '../../Varios/Tarjeta12'
import Tarjeta23 from '../../Varios/Tarjeta23'
import TarjetaEjesVagon from '../../Varios/TarjetaEjesVagon'
import TarjetaCirculacionVagon from '../../Varios/TarjetaCirculacionVagon'
import Alarma from '../../Varios/Alarma'
import TarjetaImagen from '../../Varios/TarjetaImagen';

function BannerVagon ({vagon, onSeleccion}){
    return(
        <> <PanelBanner> 
                <TarjetaVolver
                        onVolver = {onSeleccion}
                        target = 'Vagones'
                />  
                <Tarjeta12
                        texto1 = 'Vagón:'
                        valor1 = {vagon.codigo}
                        texto2 = ''
                        valor2 = ''
                        minWidth= {160}/>
                <Alarma 
                        tipo= '' 
                        activa = {vagon.alarma}/>
                <TarjetaCirculacionVagon
                        estado = {vagon.estado_servicio}
                        transmitiendo = {vagon.transmitiendo}
                        velocidad = {vagon.vel}
                        minWidth= {120}/>
                <Tarjeta22     
                        texto1 = 'E.E.M.:'
                        valor1 = {vagon.EEM}
                        texto2 = 'Dias->Mto.:'
                        valor2 = {vagon.dias_proximo_mant}
                        minWidth= {120}/>
                <Tarjeta22
                        texto1 = 'km totales:'
                        valor1 = {Math.round(vagon.km_totales)}
                        texto2 = 'Km->Mto.:'
                        valor2 = {Math.round(vagon.km_proximo_mant)}
                        minWidth= {120}/>
                <TarjetaEjesVagon
                        ejes = {vagon.ejes}
                        onSeleccion = {onSeleccion}
                        minWidth= {140}/>
                <Tarjeta22
                        texto1 = 'Owner:'
                        valor1 = {vagon.owner}
                        texto2 = 'keeper:'
                        valor2 = {vagon.keeper}
                        minWidth= {150}/>
                <Tarjeta23
                        texto1 = 'Tipo:'
                        valor1 = {vagon.modelo}
                        texto2 = 'Matricula:'
                        valor2 = {vagon.matricula}
                        minWidth= {170}/>
                <TarjetaImagen
                        nombre = {`vagones/${vagon.imagen}`}
                        alt = ''
                        height = {150}
                        width = {300}/>
            </PanelBanner></> 
        )
    }

const PanelBanner = styled.div`
    display:grid;
    grid-template-columns: 0fr 0.5fr 0fr 0fr 1fr 1fr 0fr 1fr 1fr 0fr;
    gap:1px;
    width:100%;
    height:9.9rem;
`

export default BannerVagon
