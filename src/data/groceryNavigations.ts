import Apple from '@component/icons/Apple'
import Beer from '@component/icons/Beer'
import Bottle from '@component/icons/Bottle'
import Breakfast from '@component/icons/Breakfast'
import Carrot from '@component/icons/Carrot'
import Honey from '@component/icons/Honey'
import Milk from '@component/icons/Milk'
import Snack from '@component/icons/Snack'
import Yogurt from '@component/icons/Yogurt'

const groceryNavigations = [
  {
    icon: Carrot,
    title: 'Vegetables',
    href: '/product/search/vegetables',
  },
  {
    icon: Apple,
    title: 'Fruits & Vegetables',
    href: '/product/search/Fruits & Vegetables',
    child: [
      {
        title: 'Fresh Frutes',
        href: '/product/search/Fresh Frutes',
        child: [
          {
            title: 'Pears, apples, quinces',
            href: '/product/search/Pears, apples, quinces',
          },
          {
            title: 'Peaches, plums, apricots',
            href: '/product/search/Peaches, plums, apricots',
          },
          {
            title: 'Grapes',
            href: '/product/search/Grapes',
          },
        ],
      },
      {
        title: 'Fresh Vegetables',
        href: '/product/search/Fresh Vegetables',
        child: [
          {
            title: 'Onion',
            href: '/product/search/Onion',
          },
          {
            title: 'Potato',
            href: '/product/search/Potato',
          },
          {
            title: 'Vegetable Pack',
            href: '/product/search/Vegetable Pack',
          },
        ],
      },
    ],
  },
  {
    icon: Milk,
    title: 'Dariry & Eggs',
    href: '/product/search/Dariry & Eggs',
  },
  {
    icon: Breakfast,
    title: 'Breakfast',
    href: '/product/search/Breakfast',
  },
  {
    icon: Yogurt,
    title: 'Frozen',
    href: '/product/search/Frozen',
  },
  {
    icon: Honey,
    title: 'Organic',
    href: '/product/search/Organic',
  },
  {
    icon: Beer,
    title: 'Canned Food',
    href: '/product/search/Canned Food',
  },
  {
    icon: Snack,
    title: 'Coffee & Snacks',
    href: '/product/search/Coffee & Snacks',
  },
  {
    icon: Bottle,
    title: 'Sauces & Jems',
    href: '/product/search/Sauces & Jems',
  },
]

export default groceryNavigations
