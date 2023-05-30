import { FaHtml5, FaCss3Alt, FaNodeJs, FaBootstrap, FaReact } from 'react-icons/fa';
import { SiStyledcomponents, SiJavascript, SiReduxsaga, SiExpress, SiInsomnia, SiMongodb, SiJest } from 'react-icons/si';
import { GrMysql, GrGraphQl } from 'react-icons/gr';
import TechnologiesList from './technologies-list.component';
import "./technologies-list.styles.scss";

const Home = () => {

  const techs = [
    {
      id: "1f",
      name: "Javascript",
      icon: <SiJavascript />
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
      id: "1h",
      name: "Redux/Redux Saga",
      icon: <SiReduxsaga />
    },
    {
      id: "1i",
      name: "Express",
      icon: <SiExpress />
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

  return (
    <div className="home-container">
      <div className='home-main'>
        <p> Full stack software developer based in Charlotte, North Carolina
        </p>
      </div>
      <div className='technologies-container'>
        <p className='home-sub'> Proven experience with the following technologies:
        </p>
        <TechnologiesList techs={techs} />
      </div>
    </div >
  )
};

export default Home;
