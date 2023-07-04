import axios from "axios";
import { API_URL } from "../env/env";
import { Filters, TypePresence } from "../pages/Professors/Components/Presence";


const axiosInstance = axios.create({
    baseURL: `${API_URL}/client/`
});



const createPresence = async (createPresence: unknown) => {
    return await axiosInstance.post(`students/sections/1/presences`, 
        createPresence
    )
}

const updatePresence = async (presenceUpdate: unknown) => {
    return await axiosInstance.put(`students/sections/1/presences`, 
         presenceUpdate
    )
}

const getDataSections = async () => {
    const { data } = await axiosInstance.get(`/professors/sections`);
    return data;
}

const getDataSectionsOfStudent = async () => {
    const { data } = await axiosInstance.get(`students/sections`);
    return data;

}

const getDataSectionsOfStudentWith = async (id: number) => {
    const { data } = await axiosInstance.get(`students/sections/${id}`);
    return data;

}

const getDataSectionById = async (sectionId: number) => {

    const { data } = await axiosInstance.get(`professors/sections/${sectionId}`);

    return data;
}


const getPresenceByFilter = async (filters: Filters) => {

    const { data } = await axiosInstance.get(`students/sections/${filters.sectionCode}/presences`,
        {
            params: {
                name: filters.name,
                page: filters.page,
                pageSize: filters.pageSize,
                studentEnrolment: filters.enrolment,
                sectionCode: filters.sectionCode,
                date: filters.date
            }
        }
    )
    return {
        presences: data
    }
}


const getPresenceByFilterTeacher = async (filters: Filters) => {

    

    const { data } = await axiosInstance.get(`professors/sections/${filters.sectionCode}/presences`,


        {
            params: {
                name: filters.name,
                page: filters.page,
                pageSize: filters.pageSize,
                studentEnrolment: filters.enrolment,
                sectionCode: filters.sectionCode,
                date: filters.date
            }
        }
    )
    return {
        presences: data
    }
}


const getPresenceByStudent = async (sectionCode: number) => {

    const { data } = await axiosInstance.get(`/students/sections/${sectionCode}/presences`)
    return data;

}

const getDataSectionsWith = async (sectionCode: number) => {
    const { data } = await axiosInstance.get(`professors/sections/${sectionCode}`);
    return data;
}



const login = async (user: string, password: string) => {


    const { data } = await axiosInstance.post("/login", {

        user: user,
        password: password

    })

    return data;
}

export const clientServer = {
    getDataSections,
    createPresence,
    getDataSectionById,
    getPresenceByFilter,
    updatePresence,
    getDataSectionsWith,
    getDataSectionsOfStudent,
    getPresenceByStudent,
    login,
    getDataSectionsOfStudentWith,
    getPresenceByFilterTeacher
}