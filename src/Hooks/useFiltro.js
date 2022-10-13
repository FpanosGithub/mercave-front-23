import * as React from 'react';

const filtro_inicial = {operadores:[], keepers:[], fabricantes:[], mantenedores:[], versiones_ejes:[], tipos_vagones:[]};

function useFiltro() {    
    const [filtro, setFiltro] = React.useState(filtro_inicial);
    return  ([filtro, setFiltro])
}
  
export default useFiltro;