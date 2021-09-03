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
    name: 'Tropicales',
  },
  {
    id: 2,
    name: 'Bosque',
  },
  {
    id: 3,
    name: 'Cítricas',
  },
  {
    id: 4,
    name: 'Secas',
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
    name: 'Condimentos y aderezos',
  },
  {
    id: 5,
    name: 'Básicos del hogar',
  },
  {
    id: 6,
    name: 'Otros y desinfección del hogar',
  },
]
const snacks = [
  {
    id: 1,
    name: 'Dulces',
  },
  {
    id: 2,
    name: 'Salados',
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
    name: 'Semillas, especias y chiles secos',
    subcategory: semillas,
  },
  {
    id: 6,
    name: 'Abarrotes',
    subcategory: abarrotes,
  },
  {
    id: 7,
    name: 'Snacks',
    subcategory: snacks,
  },
]

export default categories;