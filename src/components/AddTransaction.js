import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

// Component level State with controlled components within the form
// {/* This is how to comment in jsx  */}

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        // Generate a random id not best to do //
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            // text and amount are already defined from form, same connotation as if we did text: text //
            text, 
            // need to parse this to an integer bc it returns a string; +amount will turn it into a number //
            amount: +amount 
        }

        addTransaction(newTransaction);
    }

  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                {/* This will set the text to whatever the user types in  */}
                <input type="text" value={text} onChange= {(e) => setText(e.target.value)} placeholder='Enter text...' />
            </div>
            <div className='form-control'>
            <label htmlFor='amount'>
                Amount <br /> (negative - expense, positive - income)</label>
                {/* This will set the amount to whatever the user types in  */}
                <input type="number" value={amount} onChange= {(e) => setAmount(e.target.value)} placeholder='Enter amount...'></input>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </>
  )
}
