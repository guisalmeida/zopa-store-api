import {
  DirectoryItemBodyContainer,
  DirectoryItemContainer,
  BackgroundImage,
} from "./styled";

 
const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  return (
    <DirectoryItemContainer to={route}>
      <BackgroundImage
         
        imageUrl={imageUrl}
      />
      <DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
