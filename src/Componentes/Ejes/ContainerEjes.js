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
        let ejes_mismo_vagon = []
        try {
                let vagon = eje.vagon
                if (vagon) {
                        ejes.forEach((value) =>{
                        if ((value.vagon === vagon) && (value.id !== eje.id)) {ejes_mismo_vagon.push({'codigo':value.codigo, 'id':value.id})}
                        })
                        if (ejes_mismo_vagon.length > 0){return (ejes_mismo_vagon)}
                        else {return ([ {'codigo':'-', 'id':eje.id},
                                {'codigo':'-', 'id':eje.id},
                                {'codigo':'-', 'id':eje.id}])}
                }
                else {return ([ {'codigo':'-', 'id':eje.id},
                                {'codigo':'-', 'id':eje.id},
                                {'codigo':'-', 'id':eje.id}])}
        }
        catch {
                return ([{'codigo':'-', 'id':0}])
        } 
    }

// COMPONENTE //
function ContainerEjes ({ejes, filtro, filtroDispatcher, actores, seleccion, seleccionDispatcher, url})
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