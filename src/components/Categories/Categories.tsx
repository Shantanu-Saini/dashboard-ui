import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { categoryData } from '../../data/categoriesData';

ChartJS.register(Tooltip, Legend, ArcElement);

const Categories = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
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
        <div className="flex items-center flex-col justify-center space-y-4">
            <h1 className="text-center text-xl sm:text-2xl font-bold">Product Categories</h1>
            <div className="w-full sm:w-1/2">
                <Pie options={options} data={categoryData} />
            </div>
        </div>
    );
};

export default Categories;
