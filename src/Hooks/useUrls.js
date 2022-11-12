import * as React from 'react';

function useUrls() {
    const urls_sistema = {
        // ******* SERVIDOR ****************
        servidor_backend: 'http://localhost:8000/',
        //servidor_backend: 'https://mercave-back-23.azurewebsites.net/',
        // *********************************
        // vagones
        vagones: 'api/vagones',
        eventos_vagon: 'api/circulaciones_vagon',
        circulaciones_vagon : 'api/circulaciones_vagon',
        eventos_circulacion_vagon : 'api/eventos_circulacion_vagon',
        mantenimientos_vagon : 'api/mantenimientos_vagon',
        // ejes EAVM
        ejes: 'api/ejes',
        circulaciones_eje : 'api/circulaciones_eje',
        eventos_circulacion_eje : 'api/eventos_circulacion_eje',
        cambios_eje : 'api/cambios_eje',
        mantenimientos_eje : 'api/mantenimientos_eje',
        versiones_ejes : 'ingenieria/versiones_ejes', 
        // cambiadores CAVM
        operaciones_de_cambio: 'api/operaciones_de_cambio',
        cambios_operacion: 'api/cambios_operacion',
        // actores
        actores : 'api/actores',
        operadores : 'organizaciones/operadores',
        keepers : 'organizaciones/keepers',
        fabricantes : 'organizaciones/fabricantes',
        mantenedores : 'organizaciones/mantenedores',
        // alarmas
        alarmas : 'api/alarmas',
    }
    // eslint-disable-next-line
    const [urls, setUrls] = React.useState(urls_sistema);
    return  (urls)
}
  
export default useUrls;