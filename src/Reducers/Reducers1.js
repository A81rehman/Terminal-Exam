
const initialState = {
    missions :[],
}

export const Reducer1 = (state = initialState, action) => {
    if (action.type === 'FETCH_DATA_SUCCESS2' ) {
        console.log(action.payload);
            return {
                ...state,
            missions : action.payload,
    }
}
else{
        return state
}
}