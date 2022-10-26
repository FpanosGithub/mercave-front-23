import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SelectorEventosSlim from '../Varios/SelectorEventosSlim';



function LeyendaMapa ({ver_todos, onSeleccion, onHoverCirculaciones, codigo_vagon,loading, error, rango, setRango}){
    
    let titulo1 = ''
    let titulo2 = ''
    let boton_todos = false
    if (ver_todos || loading || error)
        {
        titulo1 = 'Situación de'
        titulo2 = 'todos los vagones'
        }
    else {
        titulo1 = 'Circulaciones'
        titulo2 = `${codigo_vagon}`
        boton_todos = true
    }
    
    function HandleClick () {
        onSeleccion(true)
        onHoverCirculaciones(-1)
    }
    
    return(
        <>
        <PanelGeneral>
        <Paper elevation = {2} sx={{m:0.4, p:1, minHeight:380, width:160}}>
        <PanelLeyenda>
            <Typography color="text.secondary" sx={{fontSize: 18, textAlign:'center', mt:1, mb:0}}>
                    Mapa
            </Typography> 
            <Typography color="text.primary" style={{color:"#255e24"}} sx={{fontSize: 16, textAlign:'center', mt:1, mb:0, mr:2, ml:2}}>
                    {titulo1}
            </Typography> 
            <Typography color="text.primary" style={{color:"#255e24"}} sx={{fontSize: 16, textAlign:'center', mt:0, mb:1, mr:2, ml:2}}>
                    {titulo2}
            </Typography> 
            {loading ?
                (<Typography color="text.secondary" style={{color:"#255e24"}} sx={{fontSize: 16, textAlign:'center', mt:0, mb:2, mr:2, ml:2}}>
                    cargando datos de las circulaciones del vagón: {codigo_vagon}
                </Typography>)
                : (<></>)
            } 
            {error ?
                (<Typography color="text.secondary" style={{color:"#255e24"}} sx={{fontSize: 16, textAlign:'center', mt:0, mb:2, mr:2, ml:2}}>
                    Error cargando circulaciones del vagón: {codigo_vagon}: {error}
                </Typography>)
                : (<></>)
            } 
            {boton_todos ?
                (
                <>
                <SelectorEventosSlim
                    rango = {rango}
                    setRango = {setRango}
                    minWidth = {170}/>
                <Button size="medium" variant="outlined" onClick = {HandleClick} sx ={{mt:1, mb:0, pl:2, pr:2, color:'green', height:40}}>Ver todos</Button>
                </>
                )
                : (<></>)
            }  
        </PanelLeyenda>  
        </Paper>    
        </PanelGeneral>  
        </>
    );
}
const PanelGeneral = styled.div`
    display:grid;
    height: 100%;
`
const PanelLeyenda = styled.div`
    display:grid;
    grid-template-rows: 0fr 0fr 0fr 0fr 0fr 0fr;
    justify-content:space-evenly;
    gap:1px;
    height: 100%;
`
export default LeyendaMapa