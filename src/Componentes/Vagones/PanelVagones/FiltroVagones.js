import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SelectorElementos from '../../Varios/SelectorElementos';

function ids_a_codigos (lista_ids, lista_actores){
    const codigos = lista_ids.map((id_filtro)=> {
        const id = id_filtro
        return lista_actores.find((element)=> {return(element.id === id)})
    })
    return codigos.map((actor)=> {return (actor.organizacion)})  
}
function codigos_a_ids (lista_codigos, lista_actores){
    const lista = lista_codigos.map((codigo)=> {
    return lista_actores.find((element)=> {return(element.organizacion === codigo)})
    })
    return lista.map((actor)=> {return (actor.id)})  
}

function FiltroVagones ({filtro, filtro_dispatcher, actores})
    {  
    
    const lista_keepers_filtro = ids_a_codigos (filtro.keepers, actores.keepers)
    const lista_owners_filtro = ids_a_codigos (filtro.owners, actores.owners)
    const lista_EEMs_filtro = ids_a_codigos (filtro.EEMs, actores.EEMs)

    const [keepers_seleccionados, setKeepers] = React.useState(lista_keepers_filtro)
    const [owners_seleccionados, setOwners] = React.useState(lista_owners_filtro)
    const [EEMs_seleccionados, setEEMs] = React.useState(lista_EEMs_filtro)

    const [color_boton, setColorBoton] = React.useState('primary')

    function onClick () {
        const keepers = codigos_a_ids (keepers_seleccionados, actores.keepers)
        const owners = codigos_a_ids (owners_seleccionados, actores.owners)
        const EEMs = codigos_a_ids (EEMs_seleccionados, actores.EEMs)

        filtro_dispatcher ({
                    keepers: keepers, 
                    owners: owners,  
                    EEMs: EEMs,
                
                })
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
                        minWidth = {160}
                        />
                    <SelectorElementos
                        tipo_elementos = 'Keepers'
                        elementos_lista = {actores.keepers.map((v)=>{return v.organizacion})}
                        elementos_seleccionados = {keepers_seleccionados}
                        setElementosSeleccionados = {setKeepers}
                        setColorBoton = {setColorBoton}
                        minWidth = {160}
                        />
                    <SelectorElementos
                        tipo_elementos = 'E.E.M.'
                        elementos_lista = {actores.EEMs.map((v)=>{return v.organizacion})}
                        elementos_seleccionados = {EEMs_seleccionados}
                        setElementosSeleccionados = {setEEMs}
                        setColorBoton = {setColorBoton}
                        minWidth = {160}
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
    grid-template-columns: 0fr 0fr 0fr 0fr 0fr;
    gap:1px;
    padding-left:1px;
`
export default FiltroVagones;