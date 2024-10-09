import React from 'react';
import NavTabs from '../components/DesignDevelop/NavTabs';
import InvBod from '../components/DesignDevelop/invBod';

const Inventory: React.FC = () => {
    return (
        <div id='inventory'>
            <NavTabs />
            <InvBod />
        </div>
    )
};

export default Inventory;