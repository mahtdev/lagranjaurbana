import React from 'react'
import Category from '@component/icons/Category'
import CategorySectionCreator from '@component/CategorySectionCreator'

const ProductsSale = () => {
  return (
    <CategorySectionCreator
      icon={<Category color='secondary' />}
      title='Los más vendidos'
      seeMoreLink='#'
    >
    </CategorySectionCreator>
  )
}


export default ProductsSale
