import React from 'react';
import Alert from '../../components/ui/Alert';

const Alerts = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Alerts</h1>

            <div className="space-y-8">
                {/* Basic Alerts */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Basic Alerts
                    </h2>
                    <div className="space-y-4">
                        <Alert
                            variant="info"
                            message="This is an informational alert."
                        />
                        <Alert
                            variant="success"
                            message="This is a success alert."
                        />
                        <Alert
                            variant="warning"
                            message="This is a warning alert."
                        />
                        <Alert
                            variant="error"
                            message="This is an error alert."
                        />
                    </div>
                </div>

                {/* Alerts with Icons */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Alerts with Icons
                    </h2>
                    <div className="space-y-4">
                        <Alert
                            variant="info"
                            message="This is an informational alert with a custom icon."
                            title="Information"
                        />
                        <Alert
                            variant="success"
                            message="This is a success alert with a custom icon."
                            title="Success"
                        />
                        <Alert
                            variant="warning"
                            message="This is a warning alert with a custom icon."
                            title="Warning"
                        />
                        <Alert
                            variant="error"
                            message="This is an error alert with a custom icon."
                            title="Error"
                        />
                    </div>
                </div>

                {/* Alerts with Actions */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Alerts with Actions
                    </h2>
                    <div className="space-y-4">
                        <Alert
                            variant="info"
                            message="This is an informational alert with an action button."
                            title="Information"
                            dismissible
                        />
                        <Alert
                            variant="success"
                            message="This is a success alert with an action button."
                            title="Success"
                            dismissible
                        />
                        <Alert
                            variant="warning"
                            message="This is a warning alert with an action button."
                            title="Warning"
                            dismissible
                        />
                        <Alert
                            variant="error"
                            message="This is an error alert with an action button."
                            title="Error"
                            dismissible
                        />
                    </div>
                </div>

                {/* Alerts with Long Content */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Alerts with Long Content
                    </h2>
                    <div className="space-y-4">
                        <Alert
                            variant="info"
                            title="Important Update"
                            message="We've made some changes to our system that might affect your workflow. Please review the documentation for more information about these changes and how they might impact your daily operations."
                        />
                        <Alert
                            variant="warning"
                            title="System Maintenance"
                            message="Our system will be undergoing scheduled maintenance on Saturday, March 20th, from 2:00 AM to 4:00 AM UTC. During this time, some features may be temporarily unavailable. We apologize for any inconvenience this may cause."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alerts; 