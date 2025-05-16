import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-4 px-6 -mt-2 sm:-mt-4">
            <div className="container-fluid">
                <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </div>
                    <div className="text-sm text-gray-600">
                        Version 1.0.0
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 