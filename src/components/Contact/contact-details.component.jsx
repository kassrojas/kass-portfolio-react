const ContactDetails = () => {

  const details = [
    {
      id: 'det1',
      label: "Send An Email",
      info: "mailto:kassandrarojass@gmail.com",
    },
    {
      id: 'det2',
      label: 'Connect on LinkedIn',
      info: 'https://www.linkedin.com/in/ikassandrarojas/'
    },
    {
      id: 'det3',
      label: 'Follow on GitHub',
      info: 'https://github.com/kassrojas'
    },

  ]
  return (
    <>
      <section className="contact-details-container">
        <h1 className="component-heading">Contact Me<hr /></h1>
        <p className="details-p">
          Let's chat about software!
        </p>
        {details.map((d) => (
          <a
            key={d.id}
            href={`${d.info}`}
            target='_blank'
            rel="noreferrer"
            className="details-link"
          >
            {d.label}
          </a>
        ))}
      </section>
    </>
  )
};

export default ContactDetails;