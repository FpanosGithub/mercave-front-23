import * as React from 'react';

function MapaEje ({mapa}){

    return(
        <>
        <div dangerouslySetInnerHTML={{ __html: mapa }} />
        </>
    );
}

export default MapaEje