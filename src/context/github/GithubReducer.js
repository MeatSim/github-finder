const githubReducer = (state, action) => {
    switch(action.type) {
        case 'CLEAR_RESULTS':
            return {
                ...state,
                users: []
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default githubReducer