import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {imgUrl, description, title, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-tittle"> {title} </h1>
      <p className="card-description"> {description} </p>
      <div className="img-container">
        <img src={imgUrl} className="card-Img" alt={title} />
      </div>
    </li>
  )
}
export default CardItem
