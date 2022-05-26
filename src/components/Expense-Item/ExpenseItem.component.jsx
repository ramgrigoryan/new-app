import Date from "../Date/Date.component";
function ExpenseItem(props) {
  console.log("render");
  const { date, item, price } = props.expense;
  return (
    <div>
      <Date date={date}></Date>
      <div>
        <h2>
          {item} - ${price}
        </h2>
      </div>
    </div>
  );
}
export default ExpenseItem;
