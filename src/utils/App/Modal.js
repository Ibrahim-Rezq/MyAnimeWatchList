import { useEffect } from 'react'

const Modal = ({ modalContent, closeModal }) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal()
        }, 150000)
    })
    return (
        <section className=' fixed top-0 left-0 right-0'>
            <p>{modalContent}</p>
        </section>
    )
}

export default Modal
