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
                "Hi! I’m Moonsung, a Korean-born web developer based in Australia.",
                "I am currently working as a Junior Software Engineer at Gentrack, and have a bachelor’s degree in Information and Communication Engineering and a diploma of website development.",
                "I am highly motivated and love coding. Both now and during my schooling, I have continuously used my spare time to develop my technological skills. I’m always excited to grow my abilities by starting new projects where I can use my knowledge and think creatively to solve problems. I also like thinking of ways to combine IT with other fields to add creative value.",
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
                  brief: "Gentrack",
                  desc: "At Gentrack, I have gained experience in backend development while working on a Billing Software Delivery project. I contributed by developing modules and APIs, by improving software quality through code reviews and writing test cases and by managing release process",
                },
                {
                  brief: "Education",
                  desc: "I graduated from Sejong University with a Bachelor’s of Information and Communication Engineering in 2018. I then went on to complete a Diploma of Website Development at TAFE Queensland in 2022. This covered web technologies such as HTML, CSS, JavaScript, NodeJS, ReactJS and Relational Databases. As part of this program, I built multi-user web applications and deployed these to online environments.",
                },
                {
                  desc: "Both now and during my schooling, I have also used my spare time to learn new programming languages and to develop my technological skills. I have done this using many online resources, such as Stack Overflow and Opentutorials.",
                },
                {
                  brief: "Hackathon & Competition",
                  desc: "While I university, I competed in both a Hackathon and a Creative Design Competition. I greatly enjoyed both of these as I got to challenge myself to solve a real-world problem, learn new technologies, and meet new people.",
                },
                {
                  desc: "For the hackathon, I worked as part of a team to design a new student management system, using Java and LAMP.",
                },
                {
                  desc: "For the Creative Design Competition my team and I created a baby monitoring device that sounds an alarm when the child has gone over a preset distance from their parent’s smart phone. To do this, we used Arduino with Bluetooth modules, a smart phone, and a smart watch.",
                },
              ]}
            ></CardBasic2>
          </div>
        </div>
      </div>
    </main>
  );
}
