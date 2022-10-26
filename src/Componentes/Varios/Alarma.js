import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { pink, green } from '@mui/material/colors';

function Alarma ({tipo, activa}) {
    return(
            <Card sx={{width:80}}>
            <CardContent>
            <Typography sx={{ fontSize: 16, textAlign:'center' }} color="text.secondary" gutterBottom>
                    Alarma {tipo}
            </Typography>  
            
            <Paper elevation = {1} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center',  ml:0.5, mt:1, mb:2, width:40, height:35}}>
            {(activa) ? (<LensBlurOutlinedIcon fontSize='large' sx={{ color: pink[500], mt:0.2 }}/>)
                      : (<LensBlurOutlinedIcon fontSize='large' sx={{ color: green[500], mt:0.2  }}/>)}
            </Paper>  
            {(activa) ? (<Button size="small" variant="outlined" sx={{ fontSize: 14, textAlign:'center', ml:-1 }}>Reset</Button>)
                      : (<Typography sx={{ fontSize: 16, mt:0, textAlign:'center'}} color="text.secondary" gutterBottom>NO</Typography>)}
            
            </CardContent>
            </Card>
    )
}

export default Alarma