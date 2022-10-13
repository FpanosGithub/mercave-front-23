import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { ResponsiveContainer, YAxis, LineChart, Line, CartesianGrid,Tooltip} from 'recharts';
import Tarjeta12 from './Tarjeta12';

function CustomTooltip({ payload, label, active }) {
  if (active) {
    if(payload !== null) {
      return (
        <div className="custom-tooltip">
          {payload[0].value > payload[1].value ?
          (
          <>
          <p className="label"> {`Rueda A: ${payload[0].value} m/s^2`} </p>
          <p className="label"> {`Rueda B: ${payload[1].value} m/s^2`} </p>
          </>
         )
          :
          (
          <>
          <p className="label"> {`Rueda B: ${payload[1].value} m/s^2`}</p>
          <p className="label"> {`Rueda A: ${payload[0].value} m/s^2`} </p>
          </>
          )}
        </div>
      );
    }
  }
  return null;
}

function GraficoAceleraciones ({detalle}){
    let valores = []
    if (detalle !== null) {
      valores = detalle.aax.map((valor, index)=>{return {'x': index, 'aax':valor, 'aay':detalle.aay[index], 'aaz':detalle.aaz[index], 'abx':detalle.abx[index], 'aby':detalle.aby[index], 'abz':detalle.abz[index]}})
    }
    return(
        <>
        <PanelGeneral>
          <PanelGráfico>
          <Tarjeta12
              texto1 = 'Aceler. m/s^2'
              valor1='Eje Z'
              texto2 = 'Ruedas'
              valor2='[A,B]'
                      />
            <Paper elevation = {2} sx={{minWidth:350, ml:0, mt:0, mb:0, mr:1}}> 
                <ResponsiveContainer minWidth={350}>
                  <LineChart data={valores}
                    margin={{ top: 20, right: 30, left: -20, bottom:20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical = {false}/>
                    <Tooltip content={<CustomTooltip/>}/>
                    <Line type="monotone" dataKey="aaz" stroke="#8884d8" />
                    <Line type="monotone" dataKey="abz" stroke="#8824d8" />
                    <YAxis/>
                  </LineChart>
                </ResponsiveContainer>
            </Paper>
          </PanelGráfico>
          <PanelGráfico>
          <Tarjeta12
              texto1 = 'Aceler. m/s^2'
              valor1='Eje Y'
              texto2 = 'Ruedas'
              valor2='[A,B]'
                      />
            <Paper elevation = {2} sx={{minWidth:350, ml:0, mt:0, mb:0, mr:1}}> 
                <ResponsiveContainer minWidth={350}>
                  <LineChart data={valores}
                    margin={{ top: 20, right: 30, left: -20, bottom:20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical = {false}/>
                    <Tooltip content={<CustomTooltip/>}/>
                    <Line type="monotone" dataKey="aay" stroke="#8884d8" />
                    <Line type="monotone" dataKey="aby" stroke="#8824d8" />
                    <YAxis/>
                  </LineChart>
                </ResponsiveContainer>
            </Paper>
          </PanelGráfico>
          <PanelGráfico>
          <Tarjeta12
              texto1 = 'Aceler. m/s^2'
              valor1='Eje X'
              texto2 = 'Ruedas'
              valor2='[A,B]'
                      />
            <Paper elevation = {2} sx={{minWidth:350, ml:0, mt:0, mb:0, mr:1}}> 
                <ResponsiveContainer minWidth={350}>
                  <LineChart data={valores}
                    margin={{ top: 20, right: 30, left: -20, bottom:20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical = {false}/>
                    <Tooltip content={<CustomTooltip/>}/>
                    <Line type="monotone" dataKey="aax" stroke="#8884d8" />
                    <Line type="monotone" dataKey="abx" stroke="#8824d8" />
                    <YAxis/>
                  </LineChart>
                </ResponsiveContainer>
            </Paper>
          </PanelGráfico>
        </PanelGeneral>
        </>
    );
}
const PanelGeneral = styled.div`
        display:grid;
        grid-template-rows: 1fr 1fr 1fr;
        gap:2px;
        width:100%;
`

const PanelGráfico = styled.div`
        display:grid;
        grid-template-columns: 0.15fr 1fr;
        gap:2px;
        width:100%;
        padding-bottom:2px;
`

export default GraficoAceleraciones