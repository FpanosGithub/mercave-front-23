import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function TarjetaIr ({onIr}) {
    const handleClick = (event) => {
        };

    return(
        <Card>
            <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', mt:5, mr:1, height: 50}}>
                <IconButton aria-label="delete" size="large" onClick={handleClick}>
                    <ArrowForwardIosOutlinedIcon fontSize="large"/>
                </IconButton> 
            </Box>   
        </Card>
    )
}

export default TarjetaIr