import * as React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';

function MapaEjes ({ejes, hover, onHover, onSeleccion}){
    let punto_rojo = [0, 0]
    let texto = ''
    let id_eje = -1
    if (hover !== -1)
        {
        ejes.forEach((eje)=> {
            if (hover === eje.id) {
                punto_rojo = [eje.lat, eje.lng]
                texto = eje.codigo
                id_eje = eje.id
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
                defaultCenter={[40.4200, -3.5800]} 
                defaultZoom={6} 
                attribution = {false}
                metaWheelZoom = {true}>
                <ZoomControl />
                {ejes.map((eje)=>(
                    (hover !== eje.id)?
                    (<Marker 
                        key = {eje.id}
                        width={40} 
                        color = '#087314'
                        anchor={[eje.lat, eje.lng]} 
                        onMouseOver={() => onHover(eje.id)}
                        />)
                    :
                    ('')
                ))}
                    <Marker 
                            width={50} 
                            color = 'purple'
                            anchor={punto_rojo} 
                            onClick={()=> onSeleccion({type:'SELECCIONAR_EJE', payload:id_eje})}
                            />
                    <Overlay anchor={punto_rojo}>
                        <Card sx={{ width:80, height:40}}>
                            <CardContent>
                            <Typography sx={{ fontSize: 14, mt:-0.7, ml:-0.6 }} color="grey" gutterBottom>
                                {texto}
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

export default MapaEjes