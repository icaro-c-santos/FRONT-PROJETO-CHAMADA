/* 
 const [openModalSection, setOpenModalSection] = useState(false);
    const [idSectionModal, setIdSectionModal] = useState(0);
{openModalSection && <SectionModal idModalSection={idSectionModal} openModal={openModalSection} setOpenModal={setOpenModalSection}></SectionModal>}

*/

import axios from "axios";
import ListSections, { TypeDataSection } from "../Components/ListSections";
import { API_URL } from "../../../env/env";
import { useQuery } from "react-query";

const fetchDataSection = async (): Promise<TypeDataSection[]> => {
    const { data } = await axios.get(`${API_URL}/sections/`);
    return data;
};



export const PageSections = () => {
    const { data, status, error } = useQuery(["data"], fetchDataSection, { retry: 3 });
    return <>
        {status === "success" && <ListSections sections={data} />}
    </>
}