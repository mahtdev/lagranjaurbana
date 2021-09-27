import DropZone from '@component/DropZone'
import DeliveryBox from '@component/icons/DeliveryBox'
import DashboardPageHeader from '@component/layout/DashboardPageHeader'
import VendorDashboardLayout from '@component/layout/VendorDashboardLayout'
import { Button, Grid, MenuItem, TextField } from '@material-ui/core'
import { Formik } from 'formik'
import Link from 'next/link'
import React, { useState } from 'react'
import * as yup from 'yup'
import SaveIcon from '@material-ui/icons/Save'
import categories from '@data/categories'
import units from '@data/units'
import Card from '@material-ui/core/Card'

const OrderDetails = () => {
  const [subCategoryDisabled, setSubCategoryDisabled] = useState(true)
  const [categorySelected, setCategorySelected] = useState('0')
  const [subCategorySelected, setSubCategorySelected] = useState('0')

  const handleFormSubmit = async (values: any) => {
    console.log(values)
  }

  const subCategoryDisabledState = {
    disabled: subCategoryDisabled,
  }

  function returnSubCategories(id: number) {
    if (!isNaN(id)) {
      const data = categories.find(value => value.id == id)
      if (data != null) {
        return (data.subcategory.map(value => {
          return (<MenuItem value={value.id}>{value.name}</MenuItem>)
        }))
      }
    }
    return (<MenuItem value='1'>No hay información</MenuItem>)
  }

  return (
    <VendorDashboardLayout>
      <DashboardPageHeader
        title='Nuevo producto'
        icon={DeliveryBox}
        button={
          <Link href='/vendor/products'>
            <Button color='info' sx={{ bgcolor: 'gray.500', px: '2rem' }}>
              Regresar a la lista de productos
            </Button>
          </Link>
        }
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
                <Grid item sm={4} xs={12}>
                  <TextField
                    name='category'
                    label='Seleccionar Categoria'
                    placeholder='Categoria'
                    fullWidth
                    select
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e)
                      setCategorySelected(e.target.value)
                      setSubCategoryDisabled(false)
                    }}
                    value={values.category || ''}
                    error={!!touched.category && !!errors.category}
                    helperText={touched.category && errors.category}
                  >
                    {categories.map(category => <MenuItem value={category.id}>{category.name}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <TextField
                    name='subcategory'
                    label='Seleccionar Subcategoria'
                    placeholder='Subcategoria'
                    fullWidth
                    select
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e)
                      setSubCategorySelected(e.target.value)
                    }}
                    value={values.subcategory || ''}
                    error={!!touched.subcategory && !!errors.subcategory}
                    helperText={touched.subcategory && errors.subcategory}
                    inputProps={subCategoryDisabledState}
                  >
                    {categorySelected && returnSubCategories(parseInt(categorySelected))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <DropZone
                    onChange={(files) => {
                      console.log(files)
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='description'
                    label='Descripción'
                    placeholder='Descripción'
                    rows={6}
                    multiline
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description || ''}
                    error={!!touched.description && !!errors.description}
                    helperText={touched.description && errors.description}
                  />
                </Grid>
              </Grid>
            </Card>
            <Card sx={{ p: '30px', marginTop: '10px' }} variant='outlined'>
              <h3>Inventario</h3>
              <Grid container spacing={3}>
                <Grid item sm={4} xs={12}>
                  <TextField
                    name='stock'
                    label='Cantidad'
                    placeholder='Cantidad'
                    type='number'
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.stock || ''}
                    error={!!touched.stock && !!errors.stock}
                    helperText={touched.stock && errors.stock}
                  />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <TextField
                    name='unit'
                    label='Seleccionar Unidad'
                    placeholder='Unidad'
                    fullWidth
                    select
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.unit || ''}
                    error={!!touched.unit && !!errors.unit}
                    helperText={touched.unit && errors.unit}
                  >
                    {units.map(value => <MenuItem value={value.id}>{value.name}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <TextField
                    name='price'
                    label='Precio de compra'
                    placeholder='Precio de compra'
                    type='number'
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.price || ''}
                    error={!!touched.price && !!errors.price}
                    helperText={touched.price && errors.price}
                  />
                </Grid>
              </Grid>
            </Card>
            <Card sx={{ p: '30px', marginTop: '10px' }} variant='outlined'>
              <h3>Venta al publico</h3>
              <Grid container spacing={3}>
                <Grid item sm={4} xs={12}>
                  <TextField
                    name='stock_sale'
                    label='Cantidad minima'
                    placeholder='Cantidad minima'
                    type='number'
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.stock_sale || ''}
                    error={!!touched.stock_sale && !!errors.stock_sale}
                    helperText={touched.stock_sale && errors.stock_sale}
                  />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <TextField
                    name='unit_sale'
                    label='Seleccionar Unidad'
                    placeholder='Unidad'
                    fullWidth
                    select
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.unit_sale || ''}
                    error={!!touched.unit_sale && !!errors.unit_sale}
                    helperText={touched.unit_sale && errors.unit_sale}
                  >
                    {units.map(value => <MenuItem value={value.id}>{value.name}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <TextField
                    name='sale_price'
                    label='Precio de venta'
                    placeholder='Precio de venta'
                    type='number'
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.sale_price || ''}
                    error={!!touched.sale_price && !!errors.sale_price}
                    helperText={touched.sale_price && errors.sale_price}
                  />
                </Grid>
              </Grid>
            </Card>
            <Card sx={{ p: '30px', marginTop: '10px' }} variant='outlined'>
              <h3>Otros</h3>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    name='tags'
                    label='Tags'
                    placeholder='Tags'
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.tags || ''}
                    error={!!touched.tags && !!errors.tags}
                    helperText={touched.tags && errors.tags}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    name='code'
                    label='Codigo de barras'
                    placeholder='Codigo de barras'
                    disabled={true}
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={categorySelected.toString().padStart(3,"0") + subCategorySelected.toString().padStart(3,"0")}
                    error={!!touched.code && !!errors.code}
                    helperText={touched.code && errors.code}
                  />
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
              Guardar producto
            </Button>
          </form>
        )}
      </Formik>
      {/*</Card>*/}
    </VendorDashboardLayout>
  )
}

const initialValues = {
  name: '',
  stock: '',
  price: '',
  sale_price: '',
  description: '',
  tags: '',
  category: '',
  subcategory: '',
  unit: '',
  code: '',
  stock_sale: '',
  unit_sale: '',
}

const checkoutSchema = yup.object().shape({
  name: yup.string().required('required'),
  category: yup.string().required('required'),
  subcategory: yup.string().required('required'),
  unit: yup.string().required('required'),
  stock: yup.number().required('required'),
  price: yup.number().required('required'),
  sale_price: yup.number().required('required'),
  stock_price: yup.number().required('required'),
  unit_sale: yup.string().required('required'),
})

export default OrderDetails
