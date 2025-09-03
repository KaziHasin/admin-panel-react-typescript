import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'default' | 'danger' | 'success';
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    size = 'md',
    variant = 'default'
}) => {
    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl'
    };

    const variantClasses = {
        default: 'bg-white',
        danger: 'bg-red-50',
        success: 'bg-green-50'
    };

    const headerVariantClasses = {
        default: 'bg-gray-50',
        danger: 'bg-red-100',
        success: 'bg-green-100'
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className={`w-full ${sizeClasses[size]} transform overflow-hidden rounded-lg ${variantClasses[variant]} text-left align-middle shadow-xl transition-all`}
                            >
                                {title && (
                                    <Dialog.Title
                                        as="div"
                                        className={`${headerVariantClasses[variant]} px-6 py-4 flex items-center justify-between`}
                                    >
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            {title}
                                        </h3>
                                        <button
                                            type="button"
                                            className="rounded-md bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none"
                                            onClick={onClose}
                                        >
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </Dialog.Title>
                                )}
                                <div className="px-6 py-4">
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
