import { clientServer } from "../../../../../Client/Client"

import * as React from "react";
import styled, { css } from "styled-components";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import icon_update from "../../../../../icons/icon_update.png";
import { TypeDataPresence, TypePresence } from "..";
import { convertDateToDayMonthYear } from "../../../../../utils/Date.utils";




const StyledTableContainer = styled(TableContainer)`
  margin-bottom: 20px;
  @media (max-width: 750px) {
    margin-bottom: 20px;
  }
`;

const StyledTableCell = styled(TableCell) <{ status?: string }>`
  @media (max-width: 650px) {
    padding: 20px;
  }
 

`;

const IconStatus = ({ status }: { status: string }) => {

    const bgColor = {
        presente: "rgb(100 240 169 / 76%)",
        ausente: "rgb(255 174 174)",
        abonada: "#dbdba1"
    }
    //@ts-ignore
    return <><span style={{ backgroundColor: bgColor[status], borderRadius: "12%", padding: "4px 10px" }}>{status}</span></>
}



const PresenceTable = ({ presence, setDataPresenca, setUpdateModal }: { presence: TypePresence[], setDataPresenca: (data: TypePresence) => void, setUpdateModal: (value: boolean) => void }) => {


    const handlerPresence = async (presence: TypePresence) => {
        setDataPresenca(presence);
        setUpdateModal(true);
    }

    return (
        <StyledTableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Matrícula</StyledTableCell>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell>Email</StyledTableCell>
                        <StyledTableCell>Data</StyledTableCell>
                        <StyledTableCell>Código da Turma</StyledTableCell>
                        <StyledTableCell>Nome da Disciplina</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{
                    cursor: "pointer",
                    "& tr:hover": {
                        backgroundColor: "rgb(125 118 118 / 87%)",
                        transition: "0.5s",
                    },
                }} >
                    {presence.map((data) => (
                        <TableRow key={data.enrolment} onClick={() => {
                            handlerPresence(data);
                        }} >
                            <StyledTableCell  >{data.enrolment}</StyledTableCell>
                            <StyledTableCell >{data.name}</StyledTableCell>
                            <StyledTableCell >{data.email}</StyledTableCell>
                            <StyledTableCell >{convertDateToDayMonthYear(data.date)}</StyledTableCell>
                            <StyledTableCell >{data.sectionCode}</StyledTableCell>
                            <StyledTableCell >{data.subjectName}</StyledTableCell>
                            <StyledTableCell >{<IconStatus status={data.status}></IconStatus>}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );
};

export const ListPresence = ({ presence, setDataPresenca, setUpdateModal }: { presence: TypePresence[], setDataPresenca: (data: TypePresence) => void, setUpdateModal: (value: boolean) => void }) => {
    return (
        <>
            <PresenceTable presence={presence} setDataPresenca={setDataPresenca} setUpdateModal={setUpdateModal} />
        </>
    );
};

export default ListPresence;

