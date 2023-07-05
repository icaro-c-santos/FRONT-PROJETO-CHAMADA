import axios, { AxiosInstance } from "axios";
import { API_URL } from "../env/env";
import { Filters, TypePresence } from "../pages/Professors/Components/Presence";
import { TAuthData } from "../Auth/AuthContext";



const getIntansceAxios = () => {





    const axiosInstance: AxiosInstance = axios.create({
        baseURL: `${API_URL}/client/`
    });

    const data = localStorage.getItem("userLogged");
    if (data) {
        const user: TAuthData = JSON.parse(data);
        const username = user.login || "";
        const password = user.senha || "";
        const authToken = `Basic ${btoa(`${username}:${password}`)}`;
        axiosInstance.defaults.headers.common['Authorization'] = authToken;
    }


    return axiosInstance;
}







const createPresence = async (createPresence: unknown) => {
    return await getIntansceAxios().post(`students/sections/1/presences`,
        createPresence
    )
}

const updatePresence = async (presenceUpdate: unknown) => {
    return await getIntansceAxios().put(`students/sections/1/presences`,
        presenceUpdate
    )
}

const getDataSections = async () => {
    const { data } = await getIntansceAxios().get(`/professors/sections`);
    return data;
}

const getDataSectionsOfStudent = async () => {
    const { data } = await getIntansceAxios().get(`students/sections`);
    return data;

}

const getDataSectionsOfStudentWith = async (id: number) => {
    const { data } = await getIntansceAxios().get(`students/sections/${id}`);
    return data;

}

const getDataSectionById = async (sectionId: number) => {

    const { data } = await getIntansceAxios().get(`professors/sections/${sectionId}`);

    return data;
}


const getPresenceByFilter = async (filters: Filters) => {

    const { data } = await getIntansceAxios().get(`students/sections/${filters.sectionCode}/presences`,
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



    const { data } = await getIntansceAxios().get(`professors/sections/${filters.sectionCode}/presences`,


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

    const { data } = await getIntansceAxios().get(`/students/sections/${sectionCode}/presences`)
    return data;

}

const getDataSectionsWith = async (sectionCode: number) => {
    const { data } = await getIntansceAxios().get(`professors/sections/${sectionCode}`);
    return data;
}



const login = async (user: string, password: string) => {

    console.log(user, password);
    try {

        const { data } = await getIntansceAxios().post("/login", {

            user: user,
            password: password

        })
        return data;
    } catch (error) {

        throw error;
    }



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