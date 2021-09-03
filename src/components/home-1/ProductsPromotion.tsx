import React from 'react'
import Category from '@component/icons/Category'
import CategorySectionCreator from '@component/CategorySectionCreator'

const ProductsPromotion = () => {
  return (
    <CategorySectionCreator
      icon={<Category color='secondary' />}
      title='Productos en promoción'
      seeMoreLink='#'
    >
    </CategorySectionCreator>
  )
}


export default ProductsPromotion
