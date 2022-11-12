import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

function TarjetaListaLink ({texto, lista, minWidth}) {
    const handleClick = (id) => {};
    return(
        <Card sx={{ minWidth:{minWidth}, pb:0, overflowY:'auto' }}>
            <CardContent>
                <Typography sx={{ mb:-0.2, fontSize: 16 }} color="text.secondary" gutterBottom>
                        {texto}
                </Typography>
                <PanelListaLista>
                    <List dense={false} sx={{mt:-1, ml:-1, mb:0, pb:0}}>
                    {lista.map((item, id)=>
                        (
                        <ListItem disablePadding sx= {{ml:0}} key={id}>
                            <ListItemButton onClick = {()=>handleClick (id)}>
                            <ListItemText 
                                primary={item}
                                primaryTypographyProps={{
                                    fontSize: 14,
                                    lineHeight: '15px',
                                    color:'primary',
                                    mb: '-15px'}}/>
                            </ListItemButton>
                        </ListItem>))}
                    </List>
                </PanelListaLista>
            </CardContent>
            </Card>
    )
}
const PanelListaLista = styled.div`
    display:grid;
    overflow-y:scroll;
    justify-content:start;
    align-items:start;
    width:100%;
    height:6.4rem;
`
export default TarjetaListaLink

    //                {lista.map((item) => (
    //    <Button key={item} variant="text" sx={{mb:-1.5, ml:0, pl:0, fontSize: 14}}>{item}</Button>
   //     ))} 