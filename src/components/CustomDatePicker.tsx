import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { startOfTomorrow, endOfMonth, addMonths, isWeekend } from 'date-fns';

const CustomDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const minDate = startOfTomorrow(); 
  const maxDate = endOfMonth(addMonths(new Date(), 1)); 

  const doctorSlots : string[]  = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM","4:00PM","5:00PM","6:00PM","7:00PM"];
 

  return (
    <div className="flex flex-col items-center mt-5 ">
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

        {selectedDate && (
          <div className='flex flex-row items-center mt-5'>
            {doctorSlots.map((slot:string) => (
              <button key={slot} onClick={() => setSelectedSlot(slot)}
              className={`px-4 py-2 rounded-full mt-4 mr-4 transition-colors 
                ${selectedSlot === slot ? "bg-green-500 text-white" : "bg-cyan-400"}`}
            >{slot}</button>
            ))}
          </div>
        )}



    </div>
  );
};

export default CustomDatePicker;


