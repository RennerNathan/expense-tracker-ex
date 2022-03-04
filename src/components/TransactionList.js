import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    // use Destructuring instead of context.transactions //
    const { transactions } = useContext(GlobalContext);
    
  return (
    <>
        <h3>History</h3>
        <ul className='list'> 
            {/* Loop through transactions, and for each transaction, we want to output transaction component. 
            Pass in prop so it know which exact transition to render and needs a unique key */}
            {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
        </ul>
    </>
  )
}
