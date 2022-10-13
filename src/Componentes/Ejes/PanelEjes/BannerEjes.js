import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import img_eje from '../../../Static/eje.png'
import Typography from '@mui/material/Typography';
import Tarjeta11 from '../../Varios/Tarjeta11'

function BannerEjes (){
    return(
        <><PanelBanner>
        <Paper elevation = {3} sx={{height:'10.7rem', ml:0.2, pt:1}}>
                <Typography variant="h4" component="h3" sx={{ml:3, mt:3, mr:10, minWidth:100}}>
                        Ejes
                </Typography> 
        </Paper>  
        <Tarjeta11
                        texto1 = 'Km semana:'
                        valor1 = {4124}
                        texto2 = 'Ayer:'
                        valor2 = {749}
                        minWidth= {170}/> 
        <Tarjeta11
                        texto1 = 'Cambios semana:'
                        valor1 = {30}
                        texto2 = 'Ayer:'
                        valor2 = {8}
                        minWidth= {170}/> 
        <Tarjeta11
                        texto1 = 'Circulando:'
                        valor1 = {4}
                        texto2 = 'En Mto.:'
                        valor2 = {24}
                        minWidth= {170}/> 
        <Card sx={{ width: 300, pt:1, mr:-0.2 }}>
            <img src={img_eje} alt="" height = {170} width = {300}/>;  
        </Card>
    </PanelBanner></>
    );
}

const PanelBanner = styled.div`
    display:grid;
    grid-template-columns: 1fr 0fr 0fr 0fr 0fr 0fr;
    align-items:'strech';
    gap:3px;
    width:100%;
    height:10.8rem;
`
export default BannerEjes