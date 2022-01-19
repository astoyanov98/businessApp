const initialState = {
    state: '',
    pickedBusiness: ''
}

const pickedBusinessReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE':
            return {...state, [action.key]: action.value}
        default:
            return state
    }
}

export default pickedBusinessReducer