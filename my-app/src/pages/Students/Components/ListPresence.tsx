import * as React from "react";
import styled, { css } from "styled-components";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import icon_update from "../../../../../icons/icon_update.png";
import { convertDateToDayMonthYear } from "../../../utils/Date.utils";
import { Presence } from "../Pages/Presence";




const StyledTableContainer = styled(TableContainer)`
  margin-bottom: 20px;
  max-width:800px;
  margin:auto;
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
        abonado: "#fcdba1"
    }
    //@ts-ignore
    return <><span style={{ backgroundColor: bgColor[status], borderRadius: "12%", padding: "4px 10px" }}>{status}</span></>
}



const PresenceTable = ({ presence }: { presence: Presence[] }) => {

    return (
        <StyledTableContainer>
            <h1 style={{ textAlign: "center", marginTop: "0px" }}>
                Presenças:
            </h1>
            <div style={{ width: "100%", borderBottom: "2px solid black" }}></div>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell sx={{ textAlign: "center" }}>Data</StyledTableCell>
                        <StyledTableCell sx={{ textAlign: "center" }} >Status</StyledTableCell>
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
                        <TableRow key={data.enrolment}>
                            <StyledTableCell sx={{ textAlign: "center" }} >{convertDateToDayMonthYear(new Date(data.date.toString()))}</StyledTableCell>
                            <StyledTableCell sx={{ textAlign: "center" }} >{<IconStatus status={data.status}></IconStatus>}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );
};

export const ListPresence = ({ presence }: { presence: Presence[] }) => {
    return (
        <>
            <PresenceTable presence={presence} />
        </>
    );
};

export default ListPresence;

