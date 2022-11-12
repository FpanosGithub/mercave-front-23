import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function TarjetaVolver ({onVolver, target}) {
    const handleClick = (event) => {
        onVolver ({type:'SELECCIONAR_MENU', payload:target})
        };

    return(
        <Card sx={{ width: 70}}>
            <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', mt:6}}>
                <IconButton aria-label="delete" size="large" onClick={handleClick}>
                    <ArrowBackIosIcon fontSize="large"/>
                </IconButton> 
            </Box>   
            </Card>
    )
}

export default TarjetaVolver