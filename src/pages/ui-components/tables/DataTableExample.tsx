import React from 'react';
import DataTable from 'datatables.net-react';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';
import DT from 'datatables.net-bs5';
import PageLayout from '../../../components/layout/PageLayout';

DataTable.use(DT);

const DataTableExample: React.FC = () => {
    const breadcrumbs = [
        { label: 'UI Components', path: '/ui' },
        { label: 'Tables', path: '/ui/tables' },
        { label: 'Data Table', path: '/ui/tables/data-table' }
    ];

    // Sample data
    const data = [
        {
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            extn: '5421',
            start_date: '2011/04/25',
            salary: '$320,800'
        },
        {
            name: 'Garrett Winters',
            position: 'Accountant',
            office: 'Tokyo',
            extn: '8422',
            start_date: '2011/07/25',
            salary: '$170,750'
        },
        {
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
            extn: '1562',
            start_date: '2009/01/12',
            salary: '$86,000'
        },
        {
            name: 'Cedric Kelly',
            position: 'Senior Javascript Developer',
            office: 'Edinburgh',
            extn: '6224',
            start_date: '2012/03/29',
            salary: '$433,060'
        },
        {
            name: 'Airi Satou',
            position: 'Accountant',
            office: 'Tokyo',
            extn: '5407',
            start_date: '2008/11/28',
            salary: '$162,700'
        },
        {
            name: 'Brielle Williamson',
            position: 'Integration Specialist',
            office: 'New York',
            extn: '4804',
            start_date: '2012/12/02',
            salary: '$372,000'
        },
        {
            name: 'Herrod Chandler',
            position: 'Sales Assistant',
            office: 'San Francisco',
            extn: '9608',
            start_date: '2012/08/06',
            salary: '$137,500'
        },
        {
            name: 'Rhona Davidson',
            position: 'Integration Specialist',
            office: 'Tokyo',
            extn: '6200',
            start_date: '2010/10/14',
            salary: '$327,900'
        }
    ];

    // Column definitions
    const columns = [
        { data: 'name' },
        { data: 'position' },
        { data: 'office' },
        { data: 'extn' },
        { data: 'start_date' },
        { data: 'salary' }
    ];

    return (
        <PageLayout
            title="Employee Data"
            breadcrumbs={breadcrumbs}
        >
            <DataTable
                data={data}
                columns={columns}
                className="display"
                options={{
                    responsive: true,
                    select: true,
                    pageLength: 10,
                    language: {
                        search: "Search:",
                        lengthMenu: "Show _MENU_ entries",
                        info: "Showing _START_ to _END_ of _TOTAL_ entries",
                        infoEmpty: "Showing 0 to 0 of 0 entries",
                        infoFiltered: "(filtered from _MAX_ total entries)",
                        zeroRecords: "No matching records found",
                        paginate: {
                            first: "First",
                            last: "Last",
                            next: "Next",
                            previous: "Previous"
                        }
                    }
                }}
            >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Extn.</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                </thead>
            </DataTable>
        </PageLayout>
    );
};

export default DataTableExample; 