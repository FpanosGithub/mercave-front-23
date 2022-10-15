import * as React from 'react';
import styled from 'styled-components';
import LeyendaMapa from './LeyendaMapa';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';

//------------//
// COMPONENTE //
//------------//
function MapaVagones ({ hoverVagones, 
                        onHoverVagones, 
                        vagones, 
                        onSeleccionVagon, 
                        hoverCirculaciones, 
                        onHoverCirculaciones,
                        circulaciones, 
                        ver_todos, 
                        setVerTodos, 
                        vagonSeleccionado, 
                        rango, 
                        setRango}){

    // Si está seleccionada la opción ver_todos => mostramos la situación de todos los vagones
    if (ver_todos) {
        let punto_rojo = [0, 0]
        let texto_rojo = ''
        let id_vagon_rojo = -1
        if (hoverVagones !== -1)
        {
        vagones.forEach((vagon)=> {
            if (hoverVagones === vagon.id) {
                punto_rojo = [vagon.lat, vagon.lng]
                texto_rojo = vagon.codigo
                id_vagon_rojo = vagon.id
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
                {vagones.map((vagon)=>(
                    (hoverVagones !== vagon.id)?
                    (<Marker 
                        key = {vagon.id}
                        width={40} 
                        color = '#087314'
                        anchor={[vagon.lat, vagon.lng]} 
                        onMouseOver={() => onHoverVagones(vagon.id)}
                        />)
                    :
                    ('')
                    ))}
                    <Marker 
                            width={50} 
                            color = {'#de071c'}
                            anchor={punto_rojo} 
                            onClick={()=> onSeleccionVagon(id_vagon_rojo)}
                            />
                    <Overlay anchor={punto_rojo}>
                        <Card sx={{ width:100, height:40}}>
                            <CardContent>
                            <Typography sx={{ fontSize: 14, mt:-0.7, ml:-0.6 }} color="red" gutterBottom>
                                {texto_rojo}
                            </Typography>
                            </CardContent>
                        </Card>
                    </Overlay>    
            </Map>
            <LeyendaMapa
                    ver_todos = {ver_todos}
                    onSeleccion = {setVerTodos}
                    onHoverCirculaciones = {onHoverCirculaciones}
                    codigo_vagon = {vagonSeleccionado.codigo}
                    loading = {circulaciones.loading}
                    error = {circulaciones.error}
                    rango = {rango}
                    setRango ={setRango}
                    />
            </PanelMapa>
            </>
        );
    }
    // Si NO está seleccionada la opción ver_todos => mostramos las circulaciones del vagón seleccionado
    else {
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
                defaultCenter={[vagonSeleccionado.lat, vagonSeleccionado.lng]} 
                defaultZoom={6} 
                attribution = {false}
                metaWheelZoom = {true}>
                <ZoomControl />
                <Marker 
                    width={40} 
                    color = 'red'
                    anchor={[vagonSeleccionado.lat, vagonSeleccionado.lng]} 
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
            <LeyendaMapa
                ver_todos = {ver_todos}
                onSeleccion = {setVerTodos}
                onHoverCirculaciones = {onHoverCirculaciones}
                codigo_vagon = {vagonSeleccionado.codigo}
                loading = {circulaciones.loading}
                error = {circulaciones.error}
                rango = {rango}
                setRango ={setRango}
                />
        </PanelMapa>
        </>
    );
    }
}

const PanelMapa = styled.div`
    display:grid;
    grid-template-columns: 1fr 0fr;
    background-color: black;
    gap:2px;
    align-items: center;
`

export default MapaVagones