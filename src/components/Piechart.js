import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Total Dislikes', value: 120 },
  { name: 'Total Comments', value: 440 },
  { name: 'Total Articles', value: 1350 },
  { name: 'Total Likes', value: 340 },
];

const COLORS = ['#747272', '#581845', '#DE95C8', '#2E63EC'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomLegend = ({ payload }) => (
  <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', marginBottom: '20px', textAlign: 'center',  display:'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
    {payload.map((entry, index) => (
      <li key={`item-${index}`} style={{ padding: '4px', display: 'flex', marginRight: '10px', justifyContent:'center', alignItems:'start' }}>
        <span style={{ backgroundColor: entry.color, padding: '6px', borderRadius: '50%', marginRight: '5px', display: 'inline-block' }} /> {entry.value}
      </li>
    ))}
  </ul>
);


export default class Piechart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" content={<CustomLegend />} align='center'/>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
