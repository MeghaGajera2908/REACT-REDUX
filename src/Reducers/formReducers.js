const formReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD": {
            return [...state, action.payload]
        }
            break;
        case "DELETE": {
            return state.filter((item, index) => index !== action.payload);
        }
            break;
        case "EDIT": {
            return state.map((item, index) => {
                if (action.payload.editIndex === index) {
                    return action.payload.record
                }
                else return item
            })
        }
            break;
        default: {
            return state || []
        }

    }
}

export { formReducer };