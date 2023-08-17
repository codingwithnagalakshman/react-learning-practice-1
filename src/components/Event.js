const Event = ({ event }) => {
  return (
    <li className="concept">
      <img src={event.image} alt={event.title} />
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </li>
  );
};

export default Event;
