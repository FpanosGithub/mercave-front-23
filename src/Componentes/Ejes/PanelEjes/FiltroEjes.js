import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SelectorElementos from '../../Varios/SelectorElementos';

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
    const lista_owners_filtro = ids_a_codigos_organizaciones (filtro.owners, actores.owners)
    const lista_fabricantes_filtro = ids_a_codigos_organizaciones (filtro.fabricantes, actores.fabricantes)
    const lista_versiones_ejes_filtro = ids_a_codigos_elementos (filtro.versiones_ejes, actores.versiones_ejes)

    const [owners_seleccionados, setOwners] = React.useState(lista_owners_filtro)
    const [fabricantes_seleccionados, setFabricantes] = React.useState(lista_fabricantes_filtro)
    const [versiones_ejes_seleccionados, setVersionesEjes] = React.useState(lista_versiones_ejes_filtro)
    const [color_boton, setColorBoton] = React.useState('primary')

    function onClick (event) {
        const owners = codigos_organizaciones_a_ids (owners_seleccionados, actores.owners)
        const fabricantes = codigos_organizaciones_a_ids (fabricantes_seleccionados, actores.fabricantes)
        const versiones_ejes = codigos_elementos_a_ids (versiones_ejes_seleccionados, actores.versiones_ejes)
        filtro_dispatcher ({
                    keepers: [], 
                    owners: owners, 
                    fabricantes: fabricantes, 
                    EEMs: [], 
                    versiones_ejes: versiones_ejes,
                    tipos_vagones:[],
                    cambiadores:[]})
        setColorBoton('primary')
    }


    return (
        <>
        <Panel>
            <Paper elevation = {1} sx = {{ml:0.1, mt:0, mr:0.1, mb:0, pt:2}}>
                <PanelFiltro>
                    <Typography variant="h6" component="h2" sx = {{ml:2, mr:3, mt:1.2}}>
                        Filtro:
                    </Typography>
                
                    <SelectorElementos
                        tipo_elementos = 'Owners'
                        elementos_lista = {actores.owners.map((v)=>{return v.organizacion})}
                        elementos_seleccionados = {owners_seleccionados}
                        setElementosSeleccionados = {setOwners}
                        setColorBoton = {setColorBoton}
                        minWidth = {180}
                        />
                    
                    <SelectorElementos
                        tipo_elementos = 'Fabricantes'
                        elementos_lista = {actores.fabricantes.map((v)=>{return v.organizacion})}
                        elementos_seleccionados = {fabricantes_seleccionados}
                        setElementosSeleccionados = {setFabricantes}
                        setColorBoton = {setColorBoton}
                        minWidth = {180}
                        />
                    
                    <SelectorElementos
                        tipo_elementos = 'Versiones'
                        elementos_lista = {actores.versiones_ejes.map((v)=>{return v.codigo})}
                        elementos_seleccionados = {versiones_ejes_seleccionados}
                        setElementosSeleccionados = {setVersionesEjes}
                        setColorBoton = {setColorBoton}
                        minWidth = {180}
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
    grid-template-columns: 0fr 0fr 0fr 0fr 0.4fr;
    padding-left:1px;
`

export default FiltroEjes;

