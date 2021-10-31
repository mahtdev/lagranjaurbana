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
    imgUrl: '/assets/images/products/categories/carne.png',
  },
  {
    title: 'Lácteos y huevos',
    subtitle: 'Para una excelente nutricion de la familia',
    categoryUrl: '/productos/search/lacteos',
    imgUrl: '/assets/images/products/categories/lacteoss.png',
  },
  {
    title: 'Frutas',
    subtitle: 'Las más frescas, jugosas y deliciosas, solo lo mejor para ti',
    categoryUrl: '/productos/search/frutas',
    imgUrl: '/assets/images/products/categories/Frutas.png',
  },
  {
    title: 'Verduras',
    subtitle: 'Quien dijo que la verduras no son deliciosas',
    categoryUrl: '/productos/search/verduras',
    imgUrl: '/assets/images/products/categories/Verduras.png',
  },
  {
    title: 'Semillas, especias y chiles secos',
    subtitle: 'Todo lo necesario para hacer la mejor salsa del mundo',
    categoryUrl: '/productos/search/semillas',
    imgUrl: '/assets/images/products/categories/chiles.png',
  },
  {
    title: 'Abarrotes',
    subtitle: 'Si te hace falta algo en el hogar, nosotros lo tenemos',
    categoryUrl: '/productos/search/abarrotes',
    imgUrl: '/assets/images/products/categories/Abarrotes.png',
  },
  {
    title: 'Mascotas',
    subtitle: 'Si te hace falta algo en el hogar, nosotros lo tenemos',
    categoryUrl: '/productos/search/abarrotes',
    imgUrl: '/assets/images/products/categories/mascotas.png',
  }
]

export default Categories
