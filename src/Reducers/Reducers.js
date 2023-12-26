
const initialState = {
    rockets:[],
}

export const Reducer = (state = initialState, action) => {
if (action.type === 'FETCH_DATA_SUCCESS1' ) {
        console.log(action.payload);
            return {
                ...state,
            rockets : action.payload,
    }
}
else{
        return state
}
}