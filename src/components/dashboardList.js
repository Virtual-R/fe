import React from 'react';
import DashboardCard from './dashboardCard';

const DashboardList = ((props) => {
    return (
        <div>
            <DashboardCard data={props} />
        </div>
    )
})

export default DashboardList;