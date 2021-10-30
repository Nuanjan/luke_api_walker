import React, {useState} from 'react';
import { Button, TextField,MenuItem,FormControl, InputLabel, Select} from '@mui/material';
import { useHistory } from "react-router-dom";
const formStyle = {
    padding: '2rem',
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    margin:"0 auto",
}
const Search = () => {
 
    let history = useHistory();
    const [data, setData] = useState({})
    const [isSubmit, setIssubmit] = useState(false)
    const [input, setInput] = useState({
       search: "",
       id:"" 
    })
    const submitSearch = (e) => {
        e.preventDefault()
        setData(input)
        setIssubmit(true)
        setInput({
            search: "",
            id:"" 
         })
    }
    if(isSubmit) {
        history.push(`/${data.search}/${data.id}`)
    }
    return (
    <form style={formStyle} onSubmit={submitSearch}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Search For:</InputLabel>
            <Select
                name="search"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={input.search}
                label="Search For:"
                onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}>
                <MenuItem value="flims">Flims</MenuItem>
                <MenuItem value="people">People</MenuItem>
                <MenuItem value="planets">Planets</MenuItem>
                <MenuItem value="species">Species</MenuItem>
                <MenuItem value="starships">Starships</MenuItem>
                <MenuItem value="vehicles">Vehicles</MenuItem>
            </Select>
        </FormControl>
        <FormControl style={{marginLeft: '1rem'}}>
            <TextField
            name="id"
            value={input.id}
            onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
            id="demo-helper-text-aligned-no-helper"
            label="ID:"/>
        </FormControl>
        <FormControl style={{marginLeft: '1rem'}}>
            <Button type="submit" variant="contained" size="large">Search</Button>
        </FormControl>
    </form>
);
};

export default Search;