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


function BodyInsertRest(){
  
    const { id: idRestaurante } = useParams();
    const [Products, setProducts] = useState([]);
  
  
    useEffect(() => {
      GET_Products();
    }, [])
  
  
  
    const GET_Products = async () => {
      const response = await fetch('http://localhost:1337/api/products/?populate[name][populate]=*&populate[description][populate]=*&populate[image][populate]=*&populate[category][populate]=*&populate[menu][populate]=*&populate[ingredients][populate]=*&populate[size][populate]=*&populate[restaurant][populate]=*');;
      const { data } = await response.json();
      // console.log(data);
  
      let productosFiltrados = data.filter(item => item.attributes.restaurant.data.id == idRestaurante)
      setProducts(productosFiltrados);
      console.log(Products)
    }
    return(
    <Box className="BodyInsertRest-Container">
   
      
        <TableContainer sx={{display:"flex", justifyContent:"center"}}>
      <Table sx={{ width:"80%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{background:"#DB4439"}} index="0">
           
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Categoria</TableCell>
            <TableCell align="center">Ubicacion</TableCell>
            <TableCell align="center">Dueño</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
             
            <TableRow index="1">
                
                <TableCell>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    variant="filled"
                />
                </TableCell>
                <TableCell>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    variant="filled"
                />
                </TableCell>
                <TableCell>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    variant="filled"
                />
                </TableCell>
                <TableCell>
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
        <button className="btn">Insertar Resturante</button>
    </Box>
    </Box>
    

    );
}

export default BodyInsertRest;