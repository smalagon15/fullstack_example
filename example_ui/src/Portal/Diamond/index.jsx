import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.scss'

const Diamond = (props) => {

    return(
        <div className='container pending-form'>
            <h2>Welcome to Diamond!</h2>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch', zIndex: 2 },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </Box>
        </div>
    )
}
export default Diamond;