export const Projects = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt={props.name} className='projectImage' />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <button>Live Demo</button>
      <button>View code</button>
    </div>
  )
}