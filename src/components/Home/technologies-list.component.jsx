import "./technologies-list.styles.scss";

const TechnologiesList = ({ techs }) => {
  return (
    // <ul className="technologies-list">
    //   {techs.map((t) => (
    //     <li key={t.id} >
    //       <p className='tech-name'>{t.name}</p>
    //       <i className="tech-icon">{t.icon}</i>
    //     </li>
    //   ))}
    // </ul>
    <table className="technologies-list">
      <tbody>
        {techs.map((t) => (
          <tr key={t.id}>
            <td className="tech-name">{t.name}</td>
            <td className="tech-icon">{t.icon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default TechnologiesList;