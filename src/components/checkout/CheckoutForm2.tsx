import Card1 from '@component/Card1'
import FlexBox from '@component/FlexBox'
import LazyImage from '@component/LazyImage'
import { H6, Paragraph } from '@component/Typography'
import {
  Avatar,
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core'
import { Box } from '@material-ui/system'
import { format } from 'date-fns'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'

type DateProps = {
  label: string
  value: string
}

const CheckoutForm2 = () => {
  const [hasVoucher, setHasVoucher] = useState(false)
  const [dateList, setDateList] = useState<DateProps[]>([])
  const router = useRouter()

  const handleFormSubmit = async (values: any) => {
    console.log(values)
    router.push('/payment')
  }

  const handleFieldValueChange =
    (value: string, fieldName: string, setFieldValue: any) => () => {
      setFieldValue(fieldName, value)
    }

  const toggleHasVoucher = () => {
    setHasVoucher((has) => !has)
  }

  useEffect(() => {
    let list = []
    let today = new Date()
    let dateCount = today.getDate()

    list.push({
      label: format(today, 'dd MMMM'),
      value: today.toISOString(),
    })

    for (let i = 1; i < 10; i++) {
      today.setDate(dateCount + i)
      list.push({
        label: format(today, 'dd MMMM'),
        value: today.toISOString(),
      })
    }

    setDateList(list)
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutSchema}
      onSubmit={handleFormSubmit}
    >
      {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Card1 sx={{ mb: '1.5rem' }}>
            <FlexBox alignItems="center" mb={3.5}>
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                  height: 32,
                  width: 32,
                  color: 'primary.text',
                  mr: '0.875rem',
                }}
              >
                1
              </Avatar>
              <Typography fontSize="20px">Delivery Details</Typography>
            </FlexBox>

            <Box mb={3.5}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    name="date"
                    label="Delivery Date"
                    error={!!touched.date && !!errors.date}
                    helperText={touched.date && errors.date}
                    select
                    fullWidth
                  >
                    {dateList.map((item) => (
                      <MenuItem value={item.value} key={item.label}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    name="date"
                    label="Delivery Time"
                    error={!!touched.time && !!errors.time}
                    helperText={touched.time && errors.time}
                    select
                    fullWidth
                  >
                    {timeList.map((item) => (
                      <MenuItem value={item.value} key={item.value}>
                        {item.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Box>

            <Typography mb={1.5}>Delivery Address</Typography>
            <Grid container spacing={3}>
              {addressList.map((item, ind) => (
                <Grid item md={4} sm={6} xs={12} key={ind}>
                  <Card
                    sx={{
                      backgroundColor: 'grey.100',
                      p: '1rem',
                      boxShadow: 'none',
                      border: '1px solid',
                      cursor: 'pointer',
                      borderColor:
                        item.address === values.address
                          ? 'primary.main'
                          : 'transparent',
                    }}
                    onClick={handleFieldValueChange(
                      item.address,
                      'address',
                      setFieldValue
                    )}
                  >
                    <H6 mb={0.5}>{item.addressType}</H6>
                    <Paragraph color="grey.700">{item.address}</Paragraph>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card1>

          <Card1 sx={{ mb: '1.5rem' }}>
            <FlexBox alignItems="center" mb={3.5}>
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.text',
                  mr: '0.875rem',
                  height: 32,
                  width: 32,
                }}
              >
                3
              </Avatar>
              <Typography fontSize="20px">Personal Details</Typography>
            </FlexBox>

            <Typography mb={1.5}>Contact Information</Typography>

            <Grid container spacing={3}>
              {contactList.map((item) => (
                <Grid item md={4} sm={6} xs={12} key={item.contact}>
                  <Card
                    sx={{
                      backgroundColor: 'grey.100',
                      p: '1rem',
                      boxShadow: 'none',
                      border: '1px solid',
                      cursor: 'pointer',
                      borderColor:
                        item.contact === values.contact
                          ? 'primary.main'
                          : 'transparent',
                    }}
                    onClick={handleFieldValueChange(
                      item.contact,
                      'contact',
                      setFieldValue
                    )}
                  >
                    <H6 mb={0.5}>{item.contactType}</H6>
                    <Paragraph color="grey.700">{item.contact}</Paragraph>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card1>

          <Card1 sx={{ mb: '1.5rem' }}>
            <FlexBox alignItems="center" mb={3.5}>
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.text',
                  mr: '0.875rem',
                  height: 32,
                  width: 32,
                }}
              >
                3
              </Avatar>
              <Typography fontSize="20px">Payment Details</Typography>
            </FlexBox>

            <Typography mb={1.5}>Saved Payment Methods</Typography>
            <Grid container spacing={3}>
              {paymentMethodList.map((item) => (
                <Grid item md={4} sm={6} xs={12} key={item.last4Digits}>
                  <Card
                    sx={{
                      backgroundColor: 'grey.100',
                      p: '1rem',
                      boxShadow: 'none',
                      border: '1px solid',
                      cursor: 'pointer',
                      borderColor:
                        item.last4Digits === values.card
                          ? 'primary.main'
                          : 'transparent',
                    }}
                    onClick={handleFieldValueChange(
                      item.last4Digits,
                      'card',
                      setFieldValue
                    )}
                  >
                    <Box height="24px" width="36px" position="relative" mb={1}>
                      <LazyImage
                        src={`/assets/images/payment-methods/${item.cardType}.svg`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </Box>

                    <Paragraph color="grey.700">
                      **** **** **** {item.last4Digits}
                    </Paragraph>
                    <Paragraph color="grey.700">{item.name}</Paragraph>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Button
              sx={{
                color: 'primary.main',
                mt: '1.5rem',
                lineHeight: 1,
              }}
              onClick={toggleHasVoucher}
            >
              I have a voucher
            </Button>

            {hasVoucher && (
              <FlexBox mt={3} maxWidth="400px">
                <TextField
                  name="voucher"
                  placeholder="Enter voucher code here"
                  fullWidth
                  value={values.voucher || ''}
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  sx={{ ml: '1rem' }}
                >
                  Apply
                </Button>
              </FlexBox>
            )}

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ mt: '1.5rem' }}
            >
              Place Order
            </Button>
          </Card1>
        </form>
      )}
    </Formik>
  )
}

const addressList = [
  {
    addressType: 'Home',
    address: '435 Bristol Avenue, Abington MA 2351',
  },
  {
    addressType: 'Office',
    address: '777 Brockton Avenue, Abington MA 2351',
  },
  {
    addressType: 'Office 2',
    address: '777 Kazi Avenue, Abington MA 2351',
  },
]

const contactList = [
  {
    contactType: 'Primary',
    contact: '+1-202-555-0119',
  },
  {
    contactType: 'Secondary',
    contact: '+1-202-555-0222',
  },
]

const paymentMethodList = [
  {
    cardType: 'Amex',
    last4Digits: '4765',
    name: 'Jaslynn Land',
  },
  {
    cardType: 'Mastercard',
    last4Digits: '5432',
    name: 'Jaslynn Land',
  },
  {
    cardType: 'Visa',
    last4Digits: '4543',
    name: 'Jaslynn Land',
  },
]

const timeList = [
  {
    label: '9AM - 11AM',
    value: '9AM - 11AM',
  },
  {
    label: '11AM - 1PM',
    value: '11AM - 1PM',
  },
  {
    label: '3PM - 5PM',
    value: '3PM - 5PM',
  },
  {
    label: '5PM - 7PM',
    value: '5PM - 7PM',
  },
]

const initialValues = {
  address: '',
  contact: '',
  card: '',
  date: '',
  time: '',
  voucher: '',
}

const checkoutSchema = yup.object().shape({
  address: yup.string().required('required'),
  contact: yup.string().required('required'),
  card: yup.string().required('required'),
  date: yup.object().required('required'),
  time: yup.object().required('required'),
  voucher: yup.string(),
})

export default CheckoutForm2
