import { Chart, registerables } from 'chart.js';
import * as ChartGeo from 'chartjs-chart-geo';
import { useEffect, useRef } from "react";

// Register all necessary Chart.js components
Chart.register(...registerables);
Chart.register(ChartGeo.ChoroplethController, ChartGeo.ProjectionScale, ChartGeo.ColorScale, ChartGeo.GeoFeature);

const DemoGeoGraph = () => {
    const chartRef = useRef(null); // Create a ref to store the chart instance
    const canvasRef = useRef(null); // Create a ref for the canvas element

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        fetch('https://unpkg.com/us-atlas/states-10m.json')
            .then((r) => r.json())
            .then((us) => {
                const nation = ChartGeo.topojson.feature(us, us.objects.nation).features[0];
                const states = ChartGeo.topojson.feature(us, us.objects.states).features;

                if (chartRef.current) {
                    chartRef.current.destroy(); // Destroy the existing chart instance if it exists
                }

                const myChart = new Chart(canvas.getContext("2d"), {
                    type: 'choropleth',
                    data: {
                        labels: states.map((d) => d.properties.name),
                        datasets: [{
                            label: 'States',
                            outline: nation,
                            data: states.map((d) => ({ feature: d, value: Math.random() * 10 })),
                        }]
                    },
                    options: {
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            axis: 'x',
                            projection: 'albersUsa',
                            color: {
                                axis: 'x',
                                interpolate: (v) => {
                                    const colors = [
                                        'rgba(85,130,241,0.21)',
                                        'rgba(54,162,235,0.2)',
                                        'rgba(132,132,231,0.4)',
                                        'rgba(191,201,238,0.4)',
                                        'rgba(153, 102, 255, 0.4)',
                                        'rgba(156,209,255,0.4)',
                                    ];
                                    return colors[Math.floor(v * colors.length)];
                                },
                                legend: {
                                    position: 'bottom-right',
                                    align: 'right',
                                },
                            },
                        },
                        geo: {
                            colorScale: {
                                display: true,
                                position: 'bottom',
                                quantize: 5,
                                legend: {
                                    position: 'bottom',
                                },
                                // Define custom color scale
                                colors: [
                                    '#d73027',
                                    '#fc8d59',
                                    '#fee08b',
                                    '#d9ef8b',
                                    '#91cf60',
                                    '#1a9850'
                                ],
                            },
                        },
                    }
                });

                chartRef.current = myChart; // Store the new chart instance in the ref
            });

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy(); // Clean up the chart instance on component unmount
            }
        };
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} id='canvas' width="700" height="400"></canvas>
        </div>
    );
};

export default DemoGeoGraph;
