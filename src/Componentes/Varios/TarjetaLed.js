import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { pink, green } from '@mui/material/colors';

function TarjetaLed ({texto, activa, minWidth}) {
    return(
            <Card sx={{minWidth:{minWidth}}}>
            <CardContent>
            <Typography sx={{ fontSize: 16, textAlign:'center' }} color="text.secondary" gutterBottom>
                {texto}
            </Typography>  
            
            <Paper elevation = {1} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center',  ml:0.8, mt:2, mb:2, width:40, height:35}}>
            {(activa) ? (<LensBlurOutlinedIcon fontSize='large' sx={{ color: green[500], mt:0.2 }}/>)
                      : (<LensBlurOutlinedIcon fontSize='large' sx={{ color: pink[500], mt:0.2  }}/>)}
            </Paper>  
            {(activa) ? (<Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.primary" gutterBottom>SI</Typography>)
                      : (<Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.primary" gutterBottom>NO</Typography>)}
            
            </CardContent>
            </Card>
    )
}

export default TarjetaLed