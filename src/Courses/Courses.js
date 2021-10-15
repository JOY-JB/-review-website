import React from 'react';
import Products from '../Products/Products';

const Courses = () => {
    return (
        /* ================ Courses Page Start =================  */
        <div>
            <div className="p-5">
                <h3 className="text-center">SELECT COURSE</h3>
                <h1 className="text-center text-danger">Explore Popular Courses</h1>
            </div>
            <Products></Products>
        </div>
        /* ================ Courses Page Start =================  */
    );
};

export default Courses;