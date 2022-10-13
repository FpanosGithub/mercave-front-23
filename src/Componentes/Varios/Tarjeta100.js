import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Tarjeta100 ({texto, valor1, valor2, unidades1, unidades2, minWidth}) {
    return(
        <Box sx={{ minWidth: {minWidth}, pl:0, pr:0}}>
            <CardContent>
                <Card>
                <CardContent>
                        <Typography sx={{ fontSize: 16, mt:-1, mb:-1 }} color="text.secondary" gutterBottom>
                                {texto}
                        </Typography>
                </CardContent>
                </Card>
                <Card>
                <CardContent>
                        <Typography sx={{ fontSize: 16, mt:-1, mb:-1  }} color="text.primary">
                                {valor1} &nbsp; {unidades1}
                        </Typography>
                </CardContent>
                </Card>
                <Card>
                <CardContent>
                        <Typography sx={{ fontSize: 16, mt:-1, mb:-1 }} color="text.primary">
                                {valor2} &nbsp; {unidades2}
                        </Typography>
                </CardContent>
                </Card>
            </CardContent>
            </Box>
    )
}

export default Tarjeta100