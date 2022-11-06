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


function CurvaAceleraciones ({datos, lim_max, height}){
    return(
          <Paper elevation = {1}>
            <ResponsiveContainer height={height}>
              <LineChart 
                      data={datos}
                      margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical = {false}/>
                  <Line type="monotone" dataKey="a" stroke="orange" />
                  <Line type="monotone" dataKey="b" stroke="green" />
                  <Legend layout="horizontal" align="center" verticalAlign='bottom'/>
                  <ReferenceLine y={lim_max} label="Máx" stroke="red" strokeDasharray="3 3" ifOverflow="extendDomain"/>
                  <Tooltip content={<CustomTooltip />}/>
                  <YAxis/>
              </LineChart>
            </ResponsiveContainer>
          </Paper>
    )
}
export default CurvaAceleraciones