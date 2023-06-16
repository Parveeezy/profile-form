import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutComponent = () => {

    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default LayoutComponent;