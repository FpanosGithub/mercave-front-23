import * as React from 'react';

const filtro_inicial = {owners:[], keepers:[], fabricantes:[], EEMs:[], versiones_ejes:[], tipos_vagones:[], cambiadores:[]};

function useFiltro() {    
    const [filtro, setFiltro] = React.useState(filtro_inicial);
    return  ([filtro, setFiltro])
}
  
export default useFiltro;