import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aspernatur aut ad maxime recusandae optio ut illo dolor nihil quia facere, consequuntur voluptatem? Doloremque aliquam harum voluptas, nulla ipsam distinctio aperiam eligendi adipisci vel, deserunt quaerat saepe? Ipsam, numquam sint!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;