import FlexBox from '@component/FlexBox'
import { H4, Span } from '@component/Typography'
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Check } from '@material-ui/icons'

const GrocerySection2 = () => {

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  })

  return (
    <Grid container spacing={3}>
      {serviceList.map((item, ind) => (
        <Grid item md={4} sm={4} xs={12} key={ind}>
          <FlexBox
            alignItems='center'
            p={3}
            border='1px solid'
            borderColor='grey.400'
            borderRadius='8px'
            boxShadow='2'
          >
            <FlexBox alignItems='center' color='grey.600' fontSize='50px' mr={2} minWidth='50px' minHeight='50px'>
              <Img alt='complex' src={item.imgUri} />
            </FlexBox>
            <div>
              <H4 color='grey.900' fontSize='1.25rem' fontWeight='700'>
                {item.title}
              </H4>
              {/*<Span color='grey.800'>{item.subtitle1}</Span><br />*/}
              {/*<Span color='grey.800'>{item.subtitle2}</Span><br />*/}
              {/*<Span color='grey.800'>{item.subtitle3}</Span>*/}
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Check fontSize='small' />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.subtitle1}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check fontSize='small' />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.subtitle2}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check fontSize='small' />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.subtitle3}
                  />
                </ListItem>
              </List>
            </div>
          </FlexBox>
        </Grid>
      ))}
      <Grid item md={4} sm={4} xs={12}>
        <FlexBox
          alignItems='center'
          p={3}
          border='1px solid'
          borderColor='grey.400'
          borderRadius='8px'
          boxShadow='2'
        >
          <FlexBox alignItems='center' color='grey.600' fontSize='50px' mr={2} minWidth='50px' minHeight='50px'>
            <Img alt='complex' src='/assets/images/banners/tarjetas.png' />
          </FlexBox>
          <div>
            <H4 color='grey.900' fontSize='1.25rem' fontWeight='700'>
              Métodos de pago
            </H4>
            {/*<Span color='grey.800'>{item.subtitle1}</Span><br />*/}
            {/*<Span color='grey.800'>{item.subtitle2}</Span><br />*/}
            {/*<Span color='grey.800'>{item.subtitle3}</Span>*/}
            <List>
              <ListItem>
                <ListItemIcon>
                  <Check fontSize='small' />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Span>
                      <span color='grey.900' style={{ fontWeight: 600 }}>Pago página web: </span>
                      <span color='grey.800'>Aceptamos tarjetas de crédito, debito, AMEX, Vales y SPEI</span>
                    </Span>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check fontSize='small' />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Span>
                      <span color='grey.900' style={{ fontWeight: 600 }}>Pago contra-entrega: </span>
                      <span color='grey.800'>Aceptamos todas las anteriores y efectivo</span>
                    </Span>
                  }
                />
              </ListItem>
            </List>
          </div>
        </FlexBox>
      </Grid>
    </Grid>
  )
}

const serviceList = [
  {
    imgUri: '/assets/images/banners/camion.png',
    title: 'Envíos a domicilio',
    subtitle1: 'Pide hoy hasta las 7 pm y ¡Recíbelo mañana!',
    subtitle2: 'Escoge tu horario de entrega',
    subtitle3: 'Entrega segura y sanitizada',
  },
  {
    imgUri: '/assets/images/banners/calidad.png',
    title: 'Garantía en nuestros productos',
    subtitle1: 'Calidad',
    subtitle2: 'Sabor',
    subtitle3: 'Frescura',
  },
]

export default GrocerySection2
