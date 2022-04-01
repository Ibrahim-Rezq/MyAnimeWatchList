import { CLOSE_MODAL, OPEN_MODAL } from '../actions/types'

const modalReducer = (
    state = { isModalOpen: false, modalContent: 'Error No Text' },
    { type, payload }
) => {
    switch (type) {
        case CLOSE_MODAL:
            return { isModalOpen: false, modalContent: payload }
        case OPEN_MODAL:
            return { isModalOpen: true, modalContent: payload }
        default:
            return state
    }
}
export default modalReducer
