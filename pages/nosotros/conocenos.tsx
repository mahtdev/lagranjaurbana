import React from 'react'
import NavbarLayout from '@component/layout/NavbarLayout'
import { styled } from '@material-ui/core/styles'
import { Divider, Grid } from '@material-ui/core'
import { Box } from '@material-ui/system'
import { Span } from '@component/Typography'

const Conocenos = () => {
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  })

  return (
    <NavbarLayout>
      <Grid container spacing='3'>
        <Grid item md={3} sm={3} xs={12}>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
          <Box display='flex' justifyContent='right' height='90%' width='90%'>
            <Img alt='complex' src='/assets/images/conocenos/1.png' />
          </Box>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
          <Box display='flex' flexDirection='column'>
            <Box display='flex' justifyContent='center'>
              <Span color='#034720' font-weight='bold'><h1> LA GRANJA URBANA </h1></Span>
            </Box>
            <Divider />
            {/*<Span color='#034720' font-weight='bold'><h3> TUS ALIMENTOS EN UN SOLO LUGAR </h3></Span>*/}
            <Span paddingLeft='5px' textAlign='justify'><h3>
              Somos una empresa familiar 100% Mexicana, inspirada en la grandeza de nuestro país, su gente, su campo
              y sus productos.
            </h3></Span>
          </Box>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
          <Box display='flex' flexDirection='column'>
            <Box display='flex' justifyContent='center'>
              <Span color='#034720' font-weight='bold'><h1> Misión </h1></Span>
            </Box>
            <Divider />
            {/*<Span color='#034720' font-weight='bold'><h3> TUS ALIMENTOS EN UN SOLO LUGAR </h3></Span>*/}
            <Span paddingRight='5px' textAlign='justify'><h3>
              Nace para vender y distribuir alimentos frescos de excelente calidad,
              todo desde un solo lugar, asegurando que cada uno de nuestros clientes reciban los alimentos que desean en
              tiempo y forma.
            </h3></Span>
          </Box>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
          <Box display='flex' justifyContent='right' height='90%' width='90%' paddingLeft='30px'>
            <Img alt='complex' src='/assets/images/conocenos/2.png' />
          </Box>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
          <Box display='flex' justifyContent='right' height='90%' width='90%'>
            <Img alt='complex' src='/assets/images/conocenos/3.png' />
          </Box>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
          <Box display='flex' flexDirection='column'>
            <Box display='flex' justifyContent='center'>
              <Span color='#034720' font-weight='bold'><h1> Calidad </h1></Span>
            </Box>
            <Divider color="green" />
            {/*<Span color='#034720' font-weight='bold'><h3> TUS ALIMENTOS EN UN SOLO LUGAR </h3></Span>*/}
            <Span paddingLeft='5px' textAlign='justify'><h3>
              Nosotros seleccionamos tus alimentos con la mejor calidad y frescura para que los recibas en tu hogar,
              oficina o negocio con todas las medidas de higiene que merece tú familia.
            </h3></Span>
          </Box>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
          <Box display='flex' flexDirection='column'>
            <Box display='flex' justifyContent='center'>
              <Span color='#034720' font-weight='bold'><h1> Nuestro equipo </h1></Span>
            </Box>
            <Divider />
            {/*<Span color='#034720' font-weight='bold'><h3> TUS ALIMENTOS EN UN SOLO LUGAR </h3></Span>*/}
            <Span paddingRight='5px' textAlign='justify'><h3>
              Trabajamos fuerte para cada una de nuestras familias, con la convicción de contribuir al desarrollo de la
              sociedad y su economía, siendo incluyentes y en busca de personas que quieran superarse día a día
              trabajando por mejores oportunidades.
            </h3></Span>
          </Box>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
          <Box display='flex' justifyContent='right' height='90%' width='90%' paddingLeft='30px'>
            <Img alt='complex' src='/assets/images/conocenos/4.png' />
          </Box>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
        </Grid>
      </Grid>
    </NavbarLayout>

  )
}

export default Conocenos