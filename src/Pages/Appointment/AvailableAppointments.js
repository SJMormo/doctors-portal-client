import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ date }) => {
    return (
        <div>
            <p className='text-xl text-secondary text-center'>Available appointments on: {format(date, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointments;