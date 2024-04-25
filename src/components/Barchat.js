import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1',
    articles: 54,
    views: 32,
    amt: 2400,
  },
  {
    name: '2',
    articles: 62,
    views: 46,
    amt: 2210,
  },
  {
    name: '3',
    articles: 32,
    views: 60,
    amt: 2290,
  },
  {
    name: '4',
    articles: 54,
    views: 40,
    amt: 2000,
  },
  {
    name: '5',
    articles: 22,
    views: 16,
    amt: 2181,
  },
  {
    name: '6',
    articles: 17,
    views: 32,
    amt: 2500,
  },
  {
    name: '7',
    articles: 38,
    views: 43,
    amt: 2100,
  },
  {
    name: '8',
    articles: 44,
    views: 14,
    amt: 2100,
  },
  {
    name: '9',
    articles: 26,
    views: 48,
    amt: 2100,
  },
];

const CustomLegend = ({ payload }) => (
  <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', marginBottom: '20px', textAlign: 'center'}}>
    {payload.map((entry, index) => (
      <li key={`item-${index}`} style={{ padding: '4px', display: 'inline-block', marginRight: '10px' }}>
        <span style={{ backgroundColor: entry.color, padding: '6px', borderRadius: '50%', marginRight: '5px', display: 'inline-block' }} /> {entry.value}
      </li>
    ))}
  </ul>
);

export default class BarChartComponent extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 20,
            bottom: 15,
          }}
          barSize={7}
        >
          <CartesianGrid vertical={false} stroke="#ccc" />
          <XAxis dataKey="name" label={{ value: 'Categories', position: 'insideBottom', offset: -10 ,}}/>
          <YAxis label={{ value: 'Metrics', angle: -90, position: 'insideLeft' }}/>
          <Tooltip />
          <Legend verticalAlign="bottom" content={<CustomLegend />} align='center'/>
          <Bar dataKey="articles" fill="#2E63EC" radius={[5, 5, 0, 0]} activeBar={<Rectangle stroke="white" />} />
          <Bar dataKey="views" fill="#581845" radius={[5, 5, 0, 0]} activeBar={<Rectangle stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

