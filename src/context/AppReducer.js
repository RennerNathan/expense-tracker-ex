// Reducer (Redux) is how we specify the application state changes in response to certain actions to context, or store //

// this is kind of like id; we'll have delete transaction, add transaction and default //
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload) 
            }
        case 'ADD_TRANSACTION':
            return {
                ...state, 
                // Return the transactions that are already there in addition to the new one which is in the payload //
                // ...state.transactions (spread operator = ...)takes all the values from the array //
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }   
}