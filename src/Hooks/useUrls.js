import * as React from 'react';

function useUrls() {
    const urls_sistema = {
        servidor_backend: 'http://localhost:8000/',
        //servidor_backend: 'https://mercave-back-23.azurewebsites.net/',
        ejes: 'api/ejes',
        vagones: 'api/vagones',
        eventos_vagon: 'api/circulaciones_vagon',
        circulaciones_eje : 'api/circulaciones_eje',
        eventos_circulacion_eje : 'api/eventos_circulacion_eje',
        alarmas : 'api/alarmas',
        detalle_evento : 'eventos/detalles_evento/',
        cambios_eje : 'api/cambios_eje',
        operaciones_de_cambio: 'api/operaciones_de_cambio',
        cambios_operacion: 'api/cambios_operacion',
        actores : 'api/actores',
        operadores : 'organizaciones/operadores',
        keepers : 'organizaciones/keepers',
        fabricantes : 'organizaciones/fabricantes',
        mantenedores : 'organizaciones/mantenedores',
        versiones_ejes : 'ingenieria/versiones_ejes',   
    }
    // eslint-disable-next-line
    const [urls, setUrls] = React.useState(urls_sistema);
    return  (urls)
}
  
export default useUrls;