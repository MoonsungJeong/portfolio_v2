import "./page.css";
import Card from "../parts/card";
import CardBasic from "../parts/cardBasic";
import CardPhotos from "../parts/cardPhotos";
import CardSkills from "../parts/cardSkills";
import CardSocial from "../parts/cardSocial";

export default function Home() {
  return (
    <main className="home content-b" id="home">
      <div className="container">
        <div className="row">
          <div className="col_t12_x8">
            <CardBasic
              title="BIO"
              content={[
                "Hi! I’m Moonsung, a Korean web developer based in Australia.",
                "I first got into computers because of computer games. While at high school, I became curious to know more about how the games work. I started just by using a game editor to make a modified version of Warcraft III. This is why I decided to learn more about computer engineering in university.",
                "I now have a bigger passion for computers and coding, because I have learned that coding has unlimited possibilities and that I can make anything I imagine by coding. I always do my best to learn new languages and technologies to improve my skills. I also like thinking of ways to combine IT with other fields to add creative value.",
              ]}
            ></CardBasic>
          </div>
          <div className="col_t12_x4">
            <CardPhotos></CardPhotos>
          </div>
        </div>
        <div className="row">
          <div className="col_t12_x4">
            <CardSkills></CardSkills>
          </div>
          <div className="col_t12_x4">
            <CardSocial></CardSocial>
          </div>
          <div className="col_t12_x4">
            <CardBasic title="Link" content={["1", "Worm 2 :"]}></CardBasic>
          </div>
        </div>
        <div className="row">
          <div className="col_t12_x12">
            <Card title="Experience" content="abcdefghijklmn"></Card>
          </div>
        </div>
      </div>
    </main>
  );
}
