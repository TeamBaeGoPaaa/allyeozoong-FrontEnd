import "./Card.css";


function Card(props) {
  const { title, content, imgSrc } = props;

  return (
    <>
      <div className="Card-layout">
        <div className="Card-container">
          <div className="title">{title}</div>
          <div className="content">{content}</div>
          <img className="news_img" src={imgSrc} />
        </div>
      </div>
    </>
  );
}

export default Card;
