import Paper from '@mui/material/Paper';
import { ResponsiveContainer, YAxis, ReferenceLine, LineChart, Line, Legend, CartesianGrid,Tooltip} from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) {
      try {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value} º`}</p>
          </div>
        );
      }
      catch {
      return (
        <div className="custom-tooltip">
          <p className="label">{`sin valores`}</p>
        </div>
      );
      }
    }
  
    return null;
  }


function CurvaTemperaturas ({datos, height}){
    return(
          <Paper elevation = {1}>
            <ResponsiveContainer height={height}>
              <LineChart 
                      data={datos}
                      margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical = {false}/>
                  <Line type="monotone" dataKey="tempa" stroke="#8884d8" />
                  <Line type="monotone" dataKey="tempb" stroke="#82ca9d" />
                  <Legend layout="horizontal" align="center" verticalAlign='bottom'/>
                  <ReferenceLine y={50} label="50º" stroke="red" strokeDasharray="3 3" ifOverflow="extendDomain"/>
                    <ReferenceLine y={-10} label="-10º" stroke="blue" strokeDasharray="3 3" ifOverflow="extendDomain"/>
                  <Tooltip content={<CustomTooltip />}/>
                  <YAxis/>
              </LineChart>
            </ResponsiveContainer>
          </Paper>
    )
}
export default CurvaTemperaturas