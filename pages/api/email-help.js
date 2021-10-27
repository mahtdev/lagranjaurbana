// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req, res) {
  const body = JSON.parse(req.body)
  const data = {
    to: 'ventas@lagranjaurbana.com',
    from: {
      email: 'admin@lagranjaurbana.com',
      name: 'Portal web',
    },
    templateId: 'd-e671f9460401455586398b236700ccf4',
    dynamic_template_data: {
      name: `${body.name} ${body.father} ${body.mother}`,
      email: body.email,
      phone: body.phone,
      preference: `${body.preference.toString() == 'phone' ? 'Telefono' : 'Correo'}`,
      comments: body.comments,
    },
  }
  console.log('Enviando mensaje con template de ayuda')
  console.log(data)
  mail.send(data).then(() => {
  }, console.error)
  res.status(200).json({ status: 'Ok' })
}
