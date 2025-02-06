import { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return alert("Please enter details!");

    addTransaction({ description, amount: parseFloat(amount) });

    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
