import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

function SelectorEventos ({rango, setRango, height, width}) {
    
    const [dia_inicio_interno, setDiaInicioInterno] = React.useState(rango.inicio.slice(0,10))
    const [dia_fin_interno, setDiaFinInterno] = React.useState(rango.fin.slice(0,10))
    const [hora_inicio_interno, setHoraInicioInterno] = React.useState(rango.inicio.slice(11,19))
    const [hora_fin_interno, setHoraFinInterno] = React.useState(rango.fin.slice(11,19))
    const [num_max_interno, setNumMaxInterno] = React.useState(rango.num_max)
    
    const [todos, setTodos] = React.useState(false)
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
    const handleChangeTodos = (event) => {
        setDiaInicioInterno(rango.origen.slice(0,10))
        setHoraInicioInterno(rango.origen.slice(11,19))
        setDiaFinInterno(rango.hoy.slice(0,10))
        setDiaFinInterno(rango.hoy.slice(11,19))
        setNumMaxInterno(100)
        setTodos(event.target.checked)
        setColorBoton('error')
    };

    const handleClick = () => {
        const dt_inicio = `${dia_inicio_interno}T${hora_inicio_interno}Z`
        const dt_final = `${dia_fin_interno}T${hora_fin_interno}Z`
        setRango ({type:'ACTUALIZAR_RANGO', payload: {'inicio': dt_inicio, 'fin': dt_final, 'num_max': num_max_interno}})
        setColorBoton('primary')
    };

    return(
        <>
        <Card sx={{height:{height}, width:{width}}}>
            <CardContent>
                <TextField id="dia_inicio" onChange = {handleChangeDiaInicio} label="Fecha inicio"  value={dia_inicio_interno} sx = {{mt:0}}/>
                <TextField id="hora_inicio" onChange = {handleChangeHoraInicio} label="Hora inicio"  value={hora_inicio_interno} sx = {{mt:1.5}}/>
            </CardContent>
            <CardContent>      
                    <TextField id="dia_fin" onChange = {handleChangeDiaFin} label="Fecha fin"  value={dia_fin_interno} sx = {{ mt:-1}}/>
                    <TextField id="hora_fin" onChange = {handleChangeHoraFin} label="Hora fin"  value={hora_fin_interno} sx = {{mt:1.5}}/>
            </CardContent>
            <CardContent>
                    <TextField id="num_eventos" onChange = {handleChangeNum} label="Num. Max."  value={num_max_interno} sx = {{width:85, mt:1.5, mr:1}}/>
                    <Button size="medium" variant='outlined' color ={color_boton} onClick = {handleClick} sx ={{height:55, width:75 ,mt:1.5, mb:1, ml:0.1, mr:-3.7, color:{color_boton}}}>Aplicar</Button>
            </CardContent>
            <CardContent>
                <Typography sx={{ fontSize: 18, mt:-1, mb:-1 }} color="text.secondary" gutterBottom>
                    Seleccionar todos:
                    <Switch
                        checked={todos}
                        onChange={handleChangeTodos}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx = {{width:60, mt:0, mr:0}}/>
                </Typography>
            </CardContent>
        </Card>
        </>
    )
}

export default SelectorEventos