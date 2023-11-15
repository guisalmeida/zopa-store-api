import PropTypes from 'prop-types'

import {
  CategoryItemBodyContainer,
  CategoryItemContainer,
  BackgroundImage,
} from './styled'

type CategoryItemProps = {
  category: {
    imageUrl: string
    title: string
    route: string
  }
}

const CategoryItem = ({ category }: CategoryItemProps): React.JSX.Element => {
  const { imageUrl, title, route } = category

  return (
    <CategoryItemContainer to={route}>
      <BackgroundImage $imageUrl={imageUrl} />
      <CategoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryItemBodyContainer>
    </CategoryItemContainer>
  )
}

export default CategoryItem
