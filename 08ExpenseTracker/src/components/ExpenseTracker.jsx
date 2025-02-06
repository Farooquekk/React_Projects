import { useReducer } from "react";
import { TransactionReducer } from "./TransactionReducer";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";

const ExpenseTracker = () => {
  const [transactions, dispatch] = useReducer(TransactionReducer, []);

  const addTransaction = ({ description, amount }) => {
    const newTransaction = {
      id: Date.now(),
      description,
      amount,
    };

    dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  // Calculate balance
  const balance = transactions.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Expense Tracker</h2>

      <h3 className="text-lg font-bold text-center">
        Balance: ${balance.toFixed(2)}
      </h3>

      {/* Transaction List */}
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />

      {/* Add Transaction Form */}
      <TransactionForm addTransaction={addTransaction} />
    </div>
  );
};

export default ExpenseTracker;
