import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { salesData } from '../../data/salesData';
import { useMemo } from 'react';

ChartJS.register(Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const SalesChart = () => {
    // Calculate total sales for the last year
    const totalSales = useMemo(() => {
        return salesData.datasets[0].data.reduce((acc: number, current: number) => acc + current, 0);
    }, []);

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Disable maintaining aspect ratio
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Sales Over the Last 12 Months',
            },
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
        <div className="flex items-center flex-col justify-start space-y-4 px-4 pb-8 min-h-fit">
            {/* Total Sales Box */}
            <div className="bg-gray-100 text-blue-900 p-4 rounded-md shadow-md w-full max-w-md text-center">
                <h2 className="text-lg font-semibold">Total Sales (Last 12 Months)</h2>
                <p className="text-2xl font-bold">{totalSales}</p>
            </div>

            {/* Chart Title */}
            <h1 className="text-center text-xl sm:text-2xl font-bold">Monthly Sales</h1>

            {/* Bar Chart */}
            <div className="w-full" style={{ height: '50vh' }}>
                <div className="relative h-full w-full md:h-96">
                    <Bar options={options} data={salesData} />
                </div>
            </div>
        </div>
    );
};

export default SalesChart;
