'use client'
import { Box, useMediaQuery, useTheme, Typography, TextField, styled } from '@mui/material';

import Button, { ButtonProps } from '@mui/material/Button';
import { green } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';




const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
  fontWeight: 600
}));


function MyComponent() {
  

  return (
    <Box component="main" 
      sx={{ 
        p: 10, 
        height: "100vh", 
        display: "flex",
        justifyContent: "center",   
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(herbario-login.jpg)',       
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '@media (max-width: 750px)': {
          pt: 15,
          pl: 2,
          pr: 2
        }
        }}>
        <Box component="section" 
          sx={{ 
            width: "100%",
            paddingInline: "2rem",
            maxWidth: "500px", 
            backgroundColor: "#F6FFED",
            borderRadius: "10px",
            '@media (max-width: 550px)': {
              p: 0
            },
          }}>

            <Container maxWidth="sm" sx={{ height: "100%", paddingTop: "7rem"}}>
              <Typography textAlign={"center"} fontWeight={500} variant="h4" component="h4">
                            Acervo de Plantas do IFPI
              </Typography>

              <Typography textAlign={"center"} margin={"10px auto"} width={"80%"} component="p">
                            Faça o login para acessar o dashboard e continuar sua jornada.
              </Typography>

              <Stack spacing={3}
                sx={{
                  display: "flex", 
                  flexDirection: "column",
                  padding: "2rem 2rem",
                  '@media (max-width: 750px)': {
                    p: 0
                  },
                  }}>

                    <Stack spacing={1}>
                    <TextField required 
                                      size="small"
                                      id="outlined-basic" 
                                      label="Email" 
                                      variant="outlined"
                                      sx={{backgroundColor: "white"}}/>

                                    <TextField
                                      required
                                      size='small'
                                      id="outlined-password-input"
                                      label="Senha"
                                      type="password"
                                      autoComplete="current-password"
                                      sx={{backgroundColor: "white"}}
                                    />
                    </Stack>
                

                <ColorButton variant="contained">
                  Login
                </ColorButton>

                <Container sx={{display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center"}}>
                <Typography textAlign={"center"} component="p">
                  Não tem uma conta? 
                </Typography> 
                <Link href="register">Criar conta</Link>
                </Container>
                

          
              </Stack>
            </Container>

            

            

          
        </Box>
      
    </Box>
  );
}

export default MyComponent;
