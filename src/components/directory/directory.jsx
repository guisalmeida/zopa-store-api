import CategoryItem from '../categoryItem'
import { DirectoryContainer } from './styled'

const categories = [
  {
    id: 1,
    title: 'Camisetas',
    imageUrl: './images/camisetas.jpg',
    route: 'shop/camisetas',
  },
  {
    id: 2,
    title: 'Gorros',
    imageUrl: '../../assets/images/beanie_black.jpg',
    route: 'shop/gorros',
  },
]

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category, index) => {
        return <CategoryItem key={index} category={category} />
      })}
    </DirectoryContainer>
  )
}

export default Directory
