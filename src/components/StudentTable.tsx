import { data } from "../utils/data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { red } from "@mui/material/colors";

export const StudentTable = () => {
    return (
        <TableContainer component={Paper}>
        <Table size="small" sx={{ border: 2}}>
            <TableHead>
                <TableRow>
                    <TableCell sx={{color: 'red'}}>Full Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Class</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => {
                    return (
                <TableRow>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.age}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.class}</TableCell>
                </TableRow>
                    );
                }
            )}
                
            </TableBody>
        </Table>
        </TableContainer>
    )
}