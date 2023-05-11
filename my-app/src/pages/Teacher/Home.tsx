import { ISection } from "../../Types/Sections";
import { SectionsMock } from "../../mocks/Sections";
import TableSections from "./components/Table";
import { useState } from "react";

export const Home = () => {
  const sect: ISection[] = [];
  const [sections, setSections] = useState(SectionsMock);
    

  return (
    <>
      <TableSections sections={sections}></TableSections>
    </>
  );
};
