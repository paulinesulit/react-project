const DisplayDetails = (props) => {
  return (
    <div>
      <h3>Horoscope for: {props.object.current_date}</h3>
      <h4>{props.object.description}</h4>
      <p>Color: {props.object.color}</p>
      <p>Compatibility: {props.object.compatibility}</p>
      <p>Lucky Number: {props.object.lucky_number}</p>
      <p>Lucky Time: {props.object.lucky_time}</p>
      <p>Mood: {props.object.mood}</p>
    </div>
  );
};

export default DisplayDetails;
