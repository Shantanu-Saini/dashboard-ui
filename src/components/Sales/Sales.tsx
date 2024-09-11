import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { salesData } from '../../data/salesData';

ChartJS.register(Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const SalesChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales Over the Last 12 Months',
            }
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 300,
                }
            }
        }
    };

    return (
        <div className="flex items-center flex-col justify-center space-y-4 p-4 h-screen">
            <h1 className="text-center text-xl sm:text-2xl font-bold">Monthly Sales</h1>
            <div className="w-full h-full">
                <Bar options={options} data={salesData} />
            </div>
        </div>
    );
};

export default SalesChart;
