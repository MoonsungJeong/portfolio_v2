import "./panel.css";

export default function Panel(props) {
  let content = [];
  for (let i = 0; i < props.content.length; i++) {
    content.push(
      <div className="panel-content" key={i}>
        <span className="panel-icon">{props.content[i].icon}</span>
        <span className="panel-desc">{props.content[i].desc}</span>
      </div>
    );
  }
  return (
    <div className="panel">
      <h3>{props.title}</h3>
      {content}
    </div>
  );
}
