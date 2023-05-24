import "./technologies-list.styles.scss";

const TechnologiesList = ({ techs }) => {
  return (
    // <div className="technologies-list">
    //   {techs.map((t) => (
    //     <li key={t.id} className='tech-list-item'>
    //       {t.name} {t.icon}
    //     </li>
    //   ))}
    // </div>
    <table className="technologies-list">
      {techs.map((t) => (
        <tr>
          <td className="tech-name">{t.name}</td>
          <td className="tech-icon">{t.icon}</td>
        </tr>
      ))}
    </table>

  )
};

export default TechnologiesList;