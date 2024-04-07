import "./card.css";
export default function CardCV(props) {
  let content = [];
  for (let i = 0; i < props.content.length; i++) {
    // List
    let list = [];
    if (props.content[i].list?.length) {
      for (let j = 0; j < props.content[i].list.length; j++) {
        list.push(<li key={j}>{props.content[i].list[j]}</li>);
      }
      list = <ul className="">{list}</ul>;
    }
    // Content
    content.push(
      <div key={i}>
        <h4>{props.content[i].title}</h4>
        <span className="date-subtitle">{props.content[i].date}</span>
        <p>{props.content[i].desc}</p>
        {list}
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
