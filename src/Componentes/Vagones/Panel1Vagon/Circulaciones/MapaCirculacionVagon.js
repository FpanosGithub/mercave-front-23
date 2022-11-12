import * as React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';



//------------//
// COMPONENTE //
//------------//
function MapaCirculacionVagon ({eventos, vagon, hoverEventos, onHoverEventos,}) {
    const ColorEvento = (tipo)=>
        {
            switch (tipo){
                case 'CIRC':
                    return 'gray';
                case 'START':
                    return 'green';
                case 'STOP':
                    return 'red';
                case 'ALARM_TEMP':
                    return 'red';
                case 'ALARM_ACEL':
                    return 'red';
                case 'INIT_MANT':
                    return 'black';
                case 'FIN_MANT':
                    return 'black';
                case 'CAMBIO':
                    return 'purple';
                default:
                    return 'violet';
            }
        }

    // Start / Stop y Hover
    let coord_start = [vagon.lat, vagon.lng]
    let id_start = -1
    let coord_stop = [vagon.lat, vagon.lng]
    let id_stop = -1
    let coord_hover = [0,0]
    let color_hover = ''
    let texto1_hover = ''
    let dia_hover = ''
    let hora_hover = ''


    eventos.forEach(evento => {
        if (evento.evento === 'START') {
            coord_start = [evento.lat, evento.lng]
            id_start = evento.id
        }
        if (evento.evento === 'STOP') {
            coord_stop = [evento.lat, evento.lng]
            id_stop = evento.id
        }
        if (hoverEventos === evento.id) {
            coord_hover = [evento.lat, evento.lng]
            color_hover = ColorEvento(evento.evento)
            texto1_hover = evento.evento
            dia_hover = evento.dt.slice(0,10)
            hora_hover = evento.dt.slice(11,19)
        }

    });

    return(
        <>
        <PanelMapa>
            <Map 
                provider={stamenToner}
                dprs={[1, 2]} 
                defaultHeight={400} 
                defaultCenter={[vagon.lat, vagon.lng]} 
                defaultZoom={6} 
                attribution = {false}
                metaWheelZoom = {true}>
                <ZoomControl />
                {eventos.map((evento,id)=>(
                    <Marker 
                        key = {id}
                        width={30} 
                        color = 'blue'
                        anchor={[evento.lat, evento.lng]} 
                        onMouseOver={() => onHoverEventos(evento.id)}
                        onClick = {() => onHoverEventos(-1)}
                        />))}
                    <Marker 
                        width={40} 
                        color = 'purple'
                        anchor={[vagon.lat, vagon.lng]} 
                        onClick = {() => onHoverEventos(-1)}
                        />
                    <Marker 
                        width={40} 
                        color = 'green'
                        anchor={coord_start}
                        onMouseOver={() => onHoverEventos(id_start)} 
                        />
                     <Marker 
                        width={40} 
                        color = 'red'
                        anchor={coord_stop}
                        onMouseOver={() => onHoverEventos(id_stop)}
                        />
                    <Marker 
                        width={40} 
                        color = {color_hover}
                        anchor={coord_hover}
                        />
                    <Overlay 
                        anchor={coord_hover}>
                        <Card sx={{ width:120, height:80}} onClick = {() => onHoverEventos(-1)}>
                            <CardContent>
                            <Typography sx={{ fontSize: 14, mt:-0.7, ml:-0.6, textAlign:'center' }} color="darkgreen" gutterBottom>
                                {texto1_hover}
                            </Typography>
                            <Typography sx={{ fontSize: 14, mt:-0.7, ml:-0.6, textAlign:'center' }} color="darkgreen" gutterBottom>
                                {dia_hover}
                            </Typography>
                            <Typography sx={{ fontSize: 14, mt:-0.7, ml:-0.6, textAlign:'center' }} color="darkgreen" gutterBottom>
                                {hora_hover}
                            </Typography>
                            </CardContent>
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

export default MapaCirculacionVagon