import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@mui/material'; 
import './styleHeder.css';
import { changeMonth } from '../app/calendarReducer';

import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Імпортуйте іконки Material-UI
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';


const monthNames = [
        'Січень', 'Лютий', 'Березень', 'Квітень',
        'Травень', 'Червень', 'Липень', 'Серпень',
        'Вересень', 'Жовтень', 'Листопад', 'Грудень',
      ];


function CalendarHeader() {
   const currentDate = useSelector(
      (state) => state.yourReducer.currentDate); 

    const dispatch = useDispatch();
  
    // Отримайте місяць та рік зі стану
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  

    
    const [setCurrentMonth] = useState(new Date().getMonth());
    const handlePrevClick = () => {
     
    }

    const handleNextClick = () => {
        
    }

    const handleDropDownClick = () => {
      dispatch();
  }

    return (
      
      <div className="calendar-header">

        <div className="year-header">
          <div className="yearName">{currentYear}
          <IconButton onClick={handleDropDownClick} className="element-outlined" >
              <ArrowDropDownIcon  className="arrowDropDown-icon" fontSize="large"/>    
          </IconButton>
            
          </div>
        </div>

        <div className="mouns-header">
            <IconButton onClick={handlePrevClick} className="element-outlined" >
                <ArrowBackIos className="arrow-icon" />
            </IconButton>
            <span className='mounsName'>{monthNames[currentMonth]}</span>
            <IconButton onClick={handleNextClick} className="element-outlined">
                <ArrowForwardIos className="arrow-icon"/>
            </IconButton>
      </div>
      </div>
    );
  }
  
  export default CalendarHeader;
  