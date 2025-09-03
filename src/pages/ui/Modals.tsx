import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const ModalsDemo: React.FC = () => {
    const [basicModalOpen, setBasicModalOpen] = useState(false);
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const [dangerModalOpen, setDangerModalOpen] = useState(false);
    const [formModalOpen, setFormModalOpen] = useState(false);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Modal Examples</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Modal */}
                <Card className="p-4">
                    <h2 className="text-lg font-medium mb-4">Basic Modal</h2>
                    <Button onClick={() => setBasicModalOpen(true)}>Open Basic Modal</Button>
                    <Modal
                        isOpen={basicModalOpen}
                        onClose={() => setBasicModalOpen(false)}
                        title="Basic Modal"
                    >
                        <p className="text-gray-600">
                            This is a basic modal with default styling. It includes a header with a close button
                            and this content area.
                        </p>
                        <div className="mt-4 flex justify-end">
                            <Button onClick={() => setBasicModalOpen(false)}>Close</Button>
                        </div>
                    </Modal>
                </Card>

                {/* Success Modal */}
                <Card className="p-4">
                    <h2 className="text-lg font-medium mb-4">Success Modal</h2>
                    <Button onClick={() => setSuccessModalOpen(true)} variant="success">
                        Open Success Modal
                    </Button>
                    <Modal
                        isOpen={successModalOpen}
                        onClose={() => setSuccessModalOpen(false)}
                        title="Success!"
                        variant="success"
                    >
                        <p className="text-gray-600">
                            Your action was completed successfully! This modal uses the success variant
                            for positive feedback.
                        </p>
                        <div className="mt-4 flex justify-end">
                            <Button onClick={() => setSuccessModalOpen(false)} variant="success">
                                Got it
                            </Button>
                        </div>
                    </Modal>
                </Card>

                {/* Danger Modal */}
                <Card className="p-4">
                    <h2 className="text-lg font-medium mb-4">Danger Modal</h2>
                    <Button onClick={() => setDangerModalOpen(true)} variant="danger">
                        Open Danger Modal
                    </Button>
                    <Modal
                        isOpen={dangerModalOpen}
                        onClose={() => setDangerModalOpen(false)}
                        title="Confirm Delete"
                        variant="danger"
                        size="sm"
                    >
                        <p className="text-gray-600">
                            Are you sure you want to delete this item? This action cannot be undone.
                        </p>
                        <div className="mt-4 flex justify-end space-x-2">
                            <Button onClick={() => setDangerModalOpen(false)} variant="secondary">
                                Cancel
                            </Button>
                            <Button onClick={() => setDangerModalOpen(false)} variant="danger">
                                Delete
                            </Button>
                        </div>
                    </Modal>
                </Card>

                {/* Different Sizes Modal */}
                <Card className="p-4">
                    <h2 className="text-lg font-medium mb-4">Size Variants</h2>
                    <Button onClick={() => setFormModalOpen(true)} variant="primary">
                        Open Large Modal
                    </Button>
                    <Modal
                        isOpen={formModalOpen}
                        onClose={() => setFormModalOpen(false)}
                        title="User Profile"
                        size="xl"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end space-x-2">
                            <Button onClick={() => setFormModalOpen(false)} variant="secondary">
                                Cancel
                            </Button>
                            <Button onClick={() => setFormModalOpen(false)} variant="primary">
                                Save
                            </Button>
                        </div>
                    </Modal>
                </Card>
            </div>
        </div>
    );
};

export default ModalsDemo;
