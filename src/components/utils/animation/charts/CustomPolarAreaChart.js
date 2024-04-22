import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js/auto';

const CustomPolarAreaChart = () => {
    const chartInstance = useRef(null);
    const chartContainer = useRef(null);

    useEffect(() => {
        const data = {
            labels: [
                'Red',
                'Green',
                'Yellow',
                'Grey',
                'Blue'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [30, 21, 35, 25, 33, 23, 36],
                backgroundColor: [

                    //Colorful
                    // 'rgb(255, 99, 132, 0.4)',
                    // 'rgb(75, 192, 192, 0.4)',
                    // 'rgb(255, 205, 86, 0.4)',
                    // 'rgb(201, 203, 207, 0.4)',
                    // 'rgb(54, 162, 235, 0.4)',
                    // 'rgb(255, 205, 86, 0.4)',
                    // 'rgb(107,159,255, 0.4)'

                    'rgba(102,127,255,0.4)',
                    'rgba(102,156,255,0.4)',
                    'rgba(62,64,192,0.4)',
                    'rgba(152,162,253,0.4)',
                    'rgba(94,150,255,0.4)',
                    'rgba(63,77,255,0.4)',
                    'rgba(185,196,255,0.4)',
                ]
            }]
        };

        // Start of chart creation
        const ctx = chartContainer.current.getContext('2d');
        if (ctx) {
            // Check if there is an existing Chart instance
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            // Create a new Chart instance
            chartInstance.current = new Chart(ctx, {
                type: "polarArea",
                data: data,
                options: {
                    indexAxis: 'y', // Display bars vertically
                    scales: {
                        x: {
                            beginAtZero: true,
                            display: false
                        },
                        y: {
                            display: false
                        },
                    },
                    plugins: {
                        legend: {
                            display: false, // Hide legend
                        },
                    },
                },
            });
        }

        return () => {
            // Cleanup function to destroy the chart instance
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };

    }, []);

    return <canvas ref={chartContainer} />;
};

export default CustomPolarAreaChart;
