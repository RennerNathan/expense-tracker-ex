// this is where we are going to create our context //
// if we had multiple resources, like a larger application, you might have a shopContext, or profileState //

import React, { createContext , useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State //
// Any Global State would go in this //
const initialState = {
    transactions: [],
// Add state because dealing with backend //
    error: null,
    loading: true 
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

        async function getTransactions(){
            try {
                const res = await axios.get("/api/v1/transactions");

        //Dispatch to reducer; changing state; starts off as empty array, we make the request and then send response down through the state
                dispatch({
                    type: "GET_TRANSACTIONS",
                    payload: res.data.data
                });
            } catch (error) {
                dispatch({
                    type: "TRANSACTION_ERROR",
                    payload: error.response.data.error
                });
            }
        }

        async function deleteTransaction(id){
            try {
                //make call to DB
                await axios.delete(`/api/v1/transactions/${id}`);
                
                dispatch({
                    type: 'DELETE_TRANSACTION',
                    // payload is any data that we want to send to it //
                    payload: id
                });
            } catch (error) {
                dispatch({
                    type: "TRANSACTION_ERROR",
                    payload: error.response.data.error
                });
            }          
        }

        async function addTransaction(transaction){
            //need content type since we are actually sending data
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            try {
                const res = await axios.post(`/api/v1/transactions`, transaction, config);

                dispatch({
                type: 'ADD_TRANSACTION',
                // payload is any data that we want to send to it //
                payload: res.data.data
            });
            } catch (error) {
                dispatch({
                    type: "TRANSACTION_ERROR",
                    payload: error.response.data.error
                });
            }
        }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions, 
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction, 
        addTransaction
    }}>
        { children }
    </GlobalContext.Provider>);
} 
