import React from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import DashboardForm from '../components/DashboardForm';
import DashboardTable from '../components/DashboardTable';

const page = () => {
    return (
        <>


       <div className='grid lg:grid-cols-2 p-10 gap-y-10 lg:gap-y-0'>



        <div>

        <DashboardForm></DashboardForm>
        </div>

        <div>

            <DashboardTable></DashboardTable>
        </div>
       </div>

        
        
        
        </>
    );
};

export default page;