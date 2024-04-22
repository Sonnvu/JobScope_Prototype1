import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js/auto';

const CustomBarChart = ({aspectRatio , dataIndex}) => {
    const chartInstance = useRef(null);
    const chartContainer = useRef(null);

    useEffect(() => {

        // Prepping data
        const data = [
            {
                labels: ['C++', 'C', 'VHDL', 'Verilog', 'Assembly', 'TCP/IP', "UART", 'RTOs'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [50, 40, 35, 20, 15, 12, 5, 2],
                        backgroundColor: [
                            // Colorful
                            // 'rgba(255, 99, 132, 0.4)',
                            // 'rgba(54, 162, 235, 0.4)',
                            // 'rgba(255, 206, 86, 0.4)',
                            // 'rgba(75, 192, 192, 0.4)',
                            // 'rgba(153, 102, 255, 0.4)',
                            // 'rgba(255, 159, 64, 0.4)',

                            // Blue Theme
                            'rgba(85,130,241,0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(180,180,255,0.4)',
                            'rgba(191,201,238,0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                        ],
                        borderWidth: 1,
                        borderRadius: 3,
                    },
                ],
            },
            {
                labels: ['C++', 'C', 'VHDL', 'Verilog', 'Assembly'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [50, 40, 35, 20, 15, 30, 13],
                        backgroundColor: [
                            'rgba(85,130,241,0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(132,132,231,0.4)',
                            'rgba(191,201,238,0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(255, 159, 64, 0.4)',
                        ],
                        borderWidth: 1,
                        borderRadius: 3,
                    },
                ],
            },
        ]

        const ctx = chartContainer.current.getContext('2d');
        if (ctx) {
            // Check if there is an existing Chart instance
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            // Create a new Chart instance
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: data[dataIndex],
                options: {
                    indexAxis: 'y', // Display bars vertically
                    scales: {
                        x: {
                            beginAtZero: true,
                            display: false
                        },
                        y: {
                            grid: {
                                display: false
                            }
                        },
                    },
                    plugins: {
                        legend: {
                            display: false, // Hide legend
                        },
                    },
                    elements: {
                        bar: {
                            borderWidth: 0, // Hide bar borders
                        },
                    },
                    aspectRatio: aspectRatio,
                },
            });
        }

        return () => {
            // Cleanup function to destroy the chart instance
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };

    }, [aspectRatio, dataIndex]);

    return <canvas ref={chartContainer} />;
};

export default CustomBarChart;
