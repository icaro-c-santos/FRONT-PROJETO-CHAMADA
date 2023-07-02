import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { SelectChangeEvent } from "@mui/material"
import { ScheduleDto } from '../../Section/Section';
const StyledSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]

const StyledOption = styled.option`
  font-size: 16px;
`;


type CustomSelectProps = {
    onChange: (value: any) => void,
    options: ScheduleDto[]
}

const CustomSelect = ({ options, onChange }: CustomSelectProps) => {
    return (
        <StyledSelect onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            onChange(event.target.value);
          }}>
            {options.map((option) => (
                <StyledOption key={option.code} value={option.code}>
                    {` ${days[option.day]} - ${option.start_time} AS ${option.end_time}`}
                </StyledOption>
            ))}
        </StyledSelect>
    );
};

export default CustomSelect;
