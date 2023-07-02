import React, { useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { Student } from "../../../../../Types/Students";
import Carousel from "react-material-ui-carousel";
import { StudentWithStatus } from "../../Section/Section";

const CarouselContainer = styled.div`
  width: 480px;
  margin: 0 auto;
  min-height:250px;
`;

const CarouselPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 50px 30px 50px;
  min-height:10px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NameTypography = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around; /* Alterado para separar os botões */
  width: 100%;
  font-size:12px;
  margin-left:60px;
  margin-top:30px;
  margin-right:60px;
`;

const StatusButton = styled(Button)`
  margin: 0 5px;

  &.contained.present {
    background-color: #4caf50;
    font-size:12px;
    color: white;
  }

  &.contained.absent {
    background-color: #f44336;
    color: white;
  }

  &.contained.excused {
    background-color: #2196f3;
    color: white;
    margin-left:10px;
  }

  &.outlined {
    border: 1px solid #3f51b5;
    color: #3f51b5;
  }

  &:hover {
    opacity: 0.8;
  }
}`;



export type PresenceCreated = {
    name: string,
    enrolment: number,
    status: number
}

const PresenceComponente = ({ data, createPresence }: { data: StudentWithStatus[], createPresence: (presence: PresenceCreated[]) => void }) => {
    const [presence, setPresence] = useState<PresenceCreated[]>(() =>
        data.map(student => ({
            name: student.name,
            enrolment: student.enrolment,
            status: 0
        }))
    );

    const handleStatusChange = (index: number, status: number) => {
        const updatedPresence = [...presence];
        const existingCall = updatedPresence[index];
        if (existingCall) {
            existingCall.status = status;
        }
        setPresence(updatedPresence);
    };

    const handleCreatePresence = () => {
        createPresence(presence);
    };

    return (
        <CarouselContainer >
            <Carousel sx={{ margin: "auto 25px;" }}>
                {presence.map((student, index) => (
                    <CarouselPaper key={student.enrolment}>
                        <NameTypography variant="h6">{student.name} - {student.enrolment} </NameTypography>
                        <ButtonContainer >

                            <StatusButton
                                variant={student.status === 1 ? "contained" : "outlined"}
                                color="primary"
                                className={presence[index].status === 1 ? "present selected" : "present"}
                                onClick={() => handleStatusChange(index, 1)}
                            >
                                Presente
                            </StatusButton>

                            <StatusButton
                                variant={student.status === 2 ? "contained" : "outlined"}
                                color="primary"
                                className={presence[index].status === 2 ? "absent selected" : "absent"}
                                onClick={() => handleStatusChange(index, 2)}
                            >
                                Ausente
                            </StatusButton>

                            <StatusButton
                                sx={{ maxWidth: "90px" }}
                                variant={student.status === 3 ? "contained" : "outlined"}
                                color="primary"
                                className={presence[index].status === 3 ? "excused selected" : "excused"}
                                onClick={() => handleStatusChange(index, 3)}
                            >
                                Abonada
                            </StatusButton>

                        </ButtonContainer>

                    </CarouselPaper>
                ))}
            </Carousel>
            {data.length > 0 && presence.length === data.length && (
                <Button sx={{ margin: "30px auto;", display: "flex;" }} onClick={handleCreatePresence} variant="contained" color="primary">
                    Finalizar Chamada
                </Button>
            )}
        </CarouselContainer>
    );
};

export default PresenceComponente;
