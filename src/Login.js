import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <form className='form-login'>
        <TextField InputLabelProps={{
           shrink: true,
         }}
         type='text' id="outlined-basic" label="email" variant="outlined" placeholder='enter email' value="sandy@gmail.com" />
        <TextField InputLabelProps={{
           shrink: true,
         }}
         type='password' id="outlined-basic" label="password" variant="outlined" placeholder='enter password' value="dsf;asldhf;asldhf" />
        <Button variant="contained">submit</Button>

    </form>
  )
}

export default Login