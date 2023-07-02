import React, { CSSProperties, useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import { TextField } from '@mui/material';

interface BasicDateCalendarProps {
    onSelectDate: (value: string) => void;
    style?: CSSProperties;
}

const BasicDateCalendar = ({ onSelectDate, style }: BasicDateCalendarProps) => {


    return (
        <>
            <input style={{ height: "32px", ...style }} type="date" onChange={(target) => {
                onSelectDate(target.currentTarget.value);
            }}></input>
        </>
    );
};

export default BasicDateCalendar;
