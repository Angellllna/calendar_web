//./App.css
import React from 'react';
import CalendarHaeder from './components/CalendarHeader';
import CalendarMain from './components/CalendarMain';
import moment from 'moment/moment';

function App() {

  window.moment = moment;

  moment.updateLocale('en', {week: {dow: 1}})
  const startDay = moment().startOf('month').startOf('week')
  const endDay = moment().startOf('month').endOf('week')

  console.log(startDay.format("YYYY-MM-DD"));
  console.log(endDay.format("YYYY-MM-DD"));

  return (
    <div className="App">
    <CalendarHaeder />
    <CalendarMain />
    </div>
  );
}

export default App;
