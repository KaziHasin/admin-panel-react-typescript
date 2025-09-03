import {
    HomeIcon,
    UsersIcon,
    ChartBarIcon,
    CogIcon,
    DocumentTextIcon,
    ShoppingCartIcon,
    UserGroupIcon,
    UserCircleIcon,
    ChartPieIcon,
    ChartBarSquareIcon,
    DocumentDuplicateIcon,
    DocumentMagnifyingGlassIcon,
    Cog6ToothIcon,
    KeyIcon,
    Square2StackIcon,
    TableCellsIcon,
    ExclamationTriangleIcon,
    ArrowRightOnRectangleIcon,
    UserPlusIcon,
} from '@heroicons/react/24/outline';

export interface MenuItem {
    title: string;
    path: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
    {
        title: 'Dashboard',
        icon: HomeIcon,
        path: '/',
    },
    {
        title: 'UI Components',
        icon: Square2StackIcon,
        path: '/ui',
        children: [
            {
                title: 'Pages',
                icon: DocumentTextIcon,
                path: '/ui/pages',
                children: [
                    {
                        title: 'Blank Page',
                        icon: DocumentTextIcon,
                        path: '/ui/pages/blank',
                    },
                ],
            },
            {
                title: 'Forms',
                icon: Square2StackIcon,
                path: '/ui/forms',
            },
            {
                title: 'Cards',
                icon: Square2StackIcon,
                path: '/ui/cards',
            },
            {
                title: 'Tables',
                icon: TableCellsIcon,
                path: '/ui/tables',
                children: [
                    {
                        title: 'Basic Table',
                        icon: TableCellsIcon,
                        path: '/ui/tables/basic',
                    },
                    {
                        title: 'Tanstack React Table',
                        icon: TableCellsIcon,
                        path: '/ui/tables/transtck-react-table',
                    },
                    {
                        title: 'Data Table',
                        icon: TableCellsIcon,
                        path: '/ui/tables/data-table',
                    },
                    {
                        title: 'Advanced Table',
                        icon: TableCellsIcon,
                        path: '/ui/tables/advanced',
                    },

                ],

            },
            {
                title: 'Alerts',
                icon: ExclamationTriangleIcon,
                path: '/ui/alerts',
            },
            {
                title: 'Buttons',
                icon: Square2StackIcon,
                path: '/ui/buttons',
            },
            {
                title: 'Tabs',
                icon: Square2StackIcon,
                path: '/ui/tabs',
            },
            {
                title: 'Modals',
                icon: Square2StackIcon,
                path: '/ui/modals',
            },
        ],
    },
    {
        title: 'Users',
        icon: UsersIcon,
        path: '/users',
        children: [
            {
                title: 'All Users',
                icon: UserGroupIcon,
                path: '/users/all',
            },
            {
                title: 'User Profile',
                icon: UserCircleIcon,
                path: '/users/profile',
            },
        ],
    },
    {
        title: 'Analytics',
        icon: ChartBarIcon,
        path: '/analytics',
        children: [
            {
                title: 'Overview',
                icon: ChartPieIcon,
                path: '/analytics/overview',
            },
            {
                title: 'Reports',
                icon: ChartBarSquareIcon,
                path: '/analytics/reports',
            },
        ],
    },
    {
        title: 'Products',
        icon: ShoppingCartIcon,
        path: '/products',
    },
    {
        title: 'Documents',
        icon: DocumentTextIcon,
        path: '/documents',
        children: [
            {
                title: 'All Documents',
                icon: DocumentDuplicateIcon,
                path: '/documents/all',
            },
            {
                title: 'Search',
                icon: DocumentMagnifyingGlassIcon,
                path: '/documents/search',
            },
        ],
    },
    {
        title: 'Authentication',
        icon: KeyIcon,
        path: '/auth',
        children: [
            {
                title: 'Login',
                icon: ArrowRightOnRectangleIcon,
                path: '/login',
            },
            {
                title: 'Register',
                icon: UserPlusIcon,
                path: '/register',
            },
        ],
    },
    {
        title: 'Settings',
        icon: CogIcon,
        path: '/settings',
        children: [
            {
                title: 'General',
                icon: Cog6ToothIcon,
                path: '/settings/general',
            },
            {
                title: 'Security',
                icon: KeyIcon,
                path: '/settings/security',
            },
        ],
    },
]; 