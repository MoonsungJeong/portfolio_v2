import "./page.css";
import CardBasic from "../parts/cardBasic";
import CardPhotos from "../parts/cardPhotos";
import CardSkills from "../parts/cardSkills";
import CardSocial from "../parts/cardSocial";
import CardLink from "../parts/cardLink";
import CardBasic2 from "../parts/cardBasic2";

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
                "I first got into computers because of computer games. While at high school, I became curious to know more about how the games work. I started just by using a game editor to make a modified version of Warcraft III. This is why I decided to learn more about computer in university.",
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
            <CardLink
              title="Link"
              content={[
                {
                  link: "Worm 2",
                  address: "https://moonsungjeong.github.io/worm_v2/",
                },
              ]}
            ></CardLink>
          </div>
        </div>
        <div className="row">
          <div className="col_t12_x12">
            <CardBasic2
              title="Experience"
              content={[
                {
                  brief: "Hackathon & Competition",
                  desc: "I participated in a hackathon (24 hours coding competition) and a product design competition (making solutions to real-world problems with IT technology) in university. I enjoyed challenging myself to create something new, learning new technologies, and meeting new people. Although I didn’t win, it became a good motivation to continue improving my abilities.",
                },
                {
                  brief: "Education",
                  desc: "I went to Sejong University in Korea and graduated with bachelor’s degree in Information and Communication Engineering. While I was studying, I learned basic computer knowledges and did many projects to implement these. I also completed a diploma of Website development in TAFE Queensland. Learned modern web technologies and actually built and deployed on real environment",
                },
                {
                  brief: "Opentutorials & Youtube",
                  desc: "Since coming to Australia, I have done additional self-study to learn more about web development. I did this with Opentutorials (non-profit coding community in Korea), many programming YouTube channels, and stackoverflow. I have learned to use HTML, CSS, JavaScript.",
                },
              ]}
            ></CardBasic2>
          </div>
        </div>
      </div>
    </main>
  );
}
