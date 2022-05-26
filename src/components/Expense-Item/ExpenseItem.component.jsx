function ExpenseItem(props) {
  console.log("render");
  const { date, item, price } = props.expense;
  const readableDate = {
    month: date.toLocaleString("en-US", { month: "long" }),
    day: date.toLocaleString("en-US", { day: "2-digit" }),
    year: date.getFullYear(),
  };
  return (
    <div>
      <div className="date">
        <div>{readableDate.month}</div>
        <div>{readableDate.day}</div>
        <div>{readableDate.year}</div>
      </div>
      <div>
        <h2>
          {item} - ${price}
        </h2>
      </div>
    </div>
  );
}
export default ExpenseItem;
