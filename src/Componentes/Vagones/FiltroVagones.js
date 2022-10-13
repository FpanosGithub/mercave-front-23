import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SelectorKeeper from '../Varios/SelectorKeeper';
import SelectorOperador from '../Varios/SelectorOperador';
import SelectorMantenedor from '../Varios/SelectorMantenedor';

function ids_a_codigos_organizaciones (lista_ids, lista_actores){
    const codigos = lista_ids.map((id_filtro)=> {
        const id = id_filtro
        return lista_actores.find((element)=> {return(element.id === id)})
    })
    return codigos.map((actor)=> {return (actor.organizacion)})  
}
function codigos_organizaciones_a_ids (lista_codigos, lista_actores){
    const lista = lista_codigos.map((codigo)=> {
    return lista_actores.find((element)=> {return(element.organizacion === codigo)})
    })
    return lista.map((actor)=> {return (actor.id)})  
}

function FiltroVagones ({filtro, filtro_dispatcher, actores})
    {  
    
    const lista_keepers_filtro = ids_a_codigos_organizaciones (filtro.keepers, actores.keepers)
    const [keepers_seleccionados, setKeepers] = React.useState(lista_keepers_filtro)
    
    const lista_operadores_filtro = ids_a_codigos_organizaciones (filtro.operadores, actores.operadores)
    const [operadores_seleccionados, setOperadores] = React.useState(lista_operadores_filtro)

    const lista_mantenedores_filtro = ids_a_codigos_organizaciones (filtro.mantenedores, actores.mantenedores)
    const [mantenedores_seleccionados, setMantenedores] = React.useState(lista_mantenedores_filtro)

//  const lista_tipos_vagones_filtro = ids_a_codigos_elementos (filtro.tipos_vagones, actores.tipos_vagones)
//  const [tipos_vagones_seleccionados, setTiposVagones] = React.useState(lista_tipos_vagones_filtro)

    const [color_boton, setColorBoton] = React.useState('primary')

    function onClick (event) {
        const keepers = codigos_organizaciones_a_ids (keepers_seleccionados, actores.keepers)
        const operadores = codigos_organizaciones_a_ids (operadores_seleccionados, actores.operadores)
        const mantenedores = codigos_organizaciones_a_ids (mantenedores_seleccionados, actores.mantenedores)
//      const tipos_vagones = codigos_elementos_a_ids (tipos_vagones_seleccionados, actores.tipos_vagones)
        filtro_dispatcher ({
                    keepers: keepers, 
                    operadores: operadores,  
                    mantenedores: mantenedores,
                
                })
        setColorBoton('primary')
    }

    return (
        <>
        <Panel>
            <Paper elevation = {3}>
                <Typography variant="h5" component="h2" sx = {{ml:2, mr:4, mt:2.5}}>
                    Vagones
                </Typography>
            </Paper>
            <Paper elevation = {1} sx = {{ml:0.1, mt:0, mr:0.1, mb:0}}>
                <PanelFiltro>
                    <Typography variant="h6" component="h2" sx = {{ml:2, mr:2, mt:2.5,}}>
                        Filtro:
                    </Typography>
                    <SelectorKeeper
                        keepers = {actores.keepers.map((v)=>{return v.organizacion})}
                        keepers_seleccionados = {keepers_seleccionados}
                        setKeepers = {setKeepers}
                        setColorBoton = {setColorBoton}
                        minWidth = {300}
                        />
                    <SelectorOperador
                        operadores = {actores.operadores.map((v)=>{return v.organizacion})}
                        operadores_seleccionados = {operadores_seleccionados}
                        setOperadores = {setOperadores}
                        setColorBoton = {setColorBoton}
                        minWidth = {300}
                        />
                    <SelectorMantenedor
                        mantenedores = {actores.mantenedores.map((v)=>{return v.organizacion})}
                        mantenedores_seleccionados = {mantenedores_seleccionados}
                        setMantenedores = {setMantenedores}
                        setColorBoton = {setColorBoton}
                        minWidth = {300}
                        />
                    <Button size="medium" variant="outlined" onClick = {onClick} color = {color_boton} sx ={{mt:1.1, ml:1, mb:1, pl:2, pr:2, color:{color_boton}, height:55, width:100}}>Aplicar</Button>
                </PanelFiltro>
            </Paper>
        </Panel>
        </>
    )
    }

const Panel = styled.div`
    display:grid;
    grid-template-columns: 0fr 1fr;
    gap:1px;
    padding-left:1px;
`
const PanelFiltro = styled.div`
    display:grid;
    grid-template-columns: 0fr 0fr 0fr 0fr 0fr;
    gap:1px;
    padding-left:1px;
`
export default FiltroVagones;