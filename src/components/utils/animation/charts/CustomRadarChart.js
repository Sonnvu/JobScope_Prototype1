import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js/auto';

const CustomRadarChart = ({index}) => {
    const chartInstance = useRef(null);
    const chartContainer = useRef(null);

    useEffect(() => {

        // Prepping data
        const data = [
            {
                labels: [
                    'Parallel Programming',
                    'AI/ML',
                    'C++',
                    'C',
                    'VHDL',
                    'Assembly',
                    'RTOs'
                ],
                datasets: [{
                    label: 'Embedded Engineer',
                    data: [65, 59, 90, 81, 56, 55, 40],
                    fill: true,
                    // backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    // borderColor: 'rgb(255, 99, 132)',
                    // pointBackgroundColor: 'rgb(255, 99, 132)',
                    // pointBorderColor: '#fff',
                    // pointHoverBackgroundColor: '#fff',
                    // pointHoverBorderColor: 'rgb(255, 99, 132)'

                    //blue
                    backgroundColor: 'rgba(153,167,224,0.2)',
                    borderColor: 'rgb(107,123,252)',
                    pointBackgroundColor: 'rgb(89,107,203)',
                    pointBorderColor: '#6c82e7',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(93,100,194)'
                }]
            },
            {
                labels: [
                    'Java',
                    'C#',
                    '.NET',
                    'Docker',
                    'React',
                    'Angular',
                    'Spring Boot'
                ],
                datasets: [{
                    label: 'Software Engineer',
                    data: [28, 48, 40, 19, 96, 27, 100],
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }]
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
                type: 'radar',
                data: data[index],
                options: {
                    scales: {
                        r: {
                            angleLines: {
                                display: false
                            },
                            min: 0,
                            max: 100,
                            ticks: {
                                callback: function() {return ""},
                                backdropColor: "rgba(0, 0, 0, 0)"
                            }
                        }
                    },
                    elements: {
                        line: {
                            borderWidth: 3
                        }
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

    }, [index]);

    return <canvas ref={chartContainer}/>;
};

export default CustomRadarChart;
