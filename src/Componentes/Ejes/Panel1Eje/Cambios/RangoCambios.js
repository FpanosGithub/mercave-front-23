import styled from 'styled-components';
import SelectorRango from '../../../Varios/SelectorRango'
import GraficasCambios from './GraficasCambios';
import PrepararDatos from '../../../../Utilidades/PrepararDatosCambiosEje';

export default function RangoCambios({codigo_eje, cambios, rango, setRango}) {
  const datos = PrepararDatos (cambios)
  return (
    <PanelRango>
      <SelectorRango
        titulo = {`Cambios - ${codigo_eje}`}
        rango={rango}
        setRango = {setRango}/>
      <GraficasCambios 
        datos = {datos} />
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