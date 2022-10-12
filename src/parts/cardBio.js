import "./card.css";
export default function Card(props) {
  let content = [];
  for (let i = 0; i < props.content.length; i++) {
    content.push(
      <div key={i}>
        <p>{props.content[i]}</p>
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
