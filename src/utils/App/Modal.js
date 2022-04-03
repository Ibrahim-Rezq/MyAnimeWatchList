import { useEffect } from 'react';

const Modal = ({ className, modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 1500);
  });
  return (
    <article className={className}>
      <p>{modalContent}</p>
    </article>
  );
};

export default Modal;
