import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import { TextField } from '@mui/material';

interface BasicDateCalendarProps {
    onSelectDate: (date: Date | null) => void;
}

const BasicDateCalendar = ({ onSelectDate }: { onSelectDate: (date: string) => void }) => {


    return (
        <>
            <input style={{ height: "32px" }} type="date" onChange={(target) => {
                onSelectDate(target.currentTarget.value);
            }}></input>
        </>
    );
};

export default BasicDateCalendar;
