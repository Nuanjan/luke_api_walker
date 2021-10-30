import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Display = () => {
    const {search, id} = useParams();
    const [data, setData] = useState({});
    const [showError, setShowError] = useState(false)

    console.log(search === "people")
    
  useEffect(() => {
    axios.get("https://swapi.dev/api/"+search+"/"+id)
    .then(response => setData(response.data)
    
    )
    .then(() => console.log(data))
    .then(() => setShowError(false))
    .catch(() => setShowError(true))
    
  },[search,id])
  
    return (
        <Card sx={{ width: "50%", margin:"0 auto"}}>
            {search === "people"
            ? 
            <CardContent>
          <Typography variant="h3" component="div">{data.name}</Typography>
          <Typography variant="h5">Hight: {data.height}<br />Mass: {data.mass}</Typography>
          <Typography sx={{ mt: 1.5 }} color="text.secondary">Hair Color:{data.hair_color}</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">Skin Color:{data.skin_color}</Typography>
        </CardContent>
        : search === "planets"?<CardContent>
          <Typography variant="h3" component="div">
            {data.name}
          </Typography>
          <Typography variant="body6" color="text.secondary">
            Climate: {data.climate}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
           Terrain: {data.terrain}
            <br />
           Surface Water: {data.surface_water}
          </Typography>
          <Typography variant="h6">
            Population: {data.population}
          </Typography>
        </CardContent>
        :!showError ?<CardContent>
          <Typography variant="h3" component="div">
            {data.name}
          </Typography>
        </CardContent>: <p style={{color: "red", margin: "20px"}}>Error Can't get Data</p>}
      </Card>
    );
};

export default Display;