import Card from '@mui/material/Card';
import Imagen from './Imagen'

function TarjetaImagen ({nombre, alt, height, width}) {
    return(
        <Card sx={{ width: 300, pt:0.2, pb:0.2, pl:0.2, pr:0.2, mr:0.2 }}>
            <Imagen nombre={nombre} alt={alt} height = {height} width = {width}/>;   
        </Card>
    )
}

export default TarjetaImagen