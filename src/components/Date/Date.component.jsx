function Date(props) {
  const date = props.date;
  const readableDate = {
    month: date.toLocaleString("en-US", { month: "long" }),
    day: date.toLocaleString("en-US", { day: "2-digit" }),
    year: date.getFullYear(),
  };
  return (
    <div className="date">
      <div>{readableDate.month}</div>
      <div>{readableDate.day}</div>
      <div>{readableDate.year}</div>
    </div>
  );
}
export default Date;
