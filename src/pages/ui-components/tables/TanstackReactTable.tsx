import { useState, useEffect } from 'react';
import TanstackReactTableLayout from '../../../components/tables/TanstackReactTableLayout';
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
}

const TanstackReactTable = () => {
    const [data, setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(0);

    const columns = [
        {
            accessorKey: 'name',
            header: 'Name',
        },
        {
            accessorKey: 'email',
            header: 'Email',
        },
        {
            accessorKey: 'role',
            header: 'Role',
        },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: ({ row }: any) => (
                <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${row.original.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                        }`}
                >
                    {row.original.status}
                </span>
            ),
        },
    ];

    const fetchData = async (page: number = 0) => {
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            const mockData: User[] = Array.from({ length: 10 }, (_, i) => ({
                id: i + 1,
                name: `User ${i + 1}`,
                email: `user${i + 1}@example.com`,
                role: i % 2 === 0 ? 'Admin' : 'User',
                status: i % 3 === 0 ? 'Inactive' : 'Active',
            }));
            setData(mockData);
            setTotalItems(100); // Simulate total items
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handlePageChange = (page: number) => {
        fetchData(page);
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Basic Table</h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    A simple table with sorting, pagination, and status indicators.
                </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <TanstackReactTableLayout
                    data={data}
                    columns={columns}
                    isLoading={isLoading}
                    onPageChange={handlePageChange}
                    totalItems={totalItems}
                    pageSize={10}
                />
            </div>
        </div>
    );
};

export default TanstackReactTable; 