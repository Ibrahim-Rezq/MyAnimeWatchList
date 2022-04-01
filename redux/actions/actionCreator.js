import * as type from './types'

export const closeModal = () => {
    return {
        type: type.CLOSE_MODAL,
    }
}
export const openModal = (msg) => {
    return {
        type: type.OPEN_MODAL,
        payload: msg,
    }
}

export const SignIn = (account) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(account),
            })
            const data = await response.json()
            console.log(data)
            if (data.user) {
                dispatch({
                    type: type.SIGN_IN,
                    payload: await data.user,
                })
                dispatch({
                    type: type.OPEN_MODAL,
                    payload: await data.msg,
                })
            } else
                dispatch({
                    type: type.OPEN_MODAL,
                    payload: await data.msg,
                })
        } catch (e) {}
    }
}
export const signOut = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch('/api/auth/logout')
            const data = await response.json()
            if (data.success) {
                dispatch({
                    type: type.SIGN_OUT,
                    payload: 'guest',
                })
                dispatch({
                    type: type.OPEN_MODAL,
                    payload: await data.msg,
                })
            } else
                dispatch({
                    type: type.OPEN_MODAL,
                    payload: await data.msg,
                })
        } catch (e) {}
    }
}
