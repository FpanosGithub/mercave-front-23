import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SelectorElementos from '../Varios/SelectorElementos';

function ids_a_codigos (lista_ids, lista_cambiadores){
    const codigos = lista_ids.map((id_filtro)=> {
        const id = id_filtro
        return lista_cambiadores.find((element)=> {return(element.id === id)})
    })
    return codigos.map((cambiador)=> {return (cambiador.codigo)})  
}
function codigos_a_ids (lista_codigos, lista_actores){
    const lista = lista_codigos.map((codigo)=> {
    return lista_actores.find((element)=> {return(element.organizacion === codigo)})
    })
    return lista.map((actor)=> {return (actor.id)})  
}

function FiltroCambiadores ({filtro, filtro_dispatcher, actores})
    {  

    const lista_cambiadores_filtro = ids_a_codigos (filtro.cambiadores, actores.cambiadores)
    const [cambiadores_seleccionados, setCambiadores] = React.useState(lista_cambiadores_filtro)

    const [color_boton, setColorBoton] = React.useState('primary')

    function onClick (event) {
        const cambiadores = codigos_a_ids (cambiadores_seleccionados, actores.cambiadores)
        filtro_dispatcher ({cambiadores: cambiadores})
        setColorBoton('primary')
    }


    return (
        <>
        <Panel>
            <Paper elevation = {1} sx = {{ml:0.1, mt:0, mr:0.1, mb:0, pt:2}}>
                <PanelFiltro>
                    <Typography variant="h6" component="h2" style={{color:"#255e24"}} sx = {{ml:2, mr:3, mt:1.2}}>
                        Filtro:
                    </Typography>
                    <SelectorElementos
                        tipo_elementos = 'Cambiadores'
                        elementos_lista = {actores.cambiadores.map((v)=>{return v.codigo})}
                        elementos_seleccionados = {cambiadores_seleccionados}
                        setElementosSeleccionados = {setCambiadores}
                        setColorBoton = {setColorBoton}
                        minWidth = {240}
                        />
                    <Button size="medium" variant="outlined" onClick = {onClick} color = {color_boton} sx ={{mt:0, mb:1, pl:2, pr:2, color:{color_boton}, height:55, width:100}}>Aplicar</Button>
                </PanelFiltro>
            </Paper>
        </Panel>
        </>
    )
    }

const Panel = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    gap:1px;
    padding-left:1px;
`
const PanelFiltro = styled.div`
    display:grid;
    grid-template-columns: 0fr 0fr 0fr;
    gap:1px;
    padding-left:1px;
`
export default FiltroCambiadores;