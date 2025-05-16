import React from 'react';
import HeaderLayout from './HeaderLayout';

interface PageLayoutProps {
    title: string;
    breadcrumbs?: {
        label: string;
        path: string;
    }[];
    children: React.ReactNode;
    actions?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
    title,
    breadcrumbs = [],
    children,
    actions
}) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header with Breadcrumbs and Title */}
            <HeaderLayout
                title={title}
                breadcrumbs={breadcrumbs}
                actions={actions}
            />
            {/* Main Content */}
            <div className="flex-grow container-fluid mt-2" style={{ minHeight: '100vh' }}>
                <div className="card bg-white p-3 border border-gray-200 w-full h-full rounded-xl">
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageLayout; 