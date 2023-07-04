import { Schedule } from "../Pages/Presence"

import * as React from "react";
import styled, { css } from "styled-components";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import icon_update from "../../../../../icons/icon_update.png";
import { convertDateToDayMonthYear } from "../../../utils/Date.utils";
import { Professor } from "../Pages/Presence";



const StyledTableContainer = styled(TableContainer)`
max-width:800px;
  margin:25px auto;
  @media (max-width: 750px) {
    margin-bottom: 20px;
  }
`;

const StyledTableCell = styled(TableCell) <{ status?: string }>`
  @media (max-width: 650px) {
    padding: 20px;
  }
 

`;

const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];




export const Subject = ({ data }: { data: Schedule[] }) => {

    return <StyledTableContainer>
        <div style={{ width: "100%", height: "px;", borderBottom: "2px solid black" }}></div>
        <h1 style={{ textAlign: "center" }}>
            Horarios:
        </h1>
        <div style={{ width: "100%", borderBottom: "2px solid black" }}></div>
        <Table>
            <TableHead>
                <TableRow>
                    <StyledTableCell sx={{ textAlign: "center" }} >Código</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>Dia</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }} >Início</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }} >Fim</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }} >Sala</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody sx={{
                cursor: "pointer",
                "& tr:hover": {
                    backgroundColor: "rgb(125 118 118 / 87%)",
                    transition: "0.5s",
                },
            }} >
                {data.map((schedule) => (
                    <TableRow key={schedule.code}>
                        <StyledTableCell sx={{ textAlign: "center" }} >{schedule.code}</StyledTableCell>
                        <StyledTableCell sx={{ textAlign: "center" }} >{daysOfWeek[schedule.day]}</StyledTableCell>
                        <StyledTableCell sx={{ textAlign: "center" }} >{schedule.start_time}</StyledTableCell>
                        <StyledTableCell sx={{ textAlign: "center" }} >{schedule.end_time}</StyledTableCell>
                        <StyledTableCell sx={{ textAlign: "center" }} >{`${schedule.room.paf} -  ${schedule.room.number}`}</StyledTableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </StyledTableContainer>
}


