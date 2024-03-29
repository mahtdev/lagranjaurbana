import React from 'react'
import NavbarLayout from '@component/layout/NavbarLayout'
import DashboardPageHeader from '@component/layout/DashboardPageHeader'
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core'
import { Formik } from 'formik'
import Card from '@material-ui/core/Card'
import SaveIcon from '@material-ui/icons/Save'
import * as yup from 'yup'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import Link from 'next/link'

const Ayuda = () => {

  const [state, setState] = React.useState(false)
  const [value, setValue] = React.useState('phone')
  const [modal, setModal] = React.useState(false)

  const handleChangeRadioButton = (event: any) => {
    setValue(event.target.value)
  }

  const handleClose = () => {
    //TODO mandar la pagina de home
    console.log('Mandar a home')
  }

  const handleFormSubmit = async (values: any) => {
    Object.defineProperty(values, 'contact', {
      value: state,
      writable: true,
      enumerable: true,
      configurable: true,
    })
    Object.defineProperty(values, 'preference', {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true,
    })
    fetch('api/email-help', {
      method: 'post',
      body: JSON.stringify(values),
    }).then(res => {
      if (!res.ok) {
        console.error('Problem1 to send email: ' + res)
      } else {
        setModal(true)
      }
    }).catch(err => {
      console.error('Problem2 to send email: ' + err)
    })
  }

  const handleChangeCheckBox = (event: any) => {
    setState(event.target.checked)
  }

  return (
    <NavbarLayout>
      <DashboardPageHeader
        title='¿Necesitas ayuda?'
        icon={HelpOutlineIcon}
      />

      {/*<Card sx={{ p: '30px' }}>*/}
      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Card sx={{ p: '30px' }} variant='outlined'>
              <Grid container spacing={3}>
                <Grid item sm={4} xs={12}>
                  <TextField
                    name='name'
                    label='Nombre'
                    placeholder='Nombre'
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name || ''}
                    error={!!touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item sm={4} xs={6}>
                  <TextField
                    name='father'
                    label='Apellido Paterno'
                    placeholder='Apellido Paterno'
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.father || ''}
                    error={!!touched.father && !!errors.father}
                    helperText={touched.father && errors.father}
                  />
                </Grid>
                <Grid item sm={4} xs={6}>
                  <TextField
                    name='mother'
                    label='Apellido Materno'
                    placeholder='Apellido Materno'
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.mother || ''}
                    error={!!touched.mother && !!errors.mother}
                    helperText={touched.mother && errors.mother}
                  />
                </Grid>
                <Grid item sm={6} xs={6}>
                  <TextField
                    name='email'
                    label='Correo electrónico'
                    placeholder='Correo electrónico'
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email || ''}
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item sm={6} xs={6}>
                  <TextField
                    name='phone'
                    label='Telefono'
                    placeholder='Telefono'
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone || ''}
                    error={!!touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='comments'
                    label='Comentarios'
                    placeholder='Comentarios'
                    rows={6}
                    multiline
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.comments || ''}
                    error={!!touched.comments && !!errors.comments}
                    helperText={touched.comments && errors.comments}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state}
                        onChange={handleChangeCheckBox}
                        name='accept'
                        color='primary'
                      />
                    }
                    label='Acepto para que me contacten para seguimiento'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel component='legend'>Preferencia de comunicación</FormLabel>
                  <RadioGroup name='preference' value={value} onChange={handleChangeRadioButton}>
                    <FormControlLabel value='phone' control={<Radio />} label='Telefono' />
                    <FormControlLabel value='email' control={<Radio />} label='Correo electrónico' />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Card>
            <Button
              variant='outlined'
              color='info'
              type='submit'
              sx={{ mt: '25px' }}
              startIcon={<SaveIcon />}
            >
              Enviar
            </Button>
          </form>
        )}
      </Formik>
      <Dialog
        open={modal}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Gracias por compartir tu informacion'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Nuestro equipo esta trabajando para resolver tus dudas lo antes posible,
            solo te pedimos un poco de paciencia y nuestro equipo estara en contacto
            contigo lo más pronto posible
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link href='/'>
            <a>
              <Button>Continuar</Button>
            </a>
          </Link>
        </DialogActions>
      </Dialog>
    </NavbarLayout>

  )
}

const initialValues = {
  name: '',
  father: '',
  mother: '',
  email: '',
  phone: '',
  comments: '',
}

const checkoutSchema = yup.object().shape({
  name: yup.string().required('requerido'),
  father: yup.string().required('requerido'),
  mother: yup.string().required('requerido'),
  email: yup.string().required('requerido'),
  comments: yup.string().required('requerido'),
})

export default Ayuda