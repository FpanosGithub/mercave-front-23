import * as React from 'react';
import InfoInicio from './InfoInicio';
import Fallback from '../Varios/Fallback';
import BannerMercave from '../Varios/BannerMercave';

// COMPONENTE //
function Inicio ({ejes, vagones, actores})
    {
    //Render
    return (
    <>
        <BannerMercave height = {180} imagen = 'BannerHomeMercave.jpg'/>
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
                (<InfoInicio
                elemento = 'Actores' 
                sub_elemento_1 = 'Número de Operadores:' 
                num_sub1 = {actores.operadores.length}
                sub_elemento_2 = 'Número de Keepers:' 
                num_sub2 = {actores.keepers.length}
                sub_elemento_3 = 'Número de Fabricantes:' 
                num_sub3 = {actores.fabricantes.length}
                sub_elemento_4 = 'Número de Mantened:' 
                num_sub4 = {actores.mantenedores.length}
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
                (<InfoInicio
                    elemento = 'Ejes' 
                    sub_elemento_1 = 'Número de Ejes:' 
                    num_sub1 = {ejes.lista.length}
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
                (<InfoInicio
                    elemento = 'Vagones' 
                    sub_elemento_1 = 'Número de Vagones:' 
                    num_sub1 = {vagones.lista.length}
                    imagen = 'vagones.jpg'/>)
            )
        }
    </>
    )
}

export default Inicio;