import * as React from 'react';
//import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
//import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';


function SelectorEventosSlim ({rango, setRango, height, minWidth}) {
    
    const [dia_inicio_interno, setDiaInicioInterno] = React.useState(rango.inicio.slice(0,10))
    const [dia_fin_interno, setDiaFinInterno] = React.useState(rango.fin.slice(0,10))
    const [hora_inicio_interno, setHoraInicioInterno] = React.useState(rango.inicio.slice(11,19))
    const [hora_fin_interno, setHoraFinInterno] = React.useState(rango.fin.slice(11,19))
    const [num_max_interno, setNumMaxInterno] = React.useState(rango.num_max)
    
//  const [todos, setTodos] = React.useState(false)
    const [color_boton, setColorBoton] = React.useState('primary')

    const handleChangeDiaInicio = (event) => {
        setDiaInicioInterno(event.target.value)
        setColorBoton('error')
    };
    const handleChangeHoraInicio = (event) => {
        setHoraInicioInterno(event.target.value)
        setColorBoton('error')
    };
    const handleChangeDiaFin = (event) => {
        setDiaFinInterno(event.target.value)
        setColorBoton('error')
    };
    const handleChangeHoraFin = (event) => {
        setHoraFinInterno(event.target.value)
        setColorBoton('error')
    };
    const handleChangeNum = (event) => {
        setNumMaxInterno(event.target.value)
        setColorBoton('error')
    };

    const handleClick = (event) => {
        const dt_inicio = `${dia_inicio_interno}T${hora_inicio_interno}Z`
        const dt_final = `${dia_fin_interno}T${hora_fin_interno}Z`
        setRango ({type:'ACTUALIZAR_RANGO', payload: {'inicio': dt_inicio, 'fin': dt_final, 'num_max': num_max_interno}})
        setColorBoton('primary')
    };

    const width_inputs = parseInt(minWidth) -20

    return(
        <>
        <Paper elevation = {3} sx={{height:{height}, minWidth:{minWidth}, maxWidth:400}}>
            <CardContent>
                <TextField id="dia_inicio" onChange = {handleChangeDiaInicio} label="Fecha inicio"  value={dia_inicio_interno} sx = {{width:{width_inputs}, mt:0}}/>
                <TextField id="hora_inicio" onChange = {handleChangeHoraInicio} label="Hora inicio"  value={hora_inicio_interno} sx = {{width:{width_inputs}, mt:1.5}}/>
            </CardContent> 
            <CardContent>      
                    <TextField id="dia_fin" onChange = {handleChangeDiaFin} label="Fecha fin"  value={dia_fin_interno} sx = {{width:{width_inputs}, mt:-1}}/>
                    <TextField id="hora_fin" onChange = {handleChangeHoraFin} label="Hora fin"  value={hora_fin_interno} sx = {{width:{width_inputs}, mt:1.5}}/>
            </CardContent> 
            <CardContent> 
                    <TextField id="num_eventos" onChange = {handleChangeNum} label="Num."  value={num_max_interno} sx = {{width:50, mt:-0.5, mr:0}}/>
                    <Button size="medium" variant='outlined' onClick = {handleClick} color = {color_boton} sx ={{height:55, width:75, mt:-0.5, mb:0, ml:1, mr:0, color:{color_boton}}}>Aplicar</Button>
            </CardContent>
        </Paper>
        </>
    )
}

export default SelectorEventosSlim