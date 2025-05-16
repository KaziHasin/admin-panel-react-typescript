import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { UserIcon, EnvelopeIcon, PhoneIcon, BuildingOfficeIcon, CreditCardIcon, DocumentIcon } from '@heroicons/react/24/outline';
import FullCardForm from '../../components/forms/FullCardForm';

const Forms: React.FC = () => {
    const breadcrumbs = [
        { label: 'UI Components', path: '/ui' },
        { label: 'Forms', path: '/ui/forms' }
    ];

    return (
        <PageLayout
            title="Form Examples"
            breadcrumbs={breadcrumbs}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personal Information Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Personal Information</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                <div className="relative rounded-lg shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <UserIcon className="h-5 w-5 text-indigo-500" />
                                    </div>
                                    <input
                                        type="text"
                                        className="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-lg transition duration-150 ease-in-out"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <div className="relative rounded-lg shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <EnvelopeIcon className="h-5 w-5 text-indigo-500" />
                                    </div>
                                    <input
                                        type="email"
                                        className="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-lg transition duration-150 ease-in-out"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                <div className="relative rounded-lg shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <PhoneIcon className="h-5 w-5 text-indigo-500" />
                                    </div>
                                    <input
                                        type="tel"
                                        className="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-lg transition duration-150 ease-in-out"
                                        placeholder="+1 (555) 987-6543"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Profile Picture</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-500 transition duration-150 ease-in-out">
                                    <div className="space-y-1 text-center">
                                        <DocumentIcon className="mx-auto h-12 w-12 text-gray-400" />
                                        <div className="flex text-sm text-gray-600">
                                            <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                                <span>Upload a file</span>
                                                <input type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                                <div className="flex space-x-4">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="gender" value="male" />
                                        <span className="ml-2 text-gray-700">Male</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="gender" value="female" />
                                        <span className="ml-2 text-gray-700">Female</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="gender" value="other" />
                                        <span className="ml-2 text-gray-700">Other</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Additional Information Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Additional Information</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                                <div className="relative rounded-lg shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <BuildingOfficeIcon className="h-5 w-5 text-indigo-500" />
                                    </div>
                                    <input
                                        type="text"
                                        className="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-lg transition duration-150 ease-in-out"
                                        placeholder="1234 Main St"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Card Information</label>
                                <div className="relative rounded-lg shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <CreditCardIcon className="h-5 w-5 text-indigo-500" />
                                    </div>
                                    <input
                                        type="text"
                                        className="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-lg transition duration-150 ease-in-out"
                                        placeholder="Card number"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expiration Date</label>
                                    <input
                                        type="text"
                                        className="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-3 sm:text-sm border-gray-300 rounded-lg transition duration-150 ease-in-out"
                                        placeholder="MM/YY"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">CVC</label>
                                    <input
                                        type="text"
                                        className="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-3 sm:text-sm border-gray-300 rounded-lg transition duration-150 ease-in-out"
                                        placeholder="123"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferences</label>
                                <div className="space-y-2">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
                                        <span className="ml-2 text-gray-700">Receive email notifications</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
                                        <span className="ml-2 text-gray-700">Subscribe to newsletter</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
                                        <span className="ml-2 text-gray-700">Enable two-factor authentication</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes</label>
                                <textarea
                                    rows={4}
                                    className="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-3 sm:text-sm border-gray-300 rounded-lg transition duration-150 ease-in-out"
                                    placeholder="Any additional information..."
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <FullCardForm />
        </PageLayout>
    );
};

export default Forms;
