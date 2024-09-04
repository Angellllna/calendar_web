 

const initialState = {
    currentMonth: new Date().getMonth,
    currentYear: new Date().getFullYear
}

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MONTH':
            const newMonth = state.currentMonth + action.payload;
            const newYear = state.currentYear;

            if (newMonth < 0) {
                return {
                    currentMonth: 11,
                    currentYear: newYear - 1
                };
            }
            else if (newMonth > 11) {
                return {
                    currentMonth: 0,
                    currentYear: newYear + 1,
                };
            }
            else {
                return {
                    ...state,
                    currentMonth: newMonth,
                };
            }

            default:
                return state;

    }
}

export default calendarReducer;