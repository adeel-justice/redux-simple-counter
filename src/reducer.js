const initialState = {
    value: 0,
    color: 'black'
}

const reducer = (state = initialState, action) => {
    console.log(action)
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }

    }
    else if (type === "DECREMENT") {
        return {
            value: state.value - 1
        }

    }

    else if (type === "INCREMENT5") {
        return {
            value: state.value + 5
        }

    }

    else if (type === "DECREMENT5") {
        return {
            value: state.value - 5
        }

    }

    else if (type === "COLOR") { 
        return {
            value: state.value,
            color: action.color
        }

    }

    
    return state

}



//Updating reducer.js to include a new if-block for the new