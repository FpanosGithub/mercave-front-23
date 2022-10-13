import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, green, red, orange, purple, blue, grey } from '@mui/material/colors';


function TarjetaTemperatura ({texto, temperatura, minWidth}) {
        
        function ElejirColor (temp) {
                let codigoColor = red[500]
                if (temp <= -10) {codigoColor = blue[300]}
                else if (temp <= -0) {codigoColor = blue[600]}
                else if (temp <= 10) {codigoColor = grey[500]}
                else if (temp <= 20) {codigoColor = green[500]}
                else if (temp <= 30) {codigoColor = purple[500]}
                else if (temp <= 40) {codigoColor = orange[500]}
                else if (temp <=50) {codigoColor = pink[300]}
                else if (temp <=60) {codigoColor = red[300]}
                else if (temp <=90) {codigoColor = red[500]}
                return codigoColor
        }
        let color = ElejirColor(temperatura)

        return(
        <Card sx={{ minWidth:{minWidth}, ml:0.4, mt:0 }}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        {texto}
                </Typography>
                <Typography sx={{ fontSize: 18, mb:-0.5, mt:2, color: color}} gutterBottom>
                        {temperatura} º
                </Typography>
            </CardContent>
            </Card>
    )
}

export default TarjetaTemperatura