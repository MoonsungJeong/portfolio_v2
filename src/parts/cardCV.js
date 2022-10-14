import "./card.css";
export default function CardCV(props) {
  let content = [];
  for (let i = 0; i < props.content.length; i++) {
    content.push(
      <div key={i}>
        <h4>{props.content[i].title}</h4>
        <span className="date-subtitle">{props.content[i].date}</span>
        <p>{props.content[i].desc}</p>
      </div>
    );
  }
  return (
    <section>
      <h3>
        {props.title.icon}
        {props.title.desc}
      </h3>
      <div className="card-cv-container">{content}</div>
    </section>
  );
}
