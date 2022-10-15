import Card from '@mui/material/Card';
import Imagen from './Imagen'

function BannerMercave ({height, imagen}) {
    return(
        <Card sx={{ pt:0.2, pb:0, pl:0.2, pr:0.2, height: {height} }}>
            <Imagen nombre={imagen} alt='mercave' height = {height} width = {'100%'}/>;   
        </Card>
    )
}

export default BannerMercave