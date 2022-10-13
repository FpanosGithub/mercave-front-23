import * as React from 'react';
//import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
//import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';


function SelectorEventosVagon ({rango, setRango, height, width}) {
    
    const [inicio_interno, setInicioInterno] = React.useState(rango.inicio)
    const [fin_interno, setFinInterno] = React.useState(rango.fin)
    const [num_max_interno, setNumMaxInterno] = React.useState(rango.num_max)
    
//  const [todos, setTodos] = React.useState(false)
    const [color_boton, setColorBoton] = React.useState('primary')

    const handleChangeInicio = (event) => {
        setInicioInterno(event.target.value)
        setColorBoton('error')
    };
    const handleChangeFin = (event) => {
        setFinInterno(event.target.value)
        setColorBoton('error')
    };
    const handleChangeNum = (event) => {
        setNumMaxInterno(event.target.value)
        setColorBoton('error')
    };
    //const handleChangeTodos = (event) => {
    //    setInicioInterno(rango.origen)
    //    setFinInterno(rango.hoy)
    //    setNumMaxInterno(100)
    //    setTodos(event.target.checked)
    //    setColorBoton('error')
    //};

    const handleClick = (event) => {
        setRango ({type:'ACTUALIZAR_RANGO', payload: {'inicio': inicio_interno, 'fin': fin_interno, 'num_max': num_max_interno}})
        setColorBoton('primary')
    };

    const width_inputs = parseInt(width) -20

    return(
        <>
        <Paper elevation = {3} sx={{height:{height}, width:{width}}}>
            <CardContent>
                    <TextField id="fecha_inicio" onChange = {handleChangeInicio} label="Fecha inicio"  value={inicio_interno.slice(0,10)} sx = {{width:{width_inputs}, mt:0}}/>
                    <TextField id="fecha_fin" onChange = {handleChangeFin} label="Fecha fin"  value={fin_interno.slice(0,10)} sx = {{width:{width_inputs}, mt:1.5}}/>
                    <TextField id="num_eventos" onChange = {handleChangeNum} label="Num."  value={num_max_interno} sx = {{width:50, mt:1.5, mr:0}}/>
    {/*             <Switch
                        checked={todos}
                        onChange={handleChangeTodos}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx = {{width:50, mt:1.5, mr:0}}/>
    */}                    
                        <Button size="medium" variant='outlined' onClick = {handleClick} color = {color_boton} sx ={{height:55, width:70, mt:1.5, mb:0, ml:1, mr:0, color:{color_boton}}}>Aplicar</Button>

            </CardContent>
        </Paper>
        </>
    )
}

export default SelectorEventosVagon