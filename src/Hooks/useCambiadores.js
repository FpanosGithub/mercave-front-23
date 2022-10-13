import * as React from 'react';

const url_cambiadores = 'http://localhost:8000/material/ejes';

function useCambiadores() {
    
    const [cambiadores, setCambiadores] = React.useState(null);

    React.useEffect(() => {
        const getDataBD = async () => {
            try {
                const response = await fetch(url_ejes);
                let actual_data = await response.json();
                setEjes (actual_data);
                }
            catch(err) {let error = (err.message)} 
            };
            getDataBD();
        }, []);

    return  ([ {cambiadores:cambiadores}, setCambiadores])
}
  
export default useCambiadores;