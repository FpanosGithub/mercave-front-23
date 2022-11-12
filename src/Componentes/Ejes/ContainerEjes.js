import * as React from 'react';
import Panel1Eje from './Panel1Eje/Panel1Eje';
import PanelEjes from './PanelEjes/PanelEjes';

//Función que devuelve el eje seleccionado
const seleccionarEje = (seleccion, ejes)=> {
        let indice = 0
        try {
            ejes.forEach(comprobar)
            function comprobar(value, index) 
                {
                if (value.id === seleccion) {indice = index}
                }
            return(ejes[indice])}
        catch {
                return null
        }
    }
    
//Función que busca los ejes que van en el vagón del eje seleccionado
const IdentificarEjesMismoVagon = (eje, ejes) =>{
        
        let id_eje = eje.id
        let id_vagon = null
        let ejes_mismo_vagon = []
        
        if (eje){id_vagon = eje.vagon.id}
        
        if (id_vagon)
        {
                ejes.forEach((eje) =>{ 
                        try 
                        {        
                                if ((eje.vagon.id === id_vagon) && (eje.id !== id_eje)) 
                                        {ejes_mismo_vagon.push({'codigo':eje.codigo, 'id':eje.id})}
                        }
                        catch {}
                        
                })
        }       
        
        return (ejes_mismo_vagon)
    }

// COMPONENTE //
function ContainerEjes ({ejes, filtro, filtroDispatcher, alarmas, actores, seleccion, seleccionDispatcher, url})
        {
        const eje = seleccionarEje (seleccion.eje, ejes.lista)
        const ejes_mismo_vagon = IdentificarEjesMismoVagon (eje, ejes.lista)
        
        //Render
        return (
                <>
                {(seleccion.eje === 'todos') ?
                        (
                        <PanelEjes 
                        filtro = {filtro} 
                        filtro_dispatcher = {filtroDispatcher}
                        actores = {actores}
                        alarmas = {alarmas}
                        onSeleccion = {seleccionDispatcher}
                        ejes = {ejes}
                        url = {url}
                         />        
                        )
                :                                       
                        (
                        <Panel1Eje
                        eje = {eje}
                        ejes_mismo_vagon = {ejes_mismo_vagon}
                        onVolver = {seleccionDispatcher}
                        url = {url}
                        />
                        )
                }
                </>
                )
}

export default ContainerEjes;