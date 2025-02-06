const TransactionList = ({ transactions, deleteTransaction }) => {
    return (
      <ul className="mt-4">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`flex justify-between p-2 mb-2 rounded ${transaction.amount > 0 ? "bg-green-200" : "bg-red-200"}`}
          >
            <span>{transaction.description} (${transaction.amount})</span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="text-red-600 font-bold cursor-pointer"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TransactionList;
  