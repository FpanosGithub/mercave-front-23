import * as React from 'react';
import styled from 'styled-components';
import useActores from '../Hooks/useActores';
import useFiltro from '../Hooks/useFiltro';
import useSeleccion from '../Hooks/useSeleccion';
import useUrls from '../Hooks/useUrls';
import ResponsiveAppBar from './Menu/MeniMui';
import Inicio from './Inicio/Inicio';
import ContainerEjes from './Ejes';
import ContainerVagones from './Vagones';
import useActivosMercave from '../Hooks/useActivosMercave';

function App() {
  const url = useUrls()
  const actores = useActores(url)
  const [seleccion, seleccionDispatcher] = useSeleccion()
  const [filtro_ejes, filtroEjesDispatcher] = useFiltro()
  const [filtro_vagones, filtroVagonesDispatcher] = useFiltro()
  const [ejes, ejesDispatcher] = useActivosMercave()
  const [vagones, vagonesDispatcher] = useActivosMercave()

  // Efecto para cargar los ejes con el filtro de ejes que haya activo
  React.useEffect(() => {
          const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({"filtro": {filtro_ejes}})
              }
          const getDataBD = async () => {
            ejesDispatcher({type:'CARGANDO'})
                  try {
                          const response = await fetch(url.servidor_backend + url.ejes, requestOptions);
                          let actual_data = await response.json();
                          ejesDispatcher ({type:'CARGAR_ACTIVOS', data: actual_data});
                  }
                  catch(err) {ejesDispatcher ({type:'ERROR', data: err.message})} }
                  getDataBD();
                  console.log ('FETCH FETCH EJES')
          }, [filtro_ejes, ejesDispatcher, url.ejes, url.servidor_backend]);
  
  // Efecto para cargar los vagones con el filtro de vagones que haya activo
  React.useEffect(() => {
    const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"filtro": {filtro_vagones}})
        }
    const getDataBD = async () => {
      vagonesDispatcher({type:'CARGANDO'})
            try {
                    const response = await fetch(url.servidor_backend + url.vagones, requestOptions);
                    let actual_data = await response.json();
                    vagonesDispatcher ({type:'CARGAR_ACTIVOS', data: actual_data});
            }
            catch(err) {vagonesDispatcher ({type:'ERROR', data: err.message})} }
            getDataBD();
            console.log ('FETCH FETCH VAGONES')
    }, [filtro_vagones, vagonesDispatcher, url.vagones, url.servidor_backend]);


  const MuestraComponente = () => {
    if (seleccion.menu === 'Inicio') 
      {return <Inicio 
        ejes = {ejes} 
        vagones = {vagones}
        actores = {actores}/>
        }
    if (seleccion.menu === 'Ejes') 
      {return <ContainerEjes 
        ejes = {ejes}
        ejesDispatcher = {ejesDispatcher}
        filtro = {filtro_ejes}
        filtroDispatcher = {filtroEjesDispatcher}
        actores = {actores}
        seleccion = {seleccion}
        seleccionDispatcher = {seleccionDispatcher}
        url = {url} />
        }
    if (seleccion.menu === 'Vagones') 
      { return <ContainerVagones 
        vagones = {vagones}
        vagonesDispatcher = {vagonesDispatcher}
        filtro = {filtro_vagones}
        filtroDispatcher = {filtroVagonesDispatcher}
        actores = {actores}
        seleccionDispatcher = {seleccionDispatcher}
        url = {url}
        />
          }
    }
    return (<>
      <ResponsiveAppBar onClick = {seleccionDispatcher}/>
      <PanelContenido>
        <MuestraComponente/>
      </PanelContenido>
      <PanelFooter>@Tria 2023</PanelFooter>
    </>);
}

const PanelContenido = styled.div`
  display:grid;
  gap: 3px 3px;
  height: 100%;
  width:100%;
  background-color:rgb(235, 201, 107);
  margin-top:2px;
  padding: 1px -3px 3px 1px;
  border: 1px solid;
  overflow-x: hidden;
`
const PanelFooter = styled.div`
  padding:10px 10px;

`

export default App;
