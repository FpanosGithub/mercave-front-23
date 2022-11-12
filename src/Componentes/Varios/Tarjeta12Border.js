import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

function Tarjeta12Border ({texto1, texto2, valor1, valor2, minWidth, color}) {
    return(
        <Card sx={{ minWidth: {minWidth}}}>
        <Box sx={{ mt:0.3, ml:0.3, mr:0.3, mb: 0.3, border:1, borderColor:{color}}}>
            <CardContent>
                <Typography sx={{ fontSize: 16, textAlign:'center', mb:1  }} color="text.secondary" gutterBottom>
                        {texto1}
                </Typography>
                <Typography variant="h5" component="div" sx={{ textAlign:'center', mb:2 }}>
                        {valor1}
                </Typography>
                <Typography sx={{ textAlign:'center', fontSize: 16, mb:1 }} color="text.secondary" gutterBottom>
                        {texto2}
                </Typography>
                <Typography component="div" sx={{ textAlign:'center', fontSize: 18 }}>
                        {valor2}
                </Typography>
            </CardContent>
            </Box>
            </Card>
    )
}

export default Tarjeta12Border