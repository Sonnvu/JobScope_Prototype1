import React, { useState, useEffect } from 'react';
import CustomBarChart from "./charts/CustomBarChart";
import CustomPolarAreaChart from "./charts/CustomPolarAreaChart";
import CustomLineChart from "./charts/CustomLineChart";

const ChartRotation = () => {
    const [currentChart, setCurrentChart] = useState(0);
    const charts = [
        <CustomBarChart aspectRatio={1.2} dataIndex={0} />,
        <CustomPolarAreaChart />,
        <CustomLineChart dataIndex={0} aspectRation={1.2} legend={false}/>
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentChart((prevChart) => (prevChart + 1) % charts.length);
        }, 3000); // Change chart every 3 seconds

        return () => clearInterval(interval);
    });

    return <div>{charts[currentChart]}</div>;
};

export default ChartRotation;
