import Paper from '@mui/material/Paper';
import { ResponsiveContainer, YAxis, ReferenceLine, LineChart, Line, CartesianGrid, Tooltip} from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) {
      try {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value} m/s`}</p>
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


function CurvaVelocidad ({datos, height}){
    return(
          <Paper elevation = {1}>
            <ResponsiveContainer height={height}>
              <LineChart 
                      data={datos}
                      margin={{ top: 20, right: 20, left: -20, bottom: 20 }}>
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical = {false}/>
                  <Line type="monotone" dataKey="vel" stroke="#8884d8" />
                  <ReferenceLine y={26.5} label="100 Km/h" stroke="red" strokeDasharray="3 3" ifOverflow="extendDomain" wrapperStyle={{ backgroundColor: '#f5f5f5'}}/>
                  <Tooltip content={<CustomTooltip />}/>
                  <YAxis/>
              </LineChart>
            </ResponsiveContainer>
          </Paper>
    )
}
export default CurvaVelocidad