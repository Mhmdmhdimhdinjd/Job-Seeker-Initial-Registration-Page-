import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInformation } from '../redux/features/Slice';
import Home from '../Pages/Home';
import '../App.css'


function Apptest() {

    const PersonalInformation = useSelector((state) => state.job_seeker.PersonalInformation);
    const dispatch = useDispatch();



    return (

        <>

            <Home />

        </>

    );
}

export default Apptest;
