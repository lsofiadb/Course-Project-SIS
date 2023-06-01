import {React,useEffect,useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import "../CSS/BodyAdminRest.css"


function BodyAdminRest(){
  
const [Restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    GET_Restaurants();
  }, [])


  const GET_Restaurants = async () => {
    const response = await fetch('http://localhost:1337/api/restaurants/?populate[name][populate]=*&populate[location][populate]=*&populate[category][populate]=*&populate[image][populate]=*&populate[schedule][populate]=*&populate[menus][populate]=*');;
    const { data } = await response.json();

    // console.log(data);

    setRestaurants(data);
  }

    return(
    <Box className="BodyAdminRest-Container">
      <Box>

      </Box>
    <TableContainer sx={{display:"flex", justifyContent:"center"}}>
      <Table sx={{ width:"80%" }} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow sx={{background:"#DB4439"}}>
            <TableCell align="center" sx={{ fontSize: 22 }} >Seleccionar</TableCell>
            <TableCell align="center"  sx={{ fontSize: 22 }}>Nombre</TableCell>
            <TableCell align="center"  sx={{ fontSize: 22 }}>Categoria</TableCell>
            <TableCell align="center"  sx={{ fontSize: 22 }}>Ubicacion</TableCell>
            <TableCell align="center"  sx={{ fontSize: 22 }}>Dueño</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            !Restaurants ? 'Cargando' :
            Restaurants.map((restaurant, index) => {
              console.log(restaurant)
              return (
                <TableRow index={index}>
                  <TableCell>
                    <Checkbox  />
                  </TableCell>
                  <TableCell  sx={{ fontSize: 18 }}>{restaurant.attributes.name}</TableCell>
                  <TableCell sx={{ fontSize: 18 }}>{restaurant.attributes.category}</TableCell>
                  <TableCell sx={{ fontSize: 18 }}>{restaurant.attributes.location}</TableCell>
                  <TableCell sx={{ fontSize: 18 }}>no actualizado</TableCell>
                </TableRow>
               
              )
            })
          }
            
        </TableBody>
      </Table>
    </TableContainer>
    <Box sx={{display:"flex", justifyContent:"space-around", marginTop:"30px"}}>
      <button className="btn">Actualizar Restaurante</button>
      <a className="btn" href="/InsertRest">Añadir Restaurante</a>
    </Box>
    
    </Box>
    
    );
}

export default BodyAdminRest;