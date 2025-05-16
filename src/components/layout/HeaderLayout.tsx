import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from "@heroicons/react/24/outline";
interface HeaderLayoutProps {
    title: string;
    breadcrumbs?: {
        label: string;
        path: string;
    }[];
    actions?: React.ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ title, breadcrumbs = [] }) => {
    return (
        <div className="bg-white p-3 border-gray-200 w-full rounded-md -mt-2 sm:-mt-4">
            <div className="flex justify-between align-items-center">
                <h1 className="h4 mb-0 font-medium w-3/4 sm:w-auto">{title}</h1>
                {/* Breadcrumbs */}
                <nav aria-label="breadcrumb" className="overflow-x-auto">
                    <ol className="breadcrumb mb-0 flex whitespace-nowrap">
                        <li className="breadcrumb-item flex items-center">
                            <Link to="/" className="text-decoration-none">
                                <i className="bi bi-house-door me-1"></i>
                                Home
                            </Link>
                            {breadcrumbs.length > 0 && (
                                <ChevronRightIcon className="mx-2 text-gray-400 w-4 h-4" />
                            )}
                        </li>
                        {breadcrumbs.map((crumb, index) => (
                            <li
                                key={index}
                                className={`breadcrumb-item flex items-center ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
                            >
                                {index === breadcrumbs.length - 1 ? (
                                    crumb.label
                                ) : (
                                    <>
                                        <Link to={crumb.path} className="text-decoration-none">
                                            {crumb.label}
                                        </Link>
                                        <ChevronRightIcon className="mx-2 text-gray-400 w-4 h-4" />
                                    </>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default HeaderLayout; 