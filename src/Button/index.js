import {ButtonContainer, ButtonImage, ImageItem} from './styledComponents'

const Button = props => {
  const {itemDetail, onGetId} = props
  const {id, imageUrl} = itemDetail
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, imageUrl)
  }

  return (
    <ButtonContainer>
      <ButtonImage
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <ImageItem src={imageUrl} alt={id} />
      </ButtonImage>
    </ButtonContainer>
  )
}
export default Button
