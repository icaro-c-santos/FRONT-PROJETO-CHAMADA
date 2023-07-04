

import * as React from "react";
import styled, { css } from "styled-components";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import icon_update from "../../../../../icons/icon_update.png";
import { convertDateToDayMonthYear } from "../../../utils/Date.utils";
import { Professor } from "../Pages/Presence";



export type TypePresenceStudent = {

    statusValue: string;
    statusId: number;
    enrolment: number;
    cpf: string;
    name: string;
    email: string;
    phone: number;
    date: string;
    sectionCode: number;
    load_presence: number;

}



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


export const Professors = ({ professors }: { professors: Professor[] }) => {


    return (
        <>

            <StyledTableContainer>
                <div style={{ width: "100%", height: "px;", borderBottom: "2px solid black" }}></div>
                <h1 style={{ textAlign: "center" }}>
                    Professores:
                </h1>
                <div style={{ width: "100%", borderBottom: "2px solid black" }}></div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ textAlign: "center" }} >Código</StyledTableCell>
                            <StyledTableCell sx={{ textAlign: "center" }}>Nome</StyledTableCell>
                            <StyledTableCell sx={{ textAlign: "center" }} >Email</StyledTableCell>

                            <StyledTableCell sx={{ textAlign: "center" }} >Telefone</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{
                        cursor: "pointer",
                        "& tr:hover": {
                            backgroundColor: "rgb(125 118 118 / 87%)",
                            transition: "0.5s",
                        },
                    }} >
                        {professors.map((data) => (
                            <TableRow key={data.code}>
                                <StyledTableCell sx={{ textAlign: "center" }} >{data.code}</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: "center" }} >{data.name}</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: "center" }} >{data.professorCode}</StyledTableCell>

                                <StyledTableCell sx={{ textAlign: "center" }} >{data.phone}</StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div style={{ width: "100%", height: "px;", borderBottom: "2px solid black" }}></div>
            </StyledTableContainer>
        </>
    );
};


