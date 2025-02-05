import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInformation } from '../redux/features/Slice';


function Apptest() {

    const PersonalInformation = useSelector((state) => state.job_seeker.PersonalInformation);
    const dispatch = useDispatch();



    return (

        <>

            <h1>{PersonalInformation}</h1>

        </>

    );
}

export default Apptest;
