import styled from 'styled-components';
//import Tarjeta12 from '../Varios/Tarjeta12'
import Tarjeta22 from '../Varios/Tarjeta22'
import Tarjeta23 from '../Varios/Tarjeta23'
import TarjetaEjesVagon from '../Varios/TarjetaEjesVagon'
import TarjetaCirculacionVagon from '../Varios/TarjetaCirculacionVagon'
import Alarma from '../Varios/Alarma'
import TarjetaImagen from '../Varios/TarjetaImagen';

function FichaVagon ({vagon, onSeleccion}){
    return(
        <> <PanelBanner>   
                <Tarjeta22
                        texto1 = 'Vagón:'
                        valor1 = {vagon.codigo}
                        texto2 = ''
                        valor2 = ''
                        minWidth= {150}/>
                <Tarjeta23
                        texto1 = 'Tipo:'
                        valor1 = {vagon.modelo}
                        texto2 = 'Matricula:'
                        valor2 = {vagon.matricula}
                        minWidth= {150}/>
                <TarjetaEjesVagon
                        ejes = {vagon.ejes}
                        onSeleccion = {onSeleccion}
                        minWidth= {120}/>
                <TarjetaImagen
                        nombre = {vagon.imagen}
                        alt = ''
                        height = {180}
                        width = {300}/>
                <Tarjeta22
                        texto1 = 'Propietario:'
                        valor1 = {vagon.keeper}
                        texto2 = 'Operador:'
                        valor2 = {vagon.operador}
                        minWidth= {150}/>
                <Tarjeta22
                        texto1 = 'Fabricante:'
                        valor1 = {vagon.fabricante}
                        texto2 = 'Fecha Fab.:'
                        valor2 = {vagon.fecha_fab}
                        minWidth= {150}/>
                <Tarjeta22     
                        texto1 = 'Mantenedor:'
                        valor1 = {vagon.mantenedor}
                        texto2 = 'Fecha Mant:'
                        valor2 = {vagon.ultimo_mant}
                        minWidth= {150}/>
                <Tarjeta22
                        texto1 = 'km semana:'
                        valor1 = {vagon.km_semana}
                        texto2 = 'Ayer:'
                        valor2 = {vagon.km_ayer}
                        minWidth= {90}/>
                <TarjetaCirculacionVagon
                        estado = {vagon.parado}
                        velocidad = {vagon.vel}
                        minWidth= {100}/>
                <Alarma 
                        tipo= '' 
                        activa = {vagon.alarma}/>
            </PanelBanner></> 
        )
    }

const PanelBanner = styled.div`
    display:grid;
    grid-template-columns: 0.5fr 1fr 0fr 0fr 1fr 1fr 1fr 1fr 1fr 0fr;
    gap:1px;
    width:100%;
    height:11rem;
`

export default FichaVagon
