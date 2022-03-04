import React,  { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // to get the total balance, map through each transaction and then getting all amounts into an array //
  // use reduce to add them all together and get two decimal places with toFixed //
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h4> Your Balance</h4>
        <h1>${total}</h1>
    </>
  )
}

