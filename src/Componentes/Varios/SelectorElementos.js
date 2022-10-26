import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function SelectorElementos({ tipo_elementos, elementos_lista, elementos_seleccionados, setElementosSeleccionados, setColorBoton, minWidth}) {
  
  const [value, setValue] = React.useState(elementos_seleccionados[0])
  const lista = [...elementos_lista]
  
  const handleChange = (newValue) => {
    setValue(newValue)
    setColorBoton('error')
    if (!newValue) {setElementosSeleccionados([])}
    else {setElementosSeleccionados([newValue])}
  };

  let controlled_value = null
  if (value) {controlled_value = value}

  return (
    <Autocomplete
        disablePortal
        options={lista}
        sx={{ minWidth: {minWidth}, mr:1 }}
        id="selector_elementos"
        value = {controlled_value}
        onChange={(event, newValue) => {handleChange(newValue);}}
        renderInput={(params) => (
          <TextField {...params} label={tipo_elementos} />
        )}
      />
  );
}
