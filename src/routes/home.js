import "./content.css";
import Card from "../parts/card";

export default function Home() {
  return (
    <main className="home content-b">
      <div className="container">
        <div className="row">
          <div className="col_t12_x8">
            <Card title="BIO" content="abcdefghijklmn"></Card>
          </div>
          <div className="col_t12_x4">
            <Card title="Photo" content="abcdefghijklmn"></Card>
          </div>
        </div>
        <div className="row">
          <div className="col_t12_x4"></div>
          <div className="col_t12_x4"></div>
          <div className="col_t12_x4"></div>
        </div>
        <div className="row">
          <div className="col_t12_x12"></div>
        </div>
      </div>
    </main>
  );
}
