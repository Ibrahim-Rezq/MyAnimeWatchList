import * as t from '../actions/types'

const accountReducer = (
    state = { user: 'gest', isSignedIn: false },
    { type, payload }
) => {
    switch (type) {
        case t.SIGN_IN:
            return { ...state, user: payload, isSignedIn: true }
        case t.SIGN_OUT:
            return { ...state, user: payload, isSignedIn: false }

        default:
            return state
    }
}
export default accountReducer
