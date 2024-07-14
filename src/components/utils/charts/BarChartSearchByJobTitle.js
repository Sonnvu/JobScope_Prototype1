import React, { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';

export default function BarChartSearchByJobTitle({ data, aspectRatio }) {
    const chartInstance = useRef(null);
    const chartContainer = useRef(null);

    useEffect(() => {
        if (!data) return;

        const labels = data.map((item) => item.skillName);
        const frequencies = data.map((item) => item.frequency);

        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: "Skills",
                    data: frequencies,
                    backgroundColor: [
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
        };

        const ctx = chartContainer.current.getContext("2d");
        if (ctx) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(ctx, {
                type: "bar",
                data: chartData,
                options: {
                    indexAxis: "y",
                    scales: {
                        x: {
                            beginAtZero: true,
                            display: false,
                        },
                        y: {
                            grid: {
                                display: false,
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    elements: {
                        bar: {
                            borderWidth: 0,
                        },
                    },
                    aspectRatio: aspectRatio,
                },
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data, aspectRatio]);

    return <canvas ref={chartContainer} />;
}
