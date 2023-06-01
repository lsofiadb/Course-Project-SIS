import {React,useEffect,useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../CSS/BodyInsertRest.css"


function BodyInsertProd(){
  
    return(
    <Box className="BodyInsertRest-Container">
   
      
        <TableContainer sx={{display:"flex", justifyContent:"center"}}>
      <Table sx={{ width:"80%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{background:"#DB4439"}} index="0">
           
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Precio</TableCell>
            <TableCell align="center">Restaurante</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
             
            <TableRow index="1">
                
                <TableCell align="center">
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    variant="filled"
                />
                </TableCell>
                <TableCell align="center">
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    variant="filled"
                />
                </TableCell>
                <TableCell align="center">
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    variant="filled"
                />
                </TableCell>
                
            </TableRow>
               
              
          
            
        </TableBody>
      </Table>
    </TableContainer>
    <Box sx={{display:"flex", justifyContent:"center", marginTop:"30px"}} >
        <button className="btn">Insertar Producto</button>
    </Box>
    </Box>
    

    );
}

export default BodyInsertProd;