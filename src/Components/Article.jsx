export const Article = (props) => {
  return(
    <div>
    <img src={props.imgSrc} alt={props.title} className="articleImage"/>
    <p>{props.date}</p>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    </div>
  )
}

