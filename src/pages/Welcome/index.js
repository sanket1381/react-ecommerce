import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import './welcome.css'
const theme = createTheme();

export default function Welcome() {
 React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ThemeProvider theme={theme} >
            <Container component="main" sx={{ maxWidth: "xs", maxWidth: { lg: '1280px' }, }} >
                <CssBaseline />
                <Paper
                    elevation={4}
                    sx={{
                        marginTop: '30px', marginBottom: '30px', display: {sm:'flex'}, flexDirection:'row',
                    }}
                >
                    <div className='signimg'>
                        <img src="https://static.vecteezy.com/system/resources/previews/002/737/795/non_2x/online-registration-form-and-sign-in-button-concept-illustration-login-illustration-online-registration-illustrations-free-vector.jpg" alt="" width={'100%'} />
                    </div>

                    <div className='welcome'>

                        <Typography component="h1" variant="h5" sx={{ marginBottom: '30px', textAlign: 'center' }}>
                            Welcome
                        </Typography>
                        <Typography component="h1" variant="h5" sx={{ marginBottom: '30px', textAlign: 'center' }}>
                            Account Created Successfully.
                        </Typography>

                        <div style={{textAlign:'center'}}>
                            <Link to={'/login'} >
                                <Button type="submit" variant="contained"
                                    sx={{ mx: "auto",marginBottom:'50px' }}
                                    color="success" >
                                    Sign In
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Paper>

            </Container>
        </ThemeProvider>
    );
}