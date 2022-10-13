import styled from 'styled-components';
import SelectorRango from '../../../Varios/SelectorRango'
import GraficasCirculaciones from './GraficasCirculaciones';
import PrepararDatosCirculaciones from '../../../../Utilidades/PrepararDatosCirculacionesEje';

export default function RangoCirculaciones({codigo_eje, rango, setRango, circulaciones, estado_eje, vel_eje, tempa, tempb}) {
  const datos = PrepararDatosCirculaciones (circulaciones)
  return (
    <PanelRango>
      <SelectorRango
        titulo = {`Circulaciones - ${codigo_eje}`}
        rango = {rango}
        setRango = {setRango}/>
      <GraficasCirculaciones 
        datos = {datos}
        estado_eje = {estado_eje}
        vel_eje = {vel_eje}
        tempa = {tempa}
        tempb = {tempb} />
    </PanelRango>
  );
}

const PanelRango = styled.div`
display:grid;
padding:1px, 1px;
margin-left: 1px;
margin-bottom: 1px;
gap:3px;
grid-template-columns: 0fr 1fr;
height:25.2rem;
`