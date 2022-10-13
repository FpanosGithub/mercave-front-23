import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';


function TarjetaEstadoCirculacion ({estado, minWidth}) {
        return(
        <Card sx={{ minWidth: {minWidth}}}>
        <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        Estado:
                </Typography>
                <PanelInfo>
                        <Typography sx={{ fontSize: 18, mb:-0.5, mt:2 }} color="text.primary">
                                {estado} 
                        </Typography>
                        {(estado === 'CIRCULANDO') 
                        ? (<CachedOutlinedIcon fontSize='large' sx={{ ml:2, mt:1, display:'inline-block' }}/>)
                        : (<PauseCircleOutlinedIcon fontSize='large' sx={{ ml:2, mt:1, display:'inline-block' }}/>)}
                </PanelInfo>
        </CardContent>
        </Card>
    )
}

export default TarjetaEstadoCirculacion


const PanelInfo = styled.div`
    display:grid;
    grid-template-columns: 0fr 0fr;
    gap:1px;

` 