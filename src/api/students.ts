/* eslint-disable no-useless-catch */
import { Student } from "../utils/data";

const BASE_URL = "http://localhost:5000/students"



export const fetchStudents = async () =>{
    try {
        const response = await fetch(BASE_URL);
        
        if (!response.ok) {
            throw new Error(`${response.statusText}: ${response.status}`);
        }
    return await response.json()

    } catch (err) {
        throw err;
    }
};
export const createStudent = async (data: Student) => {
    try {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`${response.statusText}: ${response.status}`);
        }   
    return await response.json();
    } catch (err) {
        throw err;
    }   

}