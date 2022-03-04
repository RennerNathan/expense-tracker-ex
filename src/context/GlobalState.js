// this is where we are going to create our context //
// if we had multiple resources, like a larger application, you might have a shopContext, or profileState //

import React, { createContext , useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State //
// Any Global State would go in this //
const initialState = {
    transactions: []
}

// Create our GlobalContext using createContext we brought in //
export const GlobalContext = createContext(initialState);

// In order for other components to have access to global state, we need a provider //
// Since we are wrapping all the components in app.js, they are considered children so need destruct //
// Create Provider Component //
export const GlobalProvider = ({ children }) =>{
    // whenever we want to call a reducer action, we need a dispatch
    const [state, dispatch] = useReducer(AppReducer, initialState);

        //Actions that make calls to reducer//
        function deleteTransaction(id){
            dispatch({
                type: 'DELETE_TRANSACTION',
                // payload is any data that we want to send to it //
                payload: id
            });
        }

        function addTransaction(transaction){
            dispatch({
                type: 'ADD_TRANSACTION',
                // payload is any data that we want to send to it //
                payload: transaction
            });
        }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions, 
        deleteTransaction, 
        addTransaction
    }}>
        { children }
    </GlobalContext.Provider>);
} 
