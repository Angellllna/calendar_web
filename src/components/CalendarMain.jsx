import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@mui/material'; 
import './styleHeder.css';
import { changeMonth } from '../app/calendarReducer';

import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Імпортуйте іконки Material-UI
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// const calendarMonth = [];

function CalendarMain() {


    return (
        <div className="calendar-main">

        </div>
    );
} 

export default CalendarMain;