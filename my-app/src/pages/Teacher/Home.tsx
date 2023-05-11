import { SectionsMock } from "../../mocks/Sections";
import TableSections from "./components/Table";
import { useState, useEffect } from "react";
import { TablePaginationSection } from "./components/TablePagination";
import { Client } from "../../client/client";
import { Header } from "./components/Header";
import { Box } from "@mui/material";

type TPagination = {
  page: number;
  size: number;
};

type TUser = {
  name: string;
  id: number;
};
const user: TUser = {
  id: 1722,
  name: "Daniela Claro",
};
export const Home = () => {
  const [sections, setSections] = useState(SectionsMock);
  const [pagination, setPagination] = useState<TPagination>({
    page: 1,
    size: 0,
  });

  useEffect(() => {
    const { data, pagination } = Client.getAllSectionsByTeacher(user.id, 1);
    setSections(data);
    setPagination({
      page: pagination.index,
      size: pagination.size,
    });
  }, []);

  const handlerPagination = async (event: any, pageIndex: number) => {
    const { data, pagination } = await Client.getAllSectionsByTeacher(
      user.id,
      pageIndex
    );
    setSections(data);
    setPagination({
      page: pagination.index,
      size: pagination.size,
    });
  };

  return (
    <>
      <Box>
        <Header name={user.name}></Header>
        <TableSections sections={sections}></TableSections>
        <TablePaginationSection
          size={pagination.size}
          handleChangePage={handlerPagination}
        ></TablePaginationSection>
      </Box>
    </>
  );
};
