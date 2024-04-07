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
                desc: "Melbourne, AU",
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
                title: "Gentrack",
                date: "Junior Software Engineer (Feb 2023 - Present) ",
                desc: "Member of the Billing Software Delivery project team for a major Queensland water supplier. This role includes:",
                list: [
                  "Developing modules and APIs",
                  "Improving software quality through code reviews and writing test cases",
                  "Managing release processes",
                ],
              },
              {
                title: "Self study",
                date: "May 2019 - Present",
                desc: "Studied web development, learning various skills (such as HTML, CSS, and JavaScript) from “opentutorials.org”. I have practiced using these skills to make many web apps and games. I also learned about server technologies, including AWS, Linux and MySQL.",
              },
              {
                desc: "Currently working on Multi-players worm game using Typescript.",
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
                desc: "Completed Diploma of Website Development covering basic web technologies include HTML, CSS, JavaScript, NodeJS, ReactJS and Relational Databases. Built multi-user web applications and deployed these to online environments.",
              },
              {
                title: "Opentutorials",
                date: "June 2019 - Present",
                desc: "Continually developing new web technology skills  with content from Opentutorials, a Korean non-profit coding community. Module content included:",
                list: [
                  "Developing multiple web applications.",
                  "Modern web skills (HTML, CSS, JS, NodeJS) and other technologies, such as GitHub and AWS.",
                ],
              },
              {
                title: "Sejong University in Korea",
                date: "March 2011 - Feb 2018",
                desc: "Information and Communication Engineering (B.S.). Curriculum was focusing on digital signal processing and telecommunication. Made a signal converting module (analog to digital), a file compressing module using Fourier Transform and many other applications. Learned how to use Linux server and virtual machine tools for many projects.",
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
                desc: "Competed in a hackathon challenge to build a practical solution to a problem facing the university. Worked as a team and designed a new student management system, using Java and LAMP.",
              },
              {
                title: "Creative design competition in University",
                date: "2016 winter",
                desc: "Competed to design and create a product to solve a real-world problem. Created a baby monitoring device that sounds an alarm when the child has gone over a preset distance from their parent’s smart phone. Used Arduino with Bluetooth modules, a smart phone, and a smart watch.",
              },
              {
                title: "Korean Army",
                date: "2013 - 2015",
                desc: "Sergeant. Led and commanded privates as squad leader in various activities,  including maintaining the database of malware attempting to infiltrate the military network.",
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
                desc: "HTML, CSS, JavaScript, React, Node, MySQL, PWA, AWS, Typescript",
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
