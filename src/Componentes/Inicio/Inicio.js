import * as React from 'react';
import InicioActores from './InicioActores';
import InicioEjes from './InicioEjes';
import InicioVagones from './InicioVagones';
import Fallback from '../Varios/Fallback';
import BannerMercave from '../Varios/BannerMercave';

// COMPONENTE //
function Inicio ({ejes, vagones, actores})
    {
    //Render
    return (
    <>
        <BannerMercave height = {180} imagen = 'CABECERAHOME.jpg'/>
        {actores.cargando ?
            (<Fallback
                elemento = 'Actores Mercave' 
                modo = 'CARGANDO'
                imagen = 'actores.jpg'/> )
            :                                       
            (actores.error ?
                (<Fallback
                elemento = 'Actores Mercave' 
                modo = 'ERROR'
                imagen = 'actores.jpg'/>)
                :
                (<InicioActores
                    actores = {actores}
                    imagen = 'actores.jpg'/>)
            )
        }
        {/*<BannerMercave height = {170} imagen = 'BannerEjesMercave.jpg'/>*/}
        {ejes.cargando ?
            (<Fallback
                elemento = 'Ejes' 
                modo = 'CARGANDO'
                imagen = 'eje.png'/> )
            :                                       
            (ejes.error ?
                (<Fallback
                    elemento = 'Ejes' 
                    modo = 'ERROR'
                    imagen = 'eje.png'/> )
                :
                (<InicioEjes
                    ejes = {ejes.lista} 
                    versiones = {actores.versiones_ejes}
                    imagen = 'eje.png'/>)
            )
        }
        {/*<BannerMercave height = {160} imagen = 'BannerVagonesMercave.jpg'/>*/}
        {vagones.cargando ?
            (<Fallback
                elemento = 'Vagones' 
                modo = 'CARGANDO'
                imagen = 'vagones.jpg'/> )
            :                                       
            (vagones.error ?
                (<Fallback
                    elemento = 'Vagones' 
                    modo = 'ERROR'
                    imagen = 'vagones.jpg'/>)
                :
                (<InicioVagones
                    vagones = {vagones.lista} 
                    tipos = {actores.tipos_vagones}
                    imagen = 'vagones.jpg'/>)
            )
        }
    </>
    )
}

export default Inicio;