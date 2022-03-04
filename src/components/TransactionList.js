import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    // use Destructuring instead of context.transactions //
    const { transactions, getTransactions } = useContext(GlobalContext);

    //use useEffect whenever you deal with http request from component 
    useEffect(() => {
      getTransactions();
      // this will stop warning from firing off; warning is for infinite loop 
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
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
