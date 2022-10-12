import "./card.css";
export default function Card(props) {
  let content = [];
  console.log(props.content);
  for (let i = 0; i < props.content.length; i++) {
    content.push(
      <div key={i}>
        <a href={props.content[i].address} target="_blank" rel="noreferrer">
          {props.content[i].link}
        </a>
      </div>
    );
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="card-content">
        <p>{content}</p>
        <br />
      </div>
    </div>
  );
}
