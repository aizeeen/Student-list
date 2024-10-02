import { Button, Paper, TextField } from "@mui/material"
import { ChangeEvent } from "react"
import { data } from "../utils/data" 

export const AddStudent = () => {

    let formData = { id: 999, name: "", age: 0, email: "", class: ""}

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
        console.log(formData)
        data.push(formData)
    }



    return (
        <Paper sx={{ width: 300, padding: 5, marginTop: 1, gap: 1, display: "flex", flexDirection: "column"}}>
            <TextField onChange={handleNameChange} id="outlined-basic" label="Full Name" name="fullName" variant="outlined" />
            <TextField onChange={handleAgeChange} id="outlined-basic" label="Age" name="Age" variant="outlined" />
            <TextField onChange={handleEmailChange} id="outlined-basic" label="Email" name="Email" variant="outlined" />
            <TextField onChange={handleClassChange} id="outlined-basic" label="Class" name="Class" variant="outlined" />
           <Button onClick={handleSubmit} variant="contained">Submit</Button>

        </Paper>
    )

}