import "./card.css";
export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="card-content">
        <p>{props.content1}</p>
        <br />
      </div>
    </div>
  );
}
