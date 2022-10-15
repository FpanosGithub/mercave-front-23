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
function MapaCirculaciones ({ 
                        hoverCirculaciones, 
                        onHoverCirculaciones,
                        circulaciones,  
                        ejeSeleccionado}){

        let punto_violeta = [0, 0]
        let evento_violeta = ''
        let dt_violeta = ''
        let color = 'violet'
        if (hoverCirculaciones !== -1)
            {
            circulaciones.forEach((circulacion)=> {
                if (hoverCirculaciones === circulacion.id) {
                    punto_violeta = [circulacion.lat, circulacion.lng]
                    evento_violeta = circulacion.evento
                    dt_violeta = circulacion.dt
                    switch (evento_violeta){
                        case 'CIRC':
                            color = 'gray';
                            break
                        case 'START':
                            color = 'green';
                            break
                        case 'STOP':
                            color = 'red';
                            break
                        case 'ALARM_TEMP':
                            color = 'red';
                            break
                        case 'ALARM_ACEL':
                            color = 'red';
                            break
                        case 'INIT_MANT':
                            color = 'black';
                            break
                        case 'FIN_MANT':
                            color = 'black';
                            break
                        case 'CAMBIO':
                            color = 'purple';
                            break
                        default:
                            color = 'violet';
                    }
                        
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
                defaultCenter={[ejeSeleccionado.lat, ejeSeleccionado.lng]} 
                defaultZoom={6} 
                attribution = {false}
                metaWheelZoom = {true}>
                <ZoomControl />
                <Marker 
                    width={40} 
                    color = 'red'
                    anchor={[ejeSeleccionado.lat, ejeSeleccionado.lng]} 
                    />)
                {circulaciones.map((circulacion)=>(
                    (hoverCirculaciones !== circulacion.id)?
                    (<Marker 
                        key = {circulacion.id}
                        width={30} 
                        color = 'blue'
                        anchor={[circulacion.lat, circulacion.lng]} 
                        onMouseOver={() => onHoverCirculaciones(circulacion.id)}
                        />)
                    :
                    ('')
                    ))}
                    <Marker 
                            width={30} 
                            color = {color}
                            anchor={punto_violeta} 
                            />
                    <Overlay anchor={punto_violeta}>
                        <Card sx={{ width:140, height:55}}>
                            <CardContent>
                            <Typography sx={{ fontSize: 14, mt:-0.7, ml:-0.6, textAlign:'center' }} color={color} gutterBottom>
                                {evento_violeta}
                            </Typography>
                            <Typography sx={{ fontSize: 10, mt:-0.7, ml:-0.6, textAlign:'center' }} color={color} gutterBottom>
                                {dt_violeta}
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

export default MapaCirculaciones