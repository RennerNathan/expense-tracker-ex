import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas} from '../utils/format'

export const Transaction = ({ transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);


    // if transaction amount is less than zero, add minus, otherwise add plus sign
    const sign = transaction.amount < 0 ? '-' : '+';

  return (
      // Make this class dynamic to add red or green border color if transaction amount is less than zero
    <li className={transaction.amount < 0 ? 'minus': 'plus'}>
        {/* Wrap is absolute to get rid of the double negative*/}
        {/* Have to do ._id bc in mongo, id is underscore and transactions are coming from the database now*/}
        {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span><button onClick={() => deleteTransaction(transaction._id)} 
        className='delete-btn'>x</button>
    </li>
  )
}
