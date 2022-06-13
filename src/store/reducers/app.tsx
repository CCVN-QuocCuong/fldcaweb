const initialState = {
    isLoading: false
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return { isLoading: action.payload };
        default:
            return state;
    }
}

export default app