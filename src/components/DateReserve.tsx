'use client';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function DateReserve({ onDateChange }: { onDateChange: (date: Dayjs | null) => void }) {
    const [date, setDate] = useState<Dayjs | null>(null);
    const [time, setTime] = useState<Dayjs | null>(null);

    const handleDateChange = (newDate: Dayjs | null) => {
        setDate(newDate);
        if (newDate && time) {
            const combinedDateTime = newDate.hour(time.hour()).minute(time.minute()); // Merge date and time
            onDateChange(combinedDateTime);
        }
    };

    const handleTimeChange = (newTime: Dayjs | null) => {
        setTime(newTime);
        if (date && newTime) {
            const combinedDateTime = date.hour(newTime.hour()).minute(newTime.minute()); // Merge date and time
            onDateChange(combinedDateTime);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* Date Picker */}
                <DatePicker
                    label="Select Date"
                    value={date}
                    onChange={handleDateChange}
                    slots={{ openPickerIcon: CalendarTodayIcon }}
        
                />
                {/* Time Picker */}
                <TimePicker
                    label="Select Time"
                    value={time}
                    onChange={handleTimeChange}
                    ampm={false} // Set to true for 12-hour format
                    slots={{ openPickerIcon: AccessTimeIcon }}
              
                />
            </LocalizationProvider>
        </div>
    );
}
