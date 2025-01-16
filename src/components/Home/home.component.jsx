// Home.tsx
import { FaHtml5, FaCss3Alt, FaNodeJs, FaBootstrap, FaReact } from 'react-icons/fa';
import { SiStyledcomponents, SiPython, SiJavascript, SiExpress, SiInsomnia, SiMongodb, SiJest, SiPostgresql } from 'react-icons/si';
import { GrMysql, GrGraphQl } from 'react-icons/gr';
import TechnologiesList from './technologies-list.component';

const Home = () => {

  return (
    <section className="home-container py-12">
      <div className="home-main text-center mb-12">
        <p className="text-lg md:text-xl">
          Full Stack Software Developer based in Charlotte, North Carolina
        </p>
      </div>
      <div className="technologies-container">
        <p className="home-sub text-center mb-4">Proven experience with the following technologies:</p>
        <TechnologiesList techs={techs} />
        <p className="home-sub text-center mt-4">...and more! Contact me to discuss your needs!</p>
      </div>
    </section>
  );
};

export default Home;


const techs = [
  {
    id: "1p",
    name: "Python",
    icon: <SiPython />
  },
  {
    id: "1f",
    name: "Javascript",
    icon: <SiJavascript />
  },
  {
    id: "1e",
    name: "Nodejs",
    icon: <FaNodeJs />
  },
  {
    id: "1g",
    name: "Reactjs",
    icon: <FaReact />
  },
  {
    id: "1i",
    name: "Express",
    icon: <SiExpress />
  },
  {
    id: "1q",
    name: "PostgreSQL",
    icon: <SiPostgresql />
  },
  {
    id: "1j",
    name: "MySQL",
    icon: <GrMysql />
  },
  {
    id: "1l",
    name: "Insomnia",
    icon: <SiInsomnia />
  },
  {
    id: "1m",
    name: "MongoDB",
    icon: <SiMongodb />
  },
  {
    id: "1n",
    name: "GraphQL",
    icon: <GrGraphQl />
  },
  {
    id: "1o",
    name: "Jest Testing",
    icon: <SiJest />
  },
  {
    id: "1a",
    name: "HTML",
    icon: <FaHtml5 />
  },
  {
    id: "1b",
    name: "CSS",
    icon: <FaCss3Alt />
  },
  {
    id: "1c",
    name: "Styled Components",
    icon: <SiStyledcomponents />
  },
  {
    id: "1d",
    name: "Bootstrap",
    icon: <FaBootstrap />
  },
];