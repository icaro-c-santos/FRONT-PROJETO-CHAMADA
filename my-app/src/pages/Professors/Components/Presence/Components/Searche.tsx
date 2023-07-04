import React, { ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { DataSearch, Filters } from '..';
import { DatePicker } from '@mui/lab';
import BasicDateCalendar from './Date';
import { Style } from 'util';
import { Button } from "@mui/material";


const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 650px) {
    flex-direction: column;
    margin: 20px 0px 0px 0px;
  }
  
`;



const styledCalendar: React.CSSProperties = {

    height: "50px",
    width: "200px",
    margin: "11px 0px 0px 0px",
    fontSize: "20px",
    textAlign: "center",
    padding: "0px 5px",
    borderRadius: "5px",
    backgroundColor: "whitesmoke"
}



type BuscaGeralProps = {
    updateState: (newState: DataSearch) => void;
    filters: DataSearch
    clickSearch: () => void
};

const BuscaGeral = ({ updateState, filters, clickSearch }: BuscaGeralProps) => {
    const handleDateChange = (event: string) => {
        
        updateState({ ...filters, date: new Date(event).toString() })
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateState({ ...filters, name: event.target.value })
    };

    const handleEnrolmentChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newEnrolment = parseInt(event.target.value);
        if (!isNaN(newEnrolment)) {
            updateState({ ...filters, enrolment: newEnrolment.toString() })
        } else {
            updateState({ ...filters, enrolment: "" })
        }

    };

    return (
        <StyledContainer style={{ justifyContent: "space-around", maxWidth: "1000px", margin: " 20px auto", alignItems: "center" }}>
            <BasicDateCalendar style={styledCalendar} onSelectDate={handleDateChange} />

            <TextField
                style={{ backgroundColor: "whitesmoke", height: "40px", padding: "5px 8px", borderRadius: "8px" }}
                label="Nome"
                value={filters != null && filters.name}
                onChange={handleNameChange}
                margin="normal"
            />


            <TextField
                style={{ backgroundColor: "whitesmoke", height: "40px", padding: "5px 8px", borderRadius: "8px" }}
                label="Matrícula"
                value={filters != null && filters.enrolment}
                onChange={handleEnrolmentChange}
                margin="normal"
            />

            <Button
                sx={{
                    backgroundColor: "lightgrey !important",
                    paddingBlock: "14px !important",
                    borderRadius: "15px !important",
                    width: "150px",
                    marginTop: "11px !important",
                    cursor: "pointer",
                    "&:hover": {
                        cursor: "pointer",
                    },
                }}
                onClick={clickSearch}
            >
                Buscar
            </Button>

        </StyledContainer >
    );
};

export default BuscaGeral;
