import "./card.css";
export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div class="card-content">
        <p>{props.content}</p>
      </div>
    </div>
  );
}
