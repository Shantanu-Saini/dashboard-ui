import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { categoryData } from '../../data/categoriesData';
import { useMemo } from 'react';

ChartJS.register(Tooltip, Legend, ArcElement);

const Categories = () => {
    // Calculate total number of products
    const totalProducts = useMemo(() => {
        return categoryData.datasets[0].data.reduce((acc: number, current: number) => acc + current, 0);
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    padding: 10,
                }
            },
            title: {
                display: true,
                text: "Products Category Distribution",
            }
        }
    };

    return (
        <div className="flex items-center flex-col justify-center space-y-4 p-4">
            {/* Total Products Box */}
            <div className="bg-green-100 text-green-900 p-4 rounded-md shadow-md w-full max-w-md text-center">
                <h2 className="text-lg font-semibold">Total Products Sold</h2>
                <p className="text-2xl font-bold">{totalProducts}</p>
            </div>

            {/* Chart Title */}
            <h1 className="text-center text-xl sm:text-2xl font-bold">Product Categories</h1>

            {/* Pie Chart */}
            <div className="w-full sm:w-1/2">
                <Pie options={options} data={categoryData} />
            </div>
        </div>
    );
};

export default Categories;
