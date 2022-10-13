import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';


function TarjetaCirculacion ({estado, velocidad, minWidth}) {
        return(
        <Card sx={{ minWidth: {minWidth}}}>
        <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        Velocidad:
                </Typography>
                <Typography variant="h5" component="div" sx={{ mb:0 }}>
                        {velocidad} 
                <Typography sx={{ fontSize: 18, display:'inline-block' }} color="text.secondary" gutterBottom>
                        &nbsp;Km/h
                </Typography>
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        Estado:
                </Typography>

                {(estado === 'CIRCULANDO') 
                ? (<CachedOutlinedIcon fontSize='large' sx={{ mt:0}}/>)
                : (<PauseCircleOutlinedIcon fontSize='large' sx={{ mt:0}}/>)}
                
                
        </CardContent>
        </Card>
    )
}

export default TarjetaCirculacion