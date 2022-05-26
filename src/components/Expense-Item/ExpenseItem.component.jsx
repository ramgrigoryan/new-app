function ExpenseItem (props){
    const {date,item,price} = props.expense;
    return (
        <h2>{date}  :  {item} -  ${price}</h2>
    )
}
export default ExpenseItem;