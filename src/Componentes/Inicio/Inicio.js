import * as React from 'react';
import InicioActores from './InicioActores';
import InicioEjes from './InicioEjes';
import InicioVagones from './InicioVagones';
import InicioCambiadores from './InicioCambiadores';
import InicioAlarmas from './InicioAlarmas copy';
import Fallback from '../Varios/Fallback';
import BannerMercave from '../Varios/BannerMercave';

// COMPONENTE //
function Inicio ({ejes, vagones, actores, alarmas})
    {
    //Render
    return (
    <>
        <BannerMercave height = {180} imagen = 'arte/homeCabecera.jpg'/>
        {alarmas.cargando ?
            (<Fallback
                elemento = 'Alarmas' 
                modo = 'CARGANDO'
                imagen = 'arte/alarmasImagen.jpg'/> )
            :                                       
            (alarmas.error ?
                (<Fallback
                    elemento = 'Alarmas' 
                    modo = 'ERROR'
                    imagen = 'arte/alarmasImagen.jpg'/>)
                :
                (<InicioAlarmas
                    alarmas = {alarmas} />)
            )
        }
        {actores.cargando ?
            (<Fallback
                elemento = 'Actores Mercave' 
                modo = 'CARGANDO'
                imagen = 'arte/actoresImagen.jpg'/> )
            :                                       
            (actores.error ?
                (<Fallback
                elemento = 'Actores Mercave' 
                modo = 'ERROR'
                imagen = 'arte/actoresImagen.jpg'/>)
                :
                (<InicioActores
                    actores = {actores} />)
            )
        }
        {ejes.cargando ?
            (<Fallback
                elemento = 'Ejes' 
                modo = 'CARGANDO'
                imagen = 'arte/ejesImagen.jpg'/> )
            :                                       
            (ejes.error ?
                (<Fallback
                    elemento = 'Ejes' 
                    modo = 'ERROR'
                    imagen = 'arte/ejesImagen.jpg'/> )
                :
                (<InicioEjes
                    ejes = {ejes.lista} 
                    versiones = {actores.versiones_ejes}
                    imagen = 'arte/ejesImagen.jpg'/>)
            )
        }
        {vagones.cargando ?
            (<Fallback
                elemento = 'Vagones' 
                modo = 'CARGANDO'
                imagen = 'arte/vagonesImagen.jpg'/> )
            :                                       
            (vagones.error ?
                (<Fallback
                    elemento = 'Vagones' 
                    modo = 'ERROR'
                    imagen = 'arte/vagonesImagen.jpg'/>)
                :
                (<InicioVagones
                    vagones = {vagones.lista} 
                    tipos = {actores.tipos_vagones}
                    imagen = 'arte/vagonesImagen.jpg'/>)
            )
        }
        {actores.cargando ?
            (<Fallback
                elemento = 'Cambiadores' 
                modo = 'CARGANDO'
                imagen = 'arte/cambiadoresImagen.jpg'/> )
            :                                       
            (actores.error ?
                (<Fallback
                    elemento = 'Cambiadores' 
                    modo = 'ERROR'
                    imagen = 'arte/cambiadoresImagen.jpg'/>)
                :
                (<InicioCambiadores
                    cambiadores = {actores.cambiadores} 
                    versiones = {actores.versiones_cambiadores}/>)
            )
        }
    </>
    )
}

export default Inicio;