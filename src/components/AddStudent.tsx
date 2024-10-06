import { Button, Paper, TextField } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Student } from "../utils/data" 


interface Props{
    students: Student[];
    setStudents: Dispatch<SetStateAction<Student[]>>;
    
}

const initialState = { id: 999, fullName: "", age: "", email: "", class: ""}

export const AddStudent = ({ setStudents, students }: Props) => {
    const [formData, setFormData] = useState(initialState)
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    const handleSubmit = () => {
        setStudents([...students, formData])
        setFormData(initialState)
    }
    useEffect(() => {
        console.log("Firing useEffect")
        if(formData.fullName === "Admin"){
            alert("You entered a name that will not be stored")
        }

    }, [formData.fullName])



    return (
        <Paper sx={{ width: 300, padding: 5, marginTop: 1, gap: 1, display: "flex", flexDirection: "column"}}>
            <TextField onChange={handleChange} value={formData.fullName} id="outlined-basic" label="Full Name" name="fullName" variant="outlined" />
            <TextField onChange={handleChange} value={formData.age} id="outlined-basic" label="Age" name="Age" variant="outlined" />
            <TextField onChange={handleChange} value={formData.email} id="outlined-basic" label="Email" name="Email" variant="outlined" />
            <TextField onChange={handleChange} value={formData.class} id="outlined-basic" label="Class" name="Class" variant="outlined" />
           <Button onClick={handleSubmit} variant="contained">Submit</Button>

        </Paper>
    )

}