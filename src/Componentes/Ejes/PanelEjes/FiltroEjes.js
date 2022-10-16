import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SelectorOperador from '../../Varios/SelectorOperador';
import SelectorFabricante from '../../Varios/SelectorFabricante';
import SelectorVersionEjes from '../../Varios/SelectorVersionEjes';

function ids_a_codigos_organizaciones (lista_ids, lista_actores){
    const codigos = lista_ids.map((id_filtro)=> {
        const id = id_filtro
        return lista_actores.find((element)=> {return(element.id === id)})
    })
    return codigos.map((actor)=> {return (actor.organizacion)})  
}
function ids_a_codigos_elementos (lista_ids, lista_elementos){
    const codigos = lista_ids.map((id_filtro)=> {
        const id = id_filtro
        return lista_elementos.find((element)=> {return(element.id === id)})
    })
    return codigos.map((elemento)=> {return (elemento.codigo)})  
}

function codigos_organizaciones_a_ids (lista_codigos, lista_actores){
    const lista = lista_codigos.map((codigo)=> {
    return lista_actores.find((element)=> {return(element.organizacion === codigo)})
    })
    return lista.map((actor)=> {return (actor.id)})  
}

function codigos_elementos_a_ids (lista_codigos, lista_elementos){
    const lista = lista_codigos.map((codigo)=> {
        return lista_elementos.find((element)=> {return(element.codigo === codigo)})
        })
        return lista.map((elemento)=> {return (elemento.id)})  
}



function FiltroEjes ({filtro, filtro_dispatcher, actores})
    {  
    
//    const lista_keepers_filtro = ids_a_codigos_organizaciones (filtro.keepers, actores.keepers)
//    const [keepers_seleccionados, setKeepers] = React.useState(lista_keepers_filtro)
    
    const lista_operadores_filtro = ids_a_codigos_organizaciones (filtro.operadores, actores.operadores)
    const [operadores_seleccionados, setOperadores] = React.useState(lista_operadores_filtro)

    const lista_fabricantes_filtro = ids_a_codigos_organizaciones (filtro.fabricantes, actores.fabricantes)
    const [fabricantes_seleccionados, setFabricantes] = React.useState(lista_fabricantes_filtro)

//    const lista_mantenedores_filtro = ids_a_codigos_organizaciones (filtro.mantenedores, actores.mantenedores)
//    const [mantenedores_seleccionados, setMantenedores] = React.useState(lista_mantenedores_filtro)

    const lista_versiones_ejes_filtro = ids_a_codigos_elementos (filtro.versiones_ejes, actores.versiones_ejes)
    const [versiones_ejes_seleccionados, setVersionesEjes] = React.useState(lista_versiones_ejes_filtro)

    const [color_boton, setColorBoton] = React.useState('primary')

    function onClick (event) {
 //       const keepers = codigos_organizaciones_a_ids (keepers_seleccionados, actores.keepers)
        const operadores = codigos_organizaciones_a_ids (operadores_seleccionados, actores.operadores)
        const fabricantes = codigos_organizaciones_a_ids (fabricantes_seleccionados, actores.fabricantes)
//        const mantenedores = codigos_organizaciones_a_ids (mantenedores_seleccionados, actores.mantenedores)
        const versiones_ejes = codigos_elementos_a_ids (versiones_ejes_seleccionados, actores.versiones_ejes)
        filtro_dispatcher ({
                    keepers: [], 
                    operadores: operadores, 
                    fabricantes: fabricantes, 
                    mantenedores: [], 
                    versiones_ejes: versiones_ejes})
        setColorBoton('primary')
    }


    return (
        <>
        <Panel>
            {/*<Paper elevation = {3}>
                <Typography variant="h5" component="h2" sx = {{ml:2, mr:10, mt:2.5}}>
                    Ejes
                </Typography>
            </Paper>*/}
            <Paper elevation = {1} sx = {{ml:0.1, mt:0, mr:0.1, mb:0}}>
                <PanelFiltro>
                    <Typography variant="h6" component="h2" sx = {{ml:2, mr:2, mt:2.5,}}>
                        Filtro:
                    </Typography>
                {/* <SelectorKeeper
                        keepers = {actores.keepers.map((v)=>{return v.organizacion})}
                        keepers_seleccionados = {keepers_seleccionados}
                        setKeepers = {setKeepers}
                        setColorBoton = {setColorBoton}
                        minWidth = {120}
                        /> */}
                    <SelectorOperador
                        operadores = {actores.operadores.map((v)=>{return v.organizacion})}
                        operadores_seleccionados = {operadores_seleccionados}
                        setOperadores = {setOperadores}
                        setColorBoton = {setColorBoton}
                        minWidth = {160}
                        />
                    <SelectorFabricante
                        fabricantes = {actores.fabricantes.map((v)=>{return v.organizacion})}
                        fabricantes_seleccionados = {fabricantes_seleccionados}
                        setOperadores = {setFabricantes}
                        setColorBoton = {setColorBoton}
                        minWidth = {160}
                        />
                {/* <SelectorMantenedor
                        mantenedores = {actores.mantenedores.map((v)=>{return v.organizacion})}
                        mantenedores_seleccionados = {mantenedores_seleccionados}
                        setMantenedores = {setMantenedores}
                        setColorBoton = {setColorBoton}
                        minWidth = {120}
                        /> */}
                    <SelectorVersionEjes
                        versiones_ejes = {actores.versiones_ejes.map((v)=>{return v.codigo})}
                        versiones_ejes_seleccionados = {versiones_ejes_seleccionados}
                        setVersionesEjes = {setVersionesEjes}
                        setColorBoton = {setColorBoton}
                        minWidth = {160}
                        />
                    <Button size="medium" variant="outlined" onClick = {onClick} color = {color_boton} sx ={{ml:1, mb:1, mt:1.1, height:55, width:100, color:{color_boton}}}>Aplicar</Button>
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
    grid-template-columns: 0fr 0fr 0fr 0fr 0.4fr;
    padding-left:1px;
`

export default FiltroEjes;