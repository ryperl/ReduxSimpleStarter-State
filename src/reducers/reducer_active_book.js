// State argument is not application state, only the state
// this reducer is responsible for

// A reducer is called anytime an action is dispatched by our app
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}