import { Error as ErrorIcon } from '@mui/icons-material'
import { Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container maxWidth={"lg"} sx={{ height: "100vh"}} >
      <Stack alignItems={"center"} justifyContent={"center"} height={"100%"} spacing={"2rem"} >
        <ErrorIcon sx={{ fontSize: "5rem" }} />
        <Typography variant='h2'>404</Typography>
        <Typography variant='h5'>Oops !! Not Found</Typography>
        <Link to='/'>Go back to home</Link>
      </Stack>
    </Container>
  )
}

export default NotFound