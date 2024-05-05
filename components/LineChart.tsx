"use client"

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({ accounts }: any) => {
    // Simulating monthly data for demonstration
    const labels = ['January', 'February', 'March', 'April', 'May'];
    const dataSets = accounts.map((account: any, index: any) => ({
        label: account.name,
        data: Array.from({ length: 5 }, (_, i) => account.currentBalance + (index * 100) * Math.random()),
        borderColor: ['#0747A6', '#504AC9'][index],
        backgroundColor: ['#0747A6', '#504AC9'][index],
    }));

    const data = {
        labels,
        datasets: dataSets,
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Monthly Account Balance Trend',
            },
        },
    };

    return <Line data={data} options={options} />
}

export default LineChart;
