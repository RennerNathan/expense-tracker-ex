// Reducer (Redux) is how we specify the application state changes in response to certain actions to context, or store //

// this is kind of like id; we'll have delete transaction, add transaction and default //
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                // transactions were set //
                loading: false,
                // initially empty, but want to fit it with the payload //
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                // Filter through transactions in the state, which are from DB, and match _id to payload
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload) 
            }
        case 'ADD_TRANSACTION':
            return {
                ...state, 
                // Return the transactions that are already there in addition to the new one which is in the payload //
                // ...state.transactions (spread operator = ...)takes all the values from the array //
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                // Can now access this within components if you want to create an alert //
                error: action.payload
            }
        default:
            return state;
    }   
}