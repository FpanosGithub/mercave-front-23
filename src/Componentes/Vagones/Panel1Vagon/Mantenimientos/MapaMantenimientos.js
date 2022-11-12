import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';

//------------//
// COMPONENTE //
//------------//
function MapaMantenimientos ({ intervenciones, seleccion, onSeleccion}){
    
    return(
    <>
    <Map 
        provider={stamenToner}
        dprs={[1, 2]} 
        defaultHeight={400} 
        defaultCenter={[40.4200, -3.5800]} 
        defaultZoom={6} 
        attribution = {false}
        metaWheelZoom = {true}>
        <ZoomControl />
        {intervenciones.map((intervencion)=>(
            (seleccion !== intervencion.id)?
            (<Marker 
                key = {intervencion.id}
                width={30} 
                color = 'blue'
                anchor={[intervencion.punto_red.lat, intervencion.punto_red.lng]} 
                onMouseOver={() => onSeleccion(intervencion.id)} />)
            :
            ('')
        ))}         
    </Map>
    </>
    );
}

export default MapaMantenimientos