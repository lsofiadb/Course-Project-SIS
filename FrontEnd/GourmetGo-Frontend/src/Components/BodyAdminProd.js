import {React,useEffect,useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import "../CSS/BodyAdminProd.css"


function BodyAdminProd(){
  
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
    <Box className="BodyAdminProd-Container">
      <Box>

      </Box>
      {Products.length>0 ? 
      <Box>
        <TableContainer sx={{display:"flex", justifyContent:"center"}}>
      <Table sx={{ width:"80%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{background:"#DB4439"}}>
            <TableCell align="center">Seleccionar</TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Precio</TableCell>
            <TableCell align="center">Restaurante</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            
            Products.map((productItem, index) => {
              return (
                <TableRow index={index}>
                  <TableCell>
                    <Checkbox  />
                  </TableCell>
                 <TableCell>{productItem.attributes.name}</TableCell>
                 <TableCell>{10000}</TableCell>
                 <TableCell>{productItem.attributes.restaurant.data.attributes.name}</TableCell>
                </TableRow>
               
              )
            })
          }
            
        </TableBody>
      </Table>
    </TableContainer>
    <Box sx={{display:"flex", justifyContent:"space-around", marginTop:"30px"}}>
    <button class="btn">Actualizar Producto</button>
    <button class="btn">Añadir Producto</button>
  </Box>
      </Box>
      
      :<Box sx={{textAlign:"center",color:"#DB4439"}}><h1>No se encuentran productos registrados</h1></Box>}
    
    
    
    </Box>
    
    );
}

export default BodyAdminProd;