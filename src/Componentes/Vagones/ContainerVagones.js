import * as React from 'react';
import Panel1Vagon from './Panel1Vagon/Panel1Vagon';
import PanelVagones from './PanelVagones/PanelVagones';

//Función que busca el vagón seleccionado en la lista de vagones y devuelve un objeto vagón
const seleccionarVagon = (seleccion, vagones)=> {
        if(vagones.length > 0){
                let indice = 0
                try {
                        function comprobar(value, index) 
                                {
                                if (value.id === seleccion) {indice = index}
                                }
                        vagones.forEach(comprobar)
                        return(vagones[indice])}
                catch {
                        return {id:-1, codigo:'Ninguno', imagen:'vagones.jpg', ejes:[]}
        }
        }
        return {id:-1, codigo:'NaN', imagen:'vagones.jpg', ejes:[]}
}

// COMPONENTE //
export default function ContainerVagones ({vagones, filtro, filtroDispatcher, alarmas, actores, seleccion, seleccionDispatcher, url})
        {
        const vagon = seleccionarVagon(seleccion.vagon, vagones.lista)  
        //Render
        return (
                <>
                {(seleccion.vagon === 'todos') ?
                        (
                        <PanelVagones 
                        vagones = {vagones}
                        filtro = {filtro} 
                        filtro_dispatcher = {filtroDispatcher}
                        actores = {actores}
                        alarmas = {alarmas}
                        onSeleccion = {seleccionDispatcher}
                        url = {url}
                         />        
                        )
                :                                       
                        (
                        <Panel1Vagon
                        vagon = {vagon}
                        onSeleccion = {seleccionDispatcher}
                        url = {url}
                        />
                        )
                }
                </>
                )
}