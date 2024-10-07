function Card({ imageUrl, title, description }) {
    return (
      <div>
        <img src={imageUrl} alt={title} style={{ width: '100px' }} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    );
  }
  
  export default Card;