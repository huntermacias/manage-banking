'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2500, 3750],
                backgroundColor: ['#4C51BF', '#FBBF24', '#F87171'], // Updated colors for a more professional look
            },
        ],
        labels: ['Chase', 'Wells Fargo', 'Bank of America'],
    };

    return (
        <div className="text-center rounded-lg shadow-lg p-4">
            <Doughnut
                data={data}
                options={{
                    cutout: '80%',
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
        </div>
    );
};

export default DoughnutChart;
