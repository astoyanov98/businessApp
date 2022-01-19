export const updatePick = (key, value) => {
    return async (dispatch) => {
        try {
            dispatch({
                type:'UPDATE',
                key,
                value
            })
        } catch (error) {
            console.log(error)
        }
    }
}