import * as React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';

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

//------------//
// COMPONENTE //
//------------//
function MapaCirculacion ({
    eventos,
    eje,
    hoverEventos,
    onHoverEventos,})
    {

    return(
        <>
        <PanelMapa>
            <Map 
                provider={stamenToner}
                dprs={[1, 2]} 
                defaultHeight={400} 
                defaultCenter={[40.4200, -3.5800]} 
                defaultZoom={6} 
                attribution = {false}
                metaWheelZoom = {true}>
                <ZoomControl />
                <Marker 
                    width={40} 
                    color = 'red'
                    anchor={[eje.lat, eje.lng]} 
                    />)
                {eventos.map((evento)=>(
                    (hoverEventos !== evento.id)?
                    (<Marker 
                        key = {evento.id}
                        width={30} 
                        color = {()=>ColorEvento(evento.evento)}
                        anchor={[evento.lat, evento.lng]} 
                        onMouseOver={() => onHoverEventos(evento.id)}
                        />)
                    :
                    (<>
                    <Marker 
                        key = {evento.id}
                        width={30} 
                        color = {()=>ColorEvento(evento.evento)}
                        anchor={[evento.lat, evento.lng]} 
                        onMouseOver={() => onHoverEventos(evento.id)}/>
                    <Overlay anchor={[evento.lat, evento.lng]}>
                        <Card sx={{ width:140, height:55}}>
                            <CardContent>
                            <Typography sx={{ fontSize: 14, mt:-0.7, ml:-0.6, textAlign:'center' }} color={()=>ColorEvento(evento.evento)} gutterBottom>
                                {evento.evento}
                            </Typography>
                            <Typography sx={{ fontSize: 10, mt:-0.7, ml:-0.6, textAlign:'center' }} color={()=>ColorEvento(evento.evento)} gutterBottom>
                                {evento.dt}
                            </Typography>
                            </CardContent>
                        </Card>
                    </Overlay>
                    </>)
                    ))}      
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

export default MapaCirculacion