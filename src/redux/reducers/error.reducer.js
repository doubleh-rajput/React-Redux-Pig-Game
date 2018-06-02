import { SHOW_ERROR, DISMISS_ERROR } from '../actions';

export const DEFAULT_ERROR_STATE = {
    error: false,
}

export default function reducer(state = DEFAULT_ERROR_STATE, action) {

    switch (action.type) {
        case SHOW_ERROR:
            return { ...state, error : true };

        case DISMISS_ERROR:
            return { ...state, error : false };

        default:
            return state;
    }
}