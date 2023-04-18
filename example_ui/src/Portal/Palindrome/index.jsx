import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import PalindromeAPI from '../../Shared/API/PalindromeAPI';
import './index.scss'

const Palindrome = (props) => {
    const [word, setWord] = useState('');
    const [resultsArray, setResultArray] = useState([]);

    const updateValue = (event) =>{
        setWord(event.target.value)
    }
    const sendRequest = async () => {
        if(word){
            const response = await PalindromeAPI.isValid(word)
            const copy = [...resultsArray];
            copy.push({
                word: word,
                result: response
            });
            setResultArray(copy);
        }
    }
    const removeRequest = (i) => {
        const copy = [...resultsArray];
        copy.splice(i,1);
        setResultArray(copy);
    }
    const clear = () => {
        setWord('');
        setResultArray([]);
    }

    return(
        <div className='palindrome'>
            <h2>Welcome to Palindrome!</h2>
            <div style={{margin:'auto', width:'fit-content'}}>
                <Stack direction="row" spacing={1}>
                    <TextField
                        id="palindrome-input"
                        label="Palindrome Test"
                        value ={word}
                        onChange = {updateValue}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={sendRequest}
                        >
                        Test
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
                {resultsArray.map((value, i) => {
                    return <Alert
                            severity={value.result?"success":"error"}
                            action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    removeRequest(i);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                            }
                            sx={{ mb: 2 }}
                        >
                            <AlertTitle>{value.word} is a palindrome</AlertTitle>
                        </Alert>
                })}
            </div>
        </div>
    )
}
export default Palindrome;