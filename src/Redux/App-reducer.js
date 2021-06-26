import { auth } from "./Auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initializationState = {
   initialized: false
}

const appReducer = (state = initializationState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default: 
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(auth());
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        });
    }
}

export default appReducer;