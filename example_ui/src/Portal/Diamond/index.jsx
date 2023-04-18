import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import DiamondAPI from '../../Shared/API/DiamondAPI';
import './index.scss'

const Diamond = (props) => {
    const [dimension, setDimension] = useState(0);
    const [resultArray, setResultArray] = useState([]);

    const updateValue = (event) =>{
        setDimension(event.target.value)
    }
    const sendRequest = async () => {
        if(dimension){
            const results = await DiamondAPI.generateDiamond(dimension)
            setResultArray(results);
        }
    }
    const clear = () => {
        setDimension(0);
        setResultArray([]);
    }

    return(
        <div className='diamond'>
            <h2>Welcome to Diamond!</h2>
            <div style={{margin:'auto', width:'fit-content'}}>
                <Stack direction="row" spacing={1}>
                    <TextField
                        id="dimond-input"
                        label="# of Diamonds"
                        type="number"
                        value ={dimension}
                        onChange = {updateValue}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={sendRequest}
                        >
                        Generate
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={clear}
                        >
                        Clear
                    </Button>
                </Stack>
            </div>
            <div className='results'>
                {resultArray.map((value, i) => {
                    return <div style={{textAlign:'center'}}>{value}</div>
                })}
            </div>
        </div>
    )
}
export default Diamond;