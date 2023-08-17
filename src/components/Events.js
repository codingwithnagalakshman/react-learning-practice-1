import Event from "./Event";

const Events = ({ concepts }) => {
  return (
    <ul id="concepts">
      <Event event={concepts[0]} />
      <Event event={concepts[1]} />
      <Event event={concepts[2]} />
    </ul>
  );
};

export default Events;
