import "./cv.css";
import Panel from "../parts/panel";
import CardCV from "../parts/cardCV";

export default function CV() {
  return (
    <main className="cv content-t">
      <div className="cv-container">
        <aside className="cv-side">
          <img
            src="image/profile_Moonsung.jpg"
            alt="profile"
            className="cv-picture"
          ></img>
          <Panel
            title="Bio"
            content={[
              {
                icon: <i className="far fa-user"></i>,
                desc: "Web developer with a passion for learning and continued development. Interested in full-stack web development and enjoys coding. Hardworking, with a can do attitude and never gives up.",
              },
            ]}
          ></Panel>
          <Panel
            title="Contact"
            content={[
              {
                icon: <i className="fas fa-map-marker-alt"></i>,
                desc: "Brisbane, AU",
              },
              {
                icon: <i className="far fa-envelope"></i>,
                desc: "moonsungjeong199@gmail.com",
              },
              {
                icon: <i className="fas fa-phone"></i>,
                desc: "+61435815199",
              },
            ]}
          ></Panel>
        </aside>
        <div className="cv-main">
          <CardCV
            title={{
              icon: <i className="fas fa-user-tie"></i>,
              desc: " Employment",
            }}
            content={[
              {
                title: "Your company",
                date: "Current - Future",
                desc: "I hope to work for your company as a web developer. As a web developer, I will be able to bring both my technical skills and outgoing attitude to your organization.",
              },
              {
                title: "Self study",
                date: "May 2019 - Current",
                desc: "Studied web development, learning various skills (such as HTML, CSS, and JavaScript) from “opentutorials.org”. I have practiced using these skills to make many web apps and games. I also learned about server technologies, including AWS, Linux and MySQL.",
              },
            ]}
          ></CardCV>
          <CardCV
            title={{
              icon: <i className="fas fa-server"></i>,
              desc: " Other Experience",
            }}
            content={[
              {
                title: "Hackathon in University",
                date: "2017 summer",
                desc: "Attended a hackathon at my university. It was good experience to work as a team and use technology to build a solution to a problem. Although we didn’t win, it was a great experience an very good motivation for self-improvement.",
              },
              {
                title: "Creative design competition in University",
                date: "2016 winter",
                desc: "Attended a creative design competition at my university. Our team designed and created a product to solve a real-world problem. We created a baby monitoring device that sounds an alarm when the child has gone over a preset distance from their parent’s smart phone. We used Arduino with Bluetooth modules, a smart phone and a smart watch.",
              },
              {
                title: "Korean Army",
                date: "2013 - 2015",
                desc: "I served in the military as a soldier and as part of the reserved force for the past several years. While serving, I was able to improve my organizational and leadership skills. My role was to manage the military’s web system.",
              },
            ]}
          ></CardCV>
          <CardCV
            title={{
              icon: <i className="fas fa-graduation-cap"></i>,
              desc: " Education",
            }}
            content={[
              {
                title: "TAFE Queensland",
                date: "July 2021 - June 2022",
                desc: "Completed Diploma of Website Development covering basic web technologies include HTML, CSS, JavaScript, NodeJS and Relational Databases. Built web applications that multiple users can access and deployed on online environment.",
              },
              {
                title: "Opentutorials",
                date: "June 2019 - Current",
                desc: "Studying modern web development skills (HTML, CSS, JavaScript) and made web applications and games. Improving my background knowledge of computer science in areas that I didn’t learn in university. Learned other basic technologies such as Github and AWS.",
              },
              {
                title: "Sejong University in Korea",
                date: "May 2011 - Feb 2018",
                desc: "Studied Information and Communication Engineering. Curriculum was focusing on digital signal processing and telecommunication. Made a signal converting module (analog to digital), a file compressing module using Fourier Transform and many other applications. Learned how to use Linux server and virtual machine tools for many projects.",
              },
            ]}
          ></CardCV>
          <CardCV
            title={{
              icon: <i className="fas fa-key"></i>,
              desc: " Key skills",
            }}
            content={[
              {
                desc: "HTML, CSS, JavaScript, React, Node, MySQL, PWA, AWS",
              },
            ]}
          ></CardCV>
          <CardCV
            title={{
              icon: <i className="fas fa-star"></i>,
              desc: " Hobbies and interests",
            }}
            content={[
              {
                desc: "I enjoy computer game, especially Warcraft3. I'm interested in game programming and visual processing (OpenCV).",
              },
            ]}
          ></CardCV>
        </div>
      </div>
    </main>
  );
}
