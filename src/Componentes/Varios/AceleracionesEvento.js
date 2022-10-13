import * as React from 'react';
import Paper from '@mui/material/Paper';
import GraficoAceleraciones from './GraficoAceleraciones';


function AceleracionesEvento ({evento, url}){
        // Cargamos Datos detallados de circulación del eje para gráficas
        const [detalle_evento, setDetalle] = React.useState(null)
        const url_detalle = `${url.servidor_backend}${url.detalle_evento}${evento.id}/`;
        const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({  "eje": evento.eje,
                                        "dt":evento.dt})
        };
        React.useEffect(() => {
                const getDetalleEvento = async () => {
                try {
                        const response = await fetch(url_detalle, requestOptions);
                        let actualData = await response.json();
                        setDetalle(actualData);
                        } 
                catch(err) {console.log(`Error cargando detalles de Mongo DB: ${err.message}`)} 
                }
                // Solo ejecutamos la consulta si hay evento seleccionado
                if (evento.id) {
                        getDetalleEvento()
                }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [evento.id]);
        // Render JSX
        return (
        <> 
        <Paper elevation = {3} sx={{pt:1, mb:0, pl:1}}>
                <GraficoAceleraciones 
                        detalle = {detalle_evento}/>
                </Paper>
        </>)
}


export default AceleracionesEvento;