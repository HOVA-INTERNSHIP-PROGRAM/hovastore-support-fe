import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

function Breadcrumbs() {
    const location = useLocation();
    console.log(location)
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb, index, array) => {
            const path = `/${array.slice(0, index + 1).join('/')}`; 
            const displayName = crumb.replace(/-/g, ' '); 

            return (
                <div key={crumb}>
                    {index < array.length - 1 ? ( 
                        <Link to={path}>{displayName}</Link>
                    ) : (
                        <span>{displayName}</span> 
                    )}
                    {index < array.length - 1 && ' > '} 
                </div>
            );
        });

    return (
        <div className='bg-secondary p-2 w-auto inline-block rounded'>
            {crumbs}
        </div>
    );
}

export default Breadcrumbs;
