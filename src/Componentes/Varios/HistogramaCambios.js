import Card from '@mui/material/Paper';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid,Tooltip, Legend } from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) 
      {
      if(payload !== null) 
        {  
        return (
          <div className="custom-tooltip">
            <p className="label">{`Rueda A: ${payload[0].value}  cambios`}</p>
            <p className="label">{`Rueda B: ${payload[1].value}  cambios`}</p>
          </div>
        );
        }
      }
    return null;
  }

function HistogramaCambios ({datos, height}){

  return(
    <Card>
      <ResponsiveContainer height={height}>
        <BarChart 
                  data={datos} 
                  margin = {{
                    top: 20,
                    right: 0,
                    left: -20,
                    bottom: 5,}}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip content={<CustomTooltip />}/>
            <Legend layout="vertical" align="right" verticalAlign='middle'/>
            <Bar dataKey="A" fill="#8884d8" />
            <Bar dataKey="B" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
    );
}
export default HistogramaCambios

