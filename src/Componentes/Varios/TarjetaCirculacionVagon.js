import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, green, grey } from '@mui/material/colors';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';
import WifiIcon from '@mui/icons-material/Wifi';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import CloseIcon from '@mui/icons-material/Close';
import BuildIcon from '@mui/icons-material/Build';


function TarjetaCirculacionVagon ({estado, transmitiendo, velocidad, minWidth}) {
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
                {(transmitiendo)? 
                        (<WifiIcon fontSize='large' sx={{ color: green[500], mt:0.2 }}/>)
                        :   
                        (<WifiOffIcon fontSize='large' sx={{ color: pink[500], mt:0.2  }}/>)}
                {(estado === 'BAJA')? 
                        (<CloseIcon fontSize='large' sx={{ color: grey[500], mt:0.2}}/>)
                                :   ((estado === 'MANTENIMIENTO') ? 
                                        (<BuildIcon fontSize='large' sx={{ color: grey[500], mt:0.2 }}/>)
                                    :   ((estado === 'PARADO') ? 
                                            (<PauseCircleOutlinedIcon fontSize='large' sx={{ color: pink[500], mt:0.2 }}/>)
                                        :   (<CachedOutlinedIcon fontSize='large' sx={{ color: green[500], mt:0.2  }}/>)
                                ))}
                
        </CardContent>
        </Card>
    )
}

export default TarjetaCirculacionVagon