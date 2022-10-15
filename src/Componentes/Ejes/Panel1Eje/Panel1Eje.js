import * as React from 'react';
import styled from 'styled-components';
import BannerEje from './BannerEje';
import CirculacionesEje from './Circulaciones/CirculacionesEje';
import CambiosEje from './Cambios/CambiosEje';


function Panel1Eje ({eje, ejes_mismo_vagon, onVolver, url}){

    // RENDER INFO DE 1 EJE!!!!!!
    return (
        <PanelContenido>
            <BannerEje 
                    eje={eje} 
                    ejes_mismo_vagon = {ejes_mismo_vagon}
                    onVolver = {onVolver}/>
            {/*  EVENTOS DE CIRCULACIÓN  */}
            <CirculacionesEje
                    eje={eje}
                    url = {url}/>   
            {/*  CAMBIOS  */}      
            <CambiosEje
                eje={eje}
                url = {url}/>  
        </PanelContenido>
        )
}

const PanelContenido = styled.div`
  display:grid;
  grid-template-rows: 10rem 0fr 0fr;
  gap: 3px;
  min-height: 100%;
  width:100%;
  margin-top:2px;
  margin-bottom:2px;
  `
export default Panel1Eje;