

import * as React from "react";
import styled, { css } from "styled-components";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import { StudentWithStatus } from "../../Professors";





const StyledTableContainer = styled(TableContainer)`
  margin-bottom: 20px;
  @media (max-width:750px) {
    margin-bottom: 20px;
  }
`;

const StyledTableCell = styled(TableCell) <{ status?: string }>`
@media (max-width: 650px) {
    padding: 20px;
   
     
   
    &:nth-of-type(2),
    &:nth-of-type(4) {
      display: none;
    }
  }

  ${({ status }) =>
        status === "disapproved" &&
        css`
      background-color: #f59d98c2;
    `}

  ${({ status }) =>
        status === "alert" &&
        css`
      background-color: #dbdba1;
    `}
`;

const StudentsTable = ({ students }: { students: StudentWithStatus[] }) => {
    return (
        <StyledTableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Matricula</StyledTableCell>
                        <StyledTableCell>CPF</StyledTableCell>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell>Email</StyledTableCell>
                        <StyledTableCell>Faltas</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {students.map((student) => (
                        <TableRow key={student.enrolment}>
                            < StyledTableCell status={student.status} > {student.enrolment}</StyledTableCell>
                            <StyledTableCell status={student.status}>{student.cpf}</StyledTableCell>
                            <StyledTableCell status={student.status}>{student.name}</StyledTableCell>
                            <StyledTableCell status={student.status}>{student.email}</StyledTableCell>

                            <StyledTableCell status={student.status}>{student.absences}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table >
        </StyledTableContainer >
    );
};


export const ListStudents = ({ students }: { students: StudentWithStatus[] }) => {


    return (
        <>
            <StudentsTable students={students}></StudentsTable>
        </>
    );
}


export default ListStudents;