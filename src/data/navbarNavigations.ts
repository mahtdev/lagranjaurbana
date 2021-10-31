import NoteAdd from '@material-ui/icons/NoteAdd'

const navbarNavigations = [
  {
    title: 'Nosotros',
    child: [
      {
        title: 'Conócenos',
        url: '/nosotros/conocenos',
      },
      {
        title: 'Aviso de privacidad',
        url: '/nosotros/aviso',
      },
      {
        title: 'Términos y condiciones',
        url: '/nosotros/terminos',
      },
    ],
  },
  {
    title: 'Ubicación',
    url: '/ubicacion',
  },
  {
    title: 'Cuenta de usuario',
    child: [
      {
        title: 'Mi cuenta',
        url: '/usuario/cuenta',
      },
      {
        title: 'Mi carrito',
        url: '/usuario/carrito',
      },
    ],
  },
  {
    title: 'Administracion del portal',
    child: [
      {
        title: 'Escritorio',
        url: '/vendor/dashboard',
      },
      {
        title: 'Productos',
        child: [
          {
            title: 'Todos los productos',
            url: '/vendor/products',
          },
          {
            title: 'Nuevo producto',
            url: '/vendor/add-product',
            icon: NoteAdd
          },
        ],
      },
      {
        title: 'Ordenes',
        child: [
          {
            title: 'Todas las ordenes',
            url: '/vendor/orders',
          },
          {
            title: 'Detalles de las orden',
            url: '/vendor/orders/248104',
          },
        ],
      },
    ],
  },
]

export default navbarNavigations
