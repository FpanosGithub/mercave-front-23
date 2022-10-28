import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function DatosCambioRueda ({rueda, textoA, valorA, textoB, valorB, colorA, colorB}){
  return(
    <PanelPrincipal>
      <Card sx={{height:40}}>
        <CardContent>
          <Typography sx={{ fontSize: 16, mt:-1, mb:0.5, textAlign:'center' }} color="text.primary" gutterBottom>
            Rueda {rueda}
          </Typography>
        </CardContent>
      </Card>
      <PanelDatos>
        <Card sx={{height:65, textAlign:'center' }}>
          <CardContent>
            <Typography sx={{ fontSize: 14, mt:-1, mb:0 }} color="text.secondary" gutterBottom>
                {textoA}
            </Typography>
            <Typography sx={{ fontSize: 16, mb:-2 }} color="text.primary">
                {valorA}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{height:65, textAlign:'center'}}>
          <CardContent>
            <Typography sx={{ fontSize: 14, mt:-1, mb:0  }} color="text.secondary" gutterBottom>
                {textoB}
            </Typography>
            <Typography sx={{ fontSize: 16, mb:-2 }} color="error">
                {valorB}
            </Typography>
          </CardContent>
        </Card>
      </PanelDatos>
    </PanelPrincipal>
    );
}

const PanelPrincipal = styled.div`
        display:grid;
        grid-template-rows: 0fr 0fr;
        gap:1px;
        width:100%;
        height:105;
`
const PanelDatos = styled.div`
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:1px;
        width:100%;
`

export default DatosCambioRueda