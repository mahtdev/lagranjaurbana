const carnicos = [
  {
    id: 1,
    name: 'Res',
  },
  {
    id: 2,
    name: 'Pollo',
  },
  {
    id: 3,
    name: 'Cortes Finos',
  },
  {
    id: 4,
    name: 'Carnes frías',
  },
  {
    id: 5,
    name: 'Otros embutidos',
  },
  {
    id: 6,
    name: 'Accesorios para tu carne asada',
  },
]
const lacteos = [
  {
    id: 1,
    name: 'Queso',
  },
  {
    id: 2,
    name: 'Crema',
  },
  {
    id: 3,
    name: 'Leche',
  },
  {
    id: 4,
    name: 'Otros derivados lácteos',
  },
  {
    id: 5,
    name: 'Huevo',
  },
  {
    id: 6,
    name: 'Gourmet',
  },
]
const frutas = [
  {
    id: 1,
    name: 'Tropical',
  },
  {
    id: 2,
    name: 'Bosque',
  },
  {
    id: 3,
    name: 'Cítricas',
  },
]
const verduras = [
  {
    id: 1,
    name: 'Hortalizas',
  },
  {
    id: 2,
    name: 'Verduras',
  },
  {
    id: 3,
    name: 'Chiles',
  },
  {
    id: 4,
    name: 'Hierbas, germen y hongos',
  },
  {
    id: 5,
    name: 'Accesorios cocina y desinfección',
  },
]
const semillas = [
  {
    id: 1,
    name: 'Chiles',
  },
  {
    id: 2,
    name: 'Semillas',
  },
  {
    id: 3,
    name: 'Pastas',
  },
  {
    id: 4,
    name: 'Especias',
  },
  {
    id: 4,
    name: 'Frutos secos',
  },
]
const abarrotes = [
  {
    id: 1,
    name: 'Harinas y derivados',
  },
  {
    id: 2,
    name: 'Arroz, frijol y sopas',
  },
  {
    id: 3,
    name: 'Enlatados',
  },
  {
    id: 4,
    name: 'Complementos, aderezos y salsas',
  },
  {
    id: 5,
    name: 'Dulces y botanas',
  },
  {
    id: 6,
    name: 'Básicos y desinfección del hogar',
  },
]
const mascotas = [
  {
    id: 1,
    name: 'Alimento para perro',
  },
  {
    id: 2,
    name: 'Alimento para gato',
  },
  {
    id: 3,
    name: 'Accesorios',
  },
]

const categories = [
  {
    id: 1,
    name: 'Cárnicos',
    subcategory: carnicos,
  },
  {
    id: 2,
    name: 'Lácteos y huevo',
    subcategory: lacteos,
  },
  {
    id: 3,
    name: 'Frutas',
    subcategory: frutas,
  },
  {
    id: 4,
    name: 'Verduras',
    subcategory: verduras,
  },
  {
    id: 5,
    name: 'Semillas, especias, frutos y chiles secos',
    subcategory: semillas,
  },
  {
    id: 6,
    name: 'Abarrotes',
    subcategory: abarrotes,
  },
  {
    id: 7,
    name: 'Mascotas',
    subcategory: mascotas,
  },
]

export default categories;