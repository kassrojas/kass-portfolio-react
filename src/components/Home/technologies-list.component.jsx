import "./technologies-list.styles.scss";

const TechnologiesList = ({ techs }) => {
  return (
    <>
      <table className="technologies-list">
        <tbody>
          {techs.map((t) => (
            <tr key={t.id}>
              <td className="tech-name">{t.name}</td>
              <td ><a href='https://github.com/kassrojas'
                target='_blank' rel="noreferrer" className="tech-icon">{t.icon}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
};

export default TechnologiesList;