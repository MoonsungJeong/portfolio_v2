import "./card.css";
export default function CardBio(props) {
  let content = [];
  for (let i = 0; i < props.content.length; i++) {
    content.push(
      <div key={i}>
        <h3>{props.content[i].brief}</h3>
        <p>{props.content[i].desc}</p>
        <br />
      </div>
    );
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="card-content">{content}</div>
    </div>
  );
}
