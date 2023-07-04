

import * as React from "react";
import styled, { css } from "styled-components";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import axios from "axios";
import { API_URL } from "../../../env/env";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate, useParams } from "react-router-dom";


export type TypeDataSection = {
    code: number,
    subject: number,
    name: string,
    subject_load: number
}



const StyledTableContainer = styled(TableContainer)`
  margin-bottom: 20px;
  transition: "0.5s"
  @media (max-width:750px) {
    margin-bottom: 20px;
  }
`;

const StyledTableCell = styled(TableCell) <{ status?: string }>`

@media (max-width: 650px) {
    padding: 20px;
   
  }

`;


export type PropsListSections = {
    sections: TypeDataSection[],
}

export const ListSections = ({ sections }: PropsListSections) => {
    const navigate = useNavigate();
    const { studentEnrolment } = useParams();
    const hanleNavigate = (id: number) => {
        navigate(`/students/self/${studentEnrolment}/sections/${id}`)
    }


    return (
        <>
            <StyledTableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Código da Turma</StyledTableCell>
                            <StyledTableCell>Disciplina</StyledTableCell>
                            <StyledTableCell>Carga Horaria</StyledTableCell>
                            <StyledTableCell>Código da Disicplina</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{
                        cursor: "pointer",
                        "& tr:hover": {
                            backgroundColor: "rgb(125 118 118 / 87%)",
                            transition: "0.5s",
                        },
                    }} >
                        {sections.map((section) => (
                            <TableRow key={section.code}>
                                <StyledTableCell onClick={() => {
                                    hanleNavigate(section.code)
                                }}>{section.code}</StyledTableCell>
                                <StyledTableCell onClick={() => {
                                    hanleNavigate(section.code)
                                }}>{section.name}</StyledTableCell>
                                <StyledTableCell onClick={() => {
                                    hanleNavigate(section.code)
                                }} >{section.subject_load}</StyledTableCell>
                                <StyledTableCell >
                                    {section.subject}
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>
        </>
    );
};



export default ListSections;




