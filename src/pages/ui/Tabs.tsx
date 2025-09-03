import React from 'react';
import Tabs from '../../components/ui/Tabs';
import Card from '../../components/ui/Card';

const TabsDemo: React.FC = () => {
    const basicTabs = [
        {
            label: 'Account',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-medium">Account Settings</h3>
                    <p className="mt-2 text-gray-600">
                        Manage your account settings and preferences here.
                    </p>
                </div>
            ),
        },
        {
            label: 'Notifications',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-medium">Notification Preferences</h3>
                    <p className="mt-2 text-gray-600">
                        Control how you receive notifications and updates.
                    </p>
                </div>
            ),
        },
        {
            label: 'Security',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-medium">Security Settings</h3>
                    <p className="mt-2 text-gray-600">
                        Manage your security preferences and password.
                    </p>
                </div>
            ),
        },
    ];

    const cardTabs = [
        {
            label: 'Overview',
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4">
                        <h4 className="text-lg font-medium mb-2">Total Users</h4>
                        <p className="text-3xl font-bold">1,234</p>
                    </Card>
                    <Card className="p-4">
                        <h4 className="text-lg font-medium mb-2">Revenue</h4>
                        <p className="text-3xl font-bold">$45,678</p>
                    </Card>
                </div>
            ),
        },
        {
            label: 'Analytics',
            content: (
                <Card className="p-4">
                    <h4 className="text-lg font-medium mb-2">Monthly Statistics</h4>
                    <p className="text-gray-600">Your analytics data will appear here.</p>
                </Card>
            ),
        },
        {
            label: 'Reports',
            content: (
                <Card className="p-4">
                    <h4 className="text-lg font-medium mb-2">Generated Reports</h4>
                    <p className="text-gray-600">Your reports will be listed here.</p>
                </Card>
            ),
        },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Tabs Examples</h1>

            <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Basic Tabs</h2>
                <Card className="p-4">
                    <Tabs tabs={basicTabs} />
                </Card>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Tabs with Cards</h2>
                <Card className="p-4">
                    <Tabs tabs={cardTabs} />
                </Card>
            </div>
        </div>
    );
};

export default TabsDemo;
