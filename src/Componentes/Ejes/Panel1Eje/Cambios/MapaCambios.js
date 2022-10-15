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
function MapaCambios ({ 
                        hoverCambios, 
                        onHoverCambios,
                        cambios,  
                        ejeSeleccionado}){
    let punto_violeta = [0, 0]
    let sentido_violeta = ''
    let num_violeta = ''
    let dt_violeta = ''
    let color = 'purple'
    if (hoverCambios !== -1)
        {
        cambios.forEach((cambio)=> {
        if (hoverCambios === cambio.id) {
            punto_violeta = [cambio.cambiador.lat, cambio.cambiador.lng]
            sentido_violeta = cambio.sentido
            num_violeta = cambio.num_cambio_eje
            dt_violeta = cambio.inicio.slice(0,10)
            if (cambio.alarma) {color = 'red'}        
            }
        })
    }
    return(
    <>
    <Map 
        provider={stamenToner}
        dprs={[1, 2]} 
        defaultHeight={400} 
        defaultCenter={[ejeSeleccionado.lat, ejeSeleccionado.lng]} 
        defaultZoom={6} 
        attribution = {false}
        metaWheelZoom = {true}>
        <ZoomControl />
        <Marker 
            width={40} 
            color = 'red'
            anchor={[ejeSeleccionado.lat, ejeSeleccionado.lng]} />
        {cambios.map((cambio)=>(
            (hoverCambios !== cambios.id)?
            (<Marker 
                key = {cambios.id}
                width={30} 
                color = 'blue'
                anchor={[cambio.cambiador.lat, cambio.cambiador.lng]} 
                onMouseOver={() => onHoverCambios(cambio.id)} />)
            :
            ('')
        ))}
        <Marker 
            width={30} 
            color = {color}
            anchor={punto_violeta} />
        <Overlay anchor={punto_violeta}>
            <Card sx={{ width:140, height:155}}>
            <CardContent>
                <Typography sx={{ fontSize: 14, mt:-0.7, ml:-0.6, textAlign:'center' }} color={color} gutterBottom>
                    {num_violeta}
                </Typography>
                <Typography sx={{ fontSize: 10, mt:-0.7, ml:-0.6, textAlign:'center' }} color={color} gutterBottom>
                    {dt_violeta}
                </Typography>
                <Typography sx={{ fontSize: 10, mt:-0.7, ml:-0.6, textAlign:'center' }} color={color} gutterBottom>
                    {sentido_violeta}
                </Typography>
            </CardContent>
            </Card>
        </Overlay>          
    </Map>
    </>
    );
}

export default MapaCambios