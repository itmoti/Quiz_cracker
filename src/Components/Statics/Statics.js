
import { Tooltip } from 'chart.js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';


const Statics = () => {
    const databfr = useLoaderData();
  const data = databfr.data;
console.log(data)
    return (
        <div className='center'>
           
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
         <h1>Our questions chart</h1>
        </div>
    );
};

export default Statics;