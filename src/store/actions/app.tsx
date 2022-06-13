export const setLoading = (isLoading) => ({
    type: 'SET_LOADING',
    payload: isLoading,
});

export const setStatus = (type, status) => ({
    type : type,
    payload: status
})
