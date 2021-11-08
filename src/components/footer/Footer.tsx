import { Box, Container, Divider, Grid } from '@material-ui/core'
import React from 'react'
import Link from 'next/link'
import { styled } from '@material-ui/core/styles'

const Footer = () => {
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    // maxWidth: '50%',
    // maxHeight: '100%',
  })

  return (
    <footer>
      <Box bgcolor='BLACK'>
        <Container sx={{ py: '2px', pb: '10px', color: 'white' }}>
          <Box overflow='hidden'>
            <Grid container spacing={3} sx={{ pb: '10px' }} margin='0px'>
              <Grid container lg={9} md={9} sm={9} xs={12} margin='0px'>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Box fontSize='30px'
                       fontWeight='600'
                       lineHeight='1'
                       color='white'
                       textAlign='center'
                       py='15px'
                       pb='45px'
                       height='60px'
                       fontStyle='italic'>
                    Contáctanos:
                  </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4} textAlign='center'>
                  <Box py='20px'>
                    <Img alt='phone' src='/assets/images/footer/phone.png' />
                  </Box>
                  <Box
                    fontSize='15px'
                    fontWeight='600'
                    lineHeight='1'
                    color='white'
                  >
                    Número de celular:
                  </Box>
                  <Box py={0.6} mb={2} color='grey.500'>
                    55 3951 5969
                  </Box>
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={4} textAlign='center'>
                  <Box py='20px'>
                    <Img alt='email' src='/assets/images/footer/email.png' />
                  </Box>
                  <Box
                    fontSize='15px'
                    fontWeight='600'
                    lineHeight='1'
                    color='white'
                  >
                    Correo electrónico:
                  </Box>
                  <Box py={0.6} mb={2} color='grey.500'>
                    ventas@lagranjaurbana.com
                  </Box>
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={4} textAlign='center'>
                  <Box py='20px'>
                    <Img alt='location' src='/assets/images/footer/location.png' />
                  </Box>
                  <Box fontSize='15px'
                       fontWeight='600'
                       lineHeight='1'
                       color='white'>
                    Domicilio:
                  </Box>
                </Grid>
              </Grid>
              <Grid container lg={3} md={3} sm={3} xs={12} margin='0px' py='10px'>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Box fontSize='30px'
                       fontWeight='600'
                       lineHeight='1'
                       color='white'
                       textAlign='center'
                       py='15px'
                       pb='45px'
                       height='60px'
                       fontStyle='italic'>
                    Síguenos en:
                  </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Link href='https://www.facebook.com/'>
                    <a>
                      <Img alt='facebook' src='/assets/images/footer/facebook.png' height='50px' />
                    </a>
                  </Link>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Link href='https://www.instagram.com/'>
                    <a>
                      <Img alt='instagram' src='/assets/images/footer/instagram.png' height='50px' />
                    </a>
                  </Link>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <Link
                    href='https://wa.me/525539515969?text=Te%20damos%20la%20bienvenida%20al%20canal%20oficial%20de%20La%20Granja%20Urbana,%20env%C3%ADa%20este%20mensaje%20para%20continuar'>
                    <a>
                      <Img alt='whatsapp' src='/assets/images/footer/whatsapp.png' height='50px' />
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={3}>
              <Grid item lg={3} md={3} sm={3} xs={4}>
                <h3>Quiénes somos:</h3>
                <Link href='/nosotros/conocenos'>Conócenos</Link><br />
                <Link href='/prodcuts'>Productos</Link>
              </Grid>

              <Grid item lg={3} md={3} sm={3} xs={4}>
                <h3>Políticas:</h3>
                <Link href='/'>Aviso de privacidad</Link><br />
                <Link href='/'>Términos y condiciones</Link><br />
                <Link href='/'>Metodos de pago y políticas</Link><br />
                <Link href='/'>Garantia de productos</Link>
              </Grid>

              <Grid item lg={3} md={3} sm={3} xs={4}>
                <h3>Atención a clientes</h3>
                <Link href='/'>Registrarme en La Grnaja Urbana</Link><br />
                <Link href='/'>Facturación</Link><br />
                <Link href='/'>Preguntas frecuentes</Link>
              </Grid>

              <Grid item lg={3} md={3} sm={3} xs={12}>
                <Grid container spacing={3}>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <Img alt='visa' src='/assets/images/footer/visa.png' height='50px' />
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <Img alt='mastercard' src='/assets/images/footer/mc.png' height='50px' />
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <Img alt='american express' src='/assets/images/footer/amex.png' height='50px' />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer
