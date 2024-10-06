import { Button, Paper, TextField } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react"
import { Student } from "../utils/data" 


interface Props{
    students: Student[]
    setStudents: Dispatch<SetStateAction<Student[]>>
    
}

export const AddStudent = ({ setStudents, students }: Props) => {

    let formData = { id: 999, name: "", age: 0, email: "", class: ""}

    const nameRef = useRef<HTMLInputElement>(null)
    const AgeRef = useRef<HTMLInputElement>(null)
    const EmailRef = useRef<HTMLInputElement>(null)
    const classRef = useRef<HTMLInputElement>(null)

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        formData.name = e.target.value
    }
    const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        formData.age = parseInt(e.target.value)

    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        formData.email = e.target.value

    }

    const handleClassChange = (e: ChangeEvent<HTMLInputElement>) => {
        formData.class = e.target.value

    }

    const handleSubmit = () => {
        setStudents([...students, formData])
        if(nameRef.current) {
            nameRef.current.value = ""
        }
        if(AgeRef.current) {
            AgeRef.current.value = ""
        }
        if(EmailRef.current) {
            EmailRef.current.value = ""
        }
        if(classRef.current) {
            classRef.current.value = ""
        }

       
    }



    return (
        <Paper sx={{ width: 300, padding: 5, marginTop: 1, gap: 1, display: "flex", flexDirection: "column"}}>
            <TextField inputRef={nameRef} onChange={handleNameChange} id="outlined-basic" label="Full Name" name="fullName" variant="outlined" />
            <TextField inputRef={AgeRef} onChange={handleAgeChange} id="outlined-basic" label="Age" name="Age" variant="outlined" />
            <TextField inputRef={EmailRef} onChange={handleEmailChange} id="outlined-basic" label="Email" name="Email" variant="outlined" />
            <TextField inputRef={classRef} onChange={handleClassChange} id="outlined-basic" label="Class" name="Class" variant="outlined" />
           <Button onClick={handleSubmit} variant="contained">Submit</Button>

        </Paper>
    )

}