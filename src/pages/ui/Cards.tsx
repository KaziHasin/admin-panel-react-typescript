import Card from '../../components/ui/Card';

const Cards = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Cards</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Default Card */}
                <Card>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        Default Card
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        This is a default card with a shadow and rounded corners.
                    </p>
                </Card>

                {/* Bordered Card */}
                <Card variant="bordered">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        Bordered Card
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        This card has a border instead of a shadow.
                    </p>
                </Card>

                {/* Elevated Card */}
                <Card variant="elevated">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        Elevated Card
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        This card has a larger shadow for more elevation.
                    </p>
                </Card>

                {/* Card with Title */}
                <Card title="Card with Title">
                    <p className="text-gray-600 dark:text-gray-400">
                        This card has a title in the header section.
                    </p>
                </Card>

                {/* Card with Custom Content */}
                <Card>
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                <span className="text-blue-600 dark:text-blue-300 text-xl font-bold">
                                    JD
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                John Doe
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
                        </div>
                    </div>
                </Card>

                {/* Card with Footer */}
                <Card>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                Card with Footer
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                This card has a footer section with actions.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-2">
                            <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                                Cancel
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                                Save
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Cards; 