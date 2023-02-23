import { NextPage } from "next";

interface Skill {
  name: string;
  description: string;
}

interface Work {
  company: string;
  position: string;
  period: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: "Web Development",
    description:
      "I have experience building web applications using modern frontend frameworks like React and Vue.js.",
  },
  {
    name: "Backend Development",
    description:
      "I have experience building REST APIs and web services using Node.js and Python.",
  },
  {
    name: "Database Design",
    description:
      "I have experience designing and optimizing database schemas for different applications.",
  },
];

const works: Work[] = [
  {
    company: "Acme Inc.",
    position: "Software Developer",
    period: "2021 - Present",
    description:
      "I am responsible for developing and maintaining the company’s web applications and backend systems.",
  },
  {
    company: "XYZ Corp.",
    position: "Web Developer",
    period: "2019 - 2021",
    description:
      "I was responsible for developing and maintaining the company’s website and e-commerce platform.",
  },
];

const About: NextPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-5 text-primary">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-3">Hi, I'm John!</h2>
          <p className="text-gray-600 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
            malesuada libero, id pellentesque lectus posuere vel. Integer
            euismod nunc sit amet mauris pellentesque posuere. Fusce feugiat, ex
            ut tincidunt aliquam, quam tellus consequat mauris, vel euismod elit
            nisl non leo.
          </p>
          <h2 className="text-2xl font-bold mb-3">Skills</h2>
          <ul>
            {skills.map((skill) => (
              <li key={skill.name} className="mb-2">
                <h3 className="text-lg font-medium mb-1">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            src="/profile-picture.jpg"
            alt="Profile Picture"
            className="rounded-lg shadow-card"
            style={{
              borderColor: "var(--color-secondary)",
              borderWidth: "4px",
            }}
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-3 mt-10">Work Experience</h2>
      <ul>
        {works.map((work) => (
          <li key={work.company} className="mb-5">
            <h3 className="text-lg font-medium mb-1">{work.position}</h3>
            <p className="text-gray-600">{work.company}</p>
            <p className="text-gray-600">{work.period}</p>
            <p className="text-gray-600">{work.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
