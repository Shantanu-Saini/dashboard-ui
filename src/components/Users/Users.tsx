import { useState } from "react";
import { userData } from "../../data/userData";

const Users = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 7;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(userData.length / usersPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div className="rounded-lg border border-gray-200">
            <div className="overflow-x-auto rounded-t-lg">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead>
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {currentUsers.map((user) => (
                            <tr key={user.id}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user.id}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.name}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="rounded-b-lg border-t border-gray-200 px-4 py-2 bg-gray-200">
                <ol className="flex justify-end gap-1 text-xs font-medium">
                    <li>
                        <button
                            onClick={goToPrevPage}
                            disabled={currentPage === 1}
                            className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
                        >
                            <span className="sr-only">Prev Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </li>

                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index}>
                            <button
                                onClick={() => setCurrentPage(index + 1)}
                                className={`block size-8 rounded border ${currentPage === index + 1 ? ' bg-[#0134ec] text-white' : 'border-gray-100 bg-white text-gray-900'}`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}

                    <li>
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
                        >
                            <span className="sr-only">Next Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Users;
