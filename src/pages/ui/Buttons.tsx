import React from 'react';
import Button from '../../components/ui/Button';
import {
    PlusIcon,
    ArrowPathIcon,
    TrashIcon,
    PencilIcon,
    ArrowDownTrayIcon,
    ArrowUpTrayIcon,
} from '@heroicons/react/24/outline';

const Buttons = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Buttons</h1>

            <div className="space-y-8">
                {/* Basic Buttons */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Basic Buttons
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="success">Success</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="info">Info</Button>
                    </div>
                </div>

                {/* Button Sizes */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Button Sizes
                    </h2>
                    <div className="flex flex-wrap items-center gap-4">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </div>

                {/* Buttons with Icons */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Buttons with Icons
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Button leftIcon={<PlusIcon className="w-5 h-5" />}>
                            Add New
                        </Button>
                        <Button
                            variant="success"
                            leftIcon={<ArrowPathIcon className="w-5 h-5" />}
                        >
                            Refresh
                        </Button>
                        <Button
                            variant="danger"
                            leftIcon={<TrashIcon className="w-5 h-5" />}
                        >
                            Delete
                        </Button>
                        <Button
                            variant="warning"
                            leftIcon={<PencilIcon className="w-5 h-5" />}
                        >
                            Edit
                        </Button>
                    </div>
                </div>

                {/* Buttons with Right Icons */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Buttons with Right Icons
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Button rightIcon={<ArrowDownTrayIcon className="w-5 h-5" />}>
                            Download
                        </Button>
                        <Button
                            variant="success"
                            rightIcon={<ArrowUpTrayIcon className="w-5 h-5" />}
                        >
                            Upload
                        </Button>
                    </div>
                </div>

                {/* Loading Buttons */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Loading Buttons
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Button isLoading>Loading</Button>
                        <Button variant="success" isLoading>
                            Saving
                        </Button>
                        <Button variant="danger" isLoading>
                            Deleting
                        </Button>
                    </div>
                </div>

                {/* Disabled Buttons */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Disabled Buttons
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Button disabled>Disabled</Button>
                        <Button variant="success" disabled>
                            Disabled
                        </Button>
                        <Button variant="danger" disabled>
                            Disabled
                        </Button>
                    </div>
                </div>

                {/* Full Width Buttons */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Full Width Buttons
                    </h2>
                    <div className="space-y-4">
                        <Button fullWidth>Full Width Button</Button>
                        <Button variant="success" fullWidth>
                            Full Width Success
                        </Button>
                        <Button variant="danger" fullWidth>
                            Full Width Danger
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buttons; 