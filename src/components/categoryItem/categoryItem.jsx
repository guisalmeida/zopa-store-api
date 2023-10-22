import PropTypes from 'prop-types';

import {
  CategoryItemBodyContainer,
  CategoryItemContainer,
  BackgroundImage,
} from './styled'

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category

  return (
    <CategoryItemContainer to={route}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryItemBodyContainer>
    </CategoryItemContainer>
  )
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  })
}

export default CategoryItem
