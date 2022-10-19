import "./project.css";
export default function CardBio(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="project-item">
        <div className="project-img-box">
          <span className="project-category">{props.category}</span>
          <img src={props.imgPath} alt="img"></img>
        </div>
        <div className="project-explanation">
          <h3 className="project-title">{props.title}</h3>
          <h4 className="project-brief">{props.brief}</h4>
        </div>
      </div>
    </a>
  );
}
