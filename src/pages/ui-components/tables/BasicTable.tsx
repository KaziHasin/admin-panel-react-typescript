import Table from '../../../components/ui/Table';


interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
    lastLogin: string;
}

const BasicTable = () => {
    const users: User[] = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'Admin',
            status: 'active',
            lastLogin: '2024-03-15 10:30',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: 'User',
            status: 'active',
            lastLogin: '2024-03-14 15:45',
        },
        {
            id: 3,
            name: 'Bob Johnson',
            email: 'bob@example.com',
            role: 'Editor',
            status: 'inactive',
            lastLogin: '2024-03-13 09:15',
        },
        {
            id: 4,
            name: 'Alice Brown',
            email: 'alice@example.com',
            role: 'User',
            status: 'active',
            lastLogin: '2024-03-15 08:20',
        },
        {
            id: 5,
            name: 'Charlie Wilson',
            email: 'charlie@example.com',
            role: 'Editor',
            status: 'inactive',
            lastLogin: '2024-03-12 16:30',
        },
    ];

    const columns = [
        {
            header: 'Name',
            accessor: 'name' as keyof User,
        },
        {
            header: 'Email',
            accessor: 'email' as keyof User,
        },
        {
            header: 'Role',
            accessor: 'role' as keyof User,
        },
        {
            header: 'Status',
            accessor: 'status' as keyof User,
            render: (value: User[keyof User], item: User) => (
                <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${value === 'active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        }`}
                >
                    {value}
                </span>
            ),
        },
        {
            header: 'Last Login',
            accessor: 'lastLogin' as keyof User,
        },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Basic Table</h1>

            <div className="space-y-8">
                {/* Basic Table */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Basic Table
                    </h2>
                    <Table
                        columns={columns}
                        data={users}
                        itemsPerPage={5}
                        sortable
                    />
                </div>

                {/* Table with Custom Styling */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Table with Custom Styling
                    </h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                User Management
                            </h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Manage your users and their permissions
                            </p>
                        </div>
                        <Table
                            columns={columns}
                            data={users}
                            itemsPerPage={5}
                            sortable
                        />
                    </div>
                </div>

                {/* Table with Actions */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Table with Actions
                    </h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    User List
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    View and manage users
                                </p>
                            </div>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                                Add User
                            </button>
                        </div>
                        <Table
                            columns={[
                                ...columns,
                                {
                                    header: 'Actions',
                                    accessor: 'id' as keyof User,
                                    render: (value: User[keyof User], item: User) => (
                                        <div className="flex space-x-2">
                                            <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                                Edit
                                            </button>
                                            <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                                                Delete
                                            </button>
                                        </div>
                                    ),
                                },
                            ]}
                            data={users}
                            itemsPerPage={5}
                            sortable
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicTable; 