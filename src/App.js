import "./App.css";
import ExpenseItem from "./components/Expense-Item/ExpenseItem.component";

function App() {
  const expenses = [
    {
      date: new Date(),
      item: "Car Insuranse",
      price: "84.5",
    },
    {
      date: new Date("2022-04-26"),
      item: "Dantist",
      price: "56",
    },
    {
      date: new Date("2022-04-15"),
      item: "Trip",
      price: "450",
    },
    {
      date: new Date("2022-03-28"),
      item: "Birthday Party",
      price: "215",
    },
  ];
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem>
    </div>
  );
}

export default App;
