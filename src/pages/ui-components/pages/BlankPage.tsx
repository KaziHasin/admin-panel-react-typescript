import React from 'react';
import PageLayout from '../../../components/layout/PageLayout';

const BlankPage: React.FC = () => {
    const breadcrumbs = [
        { label: 'UI Components', path: '/ui' },
        { label: 'Blank Page', path: '/ui/pages/blank' }
    ];

    // Example actions
    const actions = (
        <div className="d-flex gap-2">
            <button className="btn btn-primary">
                <i className="bi bi-plus-lg me-1"></i>
                Add New
            </button>
            <button className="btn btn-outline-secondary">
                <i className="bi bi-download me-1"></i>
                Export
            </button>
        </div>
    );

    return (
        <PageLayout
            title="Example Page"
            breadcrumbs={breadcrumbs}
            actions={actions}
        >
            <div className="row">
                <div className="col-12">
                    <p>This is an example page using the PageLayout component.</p>
                    <p>You can add any content here and it will be wrapped in a clean, white card with subtle shadow.</p>
                </div>
            </div>
        </PageLayout>
    );
};

export default BlankPage; 