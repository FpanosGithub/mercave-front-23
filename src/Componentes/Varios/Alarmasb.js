import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { pink, green } from '@mui/material/colors';

function Alarmasb ({tipo, activa}) {
    return(
            <Card sx={{width:55}}>
            <CardContent>
            <Typography sx={{ fontSize: 14, mt:0, ml:-1, textAlign:'center' }} color="text.primary" gutterBottom>
                    Alarm {tipo}
            </Typography>  
            
            <Paper elevation = {1} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center',  ml:-1, mt:1, mb:0, width:40, height:35}}>
            {(activa) ? (<LensBlurOutlinedIcon fontSize='large' sx={{ color: pink[500], mt:0.2 }}/>)
                      : (<LensBlurOutlinedIcon fontSize='large' sx={{ color: green[500], mt:0.2  }}/>)}
            </Paper>  
            </CardContent>
            </Card>
    )
}

export default Alarmasb