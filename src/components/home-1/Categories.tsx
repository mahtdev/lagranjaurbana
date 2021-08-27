import BazarCard from '@component/BazarCard'
import Carousel from '@component/carousel/Carousel'
import Category from '@component/icons/Category'
import useWindowSize from '@hook/useWindowSize'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CategorySectionCreator from '../CategorySectionCreator'
import ProductCard6 from '../product-cards/ProductCard6'

const Categories = () => {
  const [visibleSlides, setVisibleSlides] = useState(3)
  const width = useWindowSize()

  useEffect(() => {
    if (width < 650) setVisibleSlides(1)
    else if (width < 950) setVisibleSlides(2)
    else setVisibleSlides(3)
  }, [width])

  return (
    <CategorySectionCreator
      icon={<Category color='secondary' />}
      title='Categorias'
      seeMoreLink='#'
    >
      <Carousel totalSlides={5} visibleSlides={visibleSlides}>
        {categoryList.map((item, ind) => (
          <Link href={item.categoryUrl} key={ind}>
            <a>
              <BazarCard sx={{ p: '1rem' }} elevation={0}>
                <ProductCard6
                  title={item.title}
                  subtitle={item.subtitle}
                  imgUrl={item.imgUrl}
                />
              </BazarCard>
            </a>
          </Link>
        ))}
      </Carousel>
    </CategorySectionCreator>
  )
}

const categoryList = [
  {
    title: 'Cárnicos',
    subtitle: 'Todo lo que buscabas',
    categoryUrl: '/products/search/carnicos',
    imgUrl: '/assets/images/grocery/carnicos.png',
  },
  {
    title: 'Pollo',
    subtitle: 'El más delicioso y fresco que puedes encontrar',
    categoryUrl: '/productos/search/pollo',
    imgUrl: '/assets/images/grocery/pollo.png',
  },
  {
    title: 'Lacteos y huevos',
    subtitle: 'Para una excelente nutricion de la familia',
    categoryUrl: '/productos/search/lacteos',
    imgUrl: '/assets/images/grocery/lacteos.png',
  },
  {
    title: 'Frutas',
    subtitle: 'Las más frescas, jugosas y deliciosas, solo lo mejor para ti',
    categoryUrl: '/productos/search/frutas',
    imgUrl: '/assets/images/grocery/frutas.png',
  },
  {
    title: 'Verduras',
    subtitle: 'Quien dijo que la verduras no son deliciosas',
    categoryUrl: '/productos/search/verduras',
    imgUrl: '/assets/images/grocery/verduras.png',
  },
  {
    title: 'Semillas, especias y chiles secos',
    subtitle: 'Todo lo necesario para hacer la mejor salsa del mundo',
    categoryUrl: '/productos/search/semillas',
    imgUrl: '/assets/images/grocery/semillas.png',
  },
  {
    title: 'Abarrotes',
    subtitle: 'Si te hace falta algo en el hogar, nosotros lo tenemos',
    categoryUrl: '/productos/search/abarrotes',
    imgUrl: '/assets/images/grocery/abarrotes.png',
  },
  {
    title: 'Snack',
    subtitle: 'Los pequeños detalles que hacen que cada día cuenten',
    categoryUrl: '/productos/search/snacks',
    imgUrl: '/assets/images/grocery/botanas.png',
  },
  {
    title: 'Recetario',
    subtitle: 'Si no sabes que puedes preparar, seguramente aqui algo te encantara',
    categoryUrl: '/recetas',
    imgUrl: '/assets/images/grocery/recetas.png',
  }
]

export default Categories
