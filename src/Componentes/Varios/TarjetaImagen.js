import Card from '@mui/material/Card';
import Imagen from './Imagen'

function TarjetaImagen ({nombre, alt, height, width}) {
    return(
        <Card sx={{ width: {width}, p:0.5, mr:0 }}>
            <Imagen nombre={nombre} alt={alt} height = {height} width = {width}/>;   
        </Card>
    )
}

export default TarjetaImagen