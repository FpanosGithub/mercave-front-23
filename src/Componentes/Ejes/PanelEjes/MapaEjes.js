import * as React from 'react';
import styled from 'styled-components';
import { Map, ZoomControl, Marker } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';

const handleHover = (event, eje) => {
    console.log(event)
    console.log(eje)
}


function MapaEjes ({ejes}){
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
                {ejes.map((eje)=>(
                    <Marker 
                        width={30} 
                        anchor={[eje.lat, eje.lng]} 
                        onMouseOver={(event) => handleHover(event,eje.id)}/>
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

export default MapaEjes