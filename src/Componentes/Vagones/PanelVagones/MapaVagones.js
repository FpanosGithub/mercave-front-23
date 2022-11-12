import * as React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TarjetaImagen from '../../Varios/TarjetaImagen';
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';
import { pink, green, grey } from '@mui/material/colors';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';
import WifiIcon from '@mui/icons-material/Wifi';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import CloseIcon from '@mui/icons-material/Close';
import BuildIcon from '@mui/icons-material/Build';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';

function MapaVagones ({vagones, hover, onHover, onSeleccion}){
    let punto_purple = [0, 0]
    let codigo = ''
    let imagen = ''
    let keeper = ''
    let estado = 'CIRCULANDO'
    let transmitiendo = false
    let alarma = false
    let lw = 0
    let id_vagon = -1
    if (hover !== -1)
        {
        vagones.forEach((vagon)=> {
            if (hover === vagon.id) {
                punto_purple = [vagon.lat, vagon.lng]
                codigo = vagon.codigo
                imagen = vagon.imagen
                keeper = vagon.keeper
                if (vagon.estado_servicio === 'BAJA'){estado = 'baja'}
                else if (vagon.estado_servicio  === 'MANTENIMIENTO') {estado = 'mantenimiento'}
                else if (vagon.estado_servicio  === 'PARADO'){estado = 'parado'}
                if (vagon.transmitiendo){transmitiendo = true}
                if (vagon.alarma){alarma = true}
                lw = vagon.km_totales/1000
                id_vagon = vagon.id
            }
            })
        }
    return(
        <>
        <PanelMapa>
            <Map 
                provider={stamenToner}
                dprs={[1, 2]} 
                defaultHeight={400} 
                defaultCenter={[39.4200, -3.5800]} 
                defaultZoom={6} 
                attribution = {false}
                metaWheelZoom = {true}>
                <ZoomControl />
                {vagones.map((vagon)=>(
                    (hover !== vagon.id)?
                    (<Marker 
                        key = {vagon.id}
                        width={40} 
                        color = '#087314'
                        anchor={[vagon.lat, vagon.lng]} 
                        onMouseOver={() => onHover(vagon.id)}
                        />)
                    :
                    ('')
                ))}
                    <Marker 
                            width={50} 
                            color = 'purple'
                            anchor={punto_purple} 
                            onClick={()=> onSeleccion({type:'SELECCIONAR_VAGON', payload:id_vagon})}
                            />
                    <Overlay anchor={punto_purple}>
                        <Card sx={{ width:162, height:190, p:0.5}} onClick = {() => onHover(-1)}>
                        <Box sx={{ border:1, borderColor:'green', height:190}}>
                            <Card sx={{ width:160, height:100}}>
                            <TarjetaImagen
                                    nombre = {`vagones/${imagen}`}
                                    alt = ''
                                    height = {90}
                                    width = {150}/>
                            </Card>
                            <Card sx={{ width:160, height:51, mt:0.5}}>
                                <Typography sx={{ fontSize: 14, mt:0, textAlign: 'center' }} color="grey" gutterBottom>
                                {codigo}
                                </Typography>
                                <Typography sx={{ fontSize: 14, mt:0, textAlign: 'center' }} color="grey" gutterBottom>
                                    {keeper}
                                </Typography>
                            </Card>
                            <Card sx={{ width:160, height:29, mt:0.5}}>
                            <PanelIconos>
                                {(transmitiendo)? 
                                    (<WifiIcon fontSize='small' sx={{ color: green[500], mt:0.2 }}/>)
                                :   (<WifiOffIcon fontSize='small' sx={{ color: pink[500], mt:0.2  }}/>)}
                                {(estado === 'baja')? 
                                    (<CloseIcon fontSize='small' sx={{ color: grey[500], mt:0.2}}/>)
                                :   ((estado === 'mantenimiento') ? 
                                        (<BuildIcon fontSize='small' sx={{ color: grey[500], mt:0.2 }}/>)
                                    :   ((estado === 'parado') ? 
                                            (<PauseCircleOutlinedIcon fontSize='small' sx={{ color: pink[500], mt:0.2 }}/>)
                                        :   (<CachedOutlinedIcon fontSize='small' sx={{ color: green[500], mt:0.2  }}/>)
                                ))}
                                {(alarma)? 
                                    (<LensBlurOutlinedIcon fontSize='small' sx={{ color: pink[500], mt:0.2, mr:1 }}/>)
                                :   (<LensBlurOutlinedIcon fontSize='small' sx={{ color: green[500], mt:0.2, mr:1  }}/>)}
                                <Typography sx={{ fontSize: 14, mt:0.2, textAlign: 'center' }} color="grey" gutterBottom>
                                    {Math.round(lw)} Km lw
                                </Typography>
                            </PanelIconos>
                            </Card>
                        </Box>
                        </Card>
                    </Overlay>    
            </Map>
        </PanelMapa>
        </>
    );
}

const PanelMapa = styled.div`
    display:grid;
    align-items: center;
    background-color: black;
`
const PanelIconos = styled.div`
    display:grid;
    grid-template-columns: 0fr 0fr 0fr 1fr;
`

export default MapaVagones