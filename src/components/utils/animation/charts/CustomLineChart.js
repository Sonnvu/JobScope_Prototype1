import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CustomLineChart = ({dataIndex, aspectRation, legend}) => {

    const chartInstance = useRef(null);
    const chartContainer = useRef(null);

    useEffect(() => {

        // prepping data
        const data = [
            {   // Data set 1 including 1 lines
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
                datasets: [
                    {
                        label: 'My Dataset',
                        data: [65, 59, 42, 52, 56, 55, 40, 60],
                        fill: {
                            target: 'origin',
                            above: 'rgba(171,183,255,0.2)',   // Gradient area color
                        },
                        tension: 0.2,
                        borderColor: 'rgb(132,178,255)',   // Line color
                        borderWidth: 2,
                        pointBackgroundColor: 'rgb(155,187,255)', // Point color
                        pointHoverBorderColor: 'rgb(99,154,255)',        // Hover point border color
                    },
                ],
            },
            // Data set 2 including 2 lines
            {   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
                datasets: [
                    {
                        label: 'Mechanical Engineer',
                        data: [100, 59, 42, 52, 56, 55, 40, 90],
                        fill: {
                            target: 'origin',
                            above: 'rgba(171,183,255,0.2)',   // Gradient area color
                        },
                        tension: 0.2,
                        borderColor: 'rgb(132,178,255)',   // Line color
                        borderWidth: 2,
                        pointBackgroundColor: 'rgb(155,187,255)', // Point color
                        pointHoverBorderColor: 'rgb(99,154,255)',        // Hover point border color
                    },
                    {
                        label: 'PCB Designer',
                        data: [90, 80, 70, 90, 69, 38, 20, 30],
                        fill: {
                            target: 'origin',
                            above: 'rgba(187,132,255,0.2)',   // Gradient area color
                        },
                        tension: 0.2,
                        borderColor: 'rgb(148,132,255)',   // Line color
                        borderWidth: 2,
                        pointBackgroundColor: 'rgb(165,155,255)', // Point color
                        pointHoverBorderColor: 'rgb(133,99,255)',        // Hover point border color
                    }
                ],
            }
        ]


        const ctx = chartContainer.current.getContext('2d');
        if (ctx) {
            // Check if there is an existing Chart instance
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            // Create a new Chart instance
            chartInstance.current = new Chart(ctx, {
                type: 'line',
                data: data[dataIndex],
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            display: false
                        },
                    },
                    plugins: {
                        legend: {
                            display: legend, // Hide legend
                        },
                    },
                    elements: {
                        point: {
                            radius: 4, // Point radius
                            hoverRadius: 6, // Hover point radius
                        },
                    },
                    aspectRatio: aspectRation,
                },
            });
        }

        return () => {
            // Cleanup function to destroy the chart instance
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };

    }, [dataIndex, aspectRation, legend]);

    return <canvas ref={chartContainer} height="250px"/>;
};

export default CustomLineChart;
