import { Box, Input, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useLocation } from "react-router-dom";
import ResponsiveAppBar from "./Components/NavBar";
import { CreateCalled } from "./Components/CreateCalled";
import { listStudentsMock } from "../../mocks/Sections";
import { Client } from "../../client/client";
import { useState } from "react";

export const Section = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dataSection = Client.getSectionById(id);

  const [hour, setHour] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setHour(event.target.value);
  };

  return (
    <Box>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box>
        <Select>
          <Select
            id={"select_hour"}
            value={""}
            onChange={handleChange}
            label="Status"
            defaultValue="Presente"
            required={true}
            sx={{ minWidth: "150px" }}
          >
            {" "}
            {dataSection.hours.map((hour) => {
              return (
                <MenuItem
                  value={`${hour.start_hour} as ${hour.final_hour}`}
                  key={hour.id}
                >{`${hour.start_hour} as ${hour.final_hour}`}</MenuItem>
              );
            })}
          </Select>
        </Select>
      </Box>
      <CreateCalled dataSection={dataSection}></CreateCalled>
    </Box>
  );
};
