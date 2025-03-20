import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { startOfTomorrow, endOfMonth, addMonths, isWeekend } from 'date-fns';

const CustomDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const minDate = startOfTomorrow(); 
  const maxDate = endOfMonth(addMonths(new Date(), 1)); 


 

  return (
    <div className="flex flex-col items-center mt-5 pc">
      <label className="mb-2 text-lg font-medium">Select a Date between in this or next month</label>
      <DatePicker
      selected={selectedDate}
      onChange={(date: Date | null) => setSelectedDate(date)}
      minDate={minDate}
      maxDate={maxDate}
      filterDate={(date) => !isWeekend(date)}
      dateFormat="EEEE, MMM d, yyyy"
      className="p-2 border px-4 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-60"
      placeholderText='Select date for appointment'
/>

    </div>
  );
};

export default CustomDatePicker;


