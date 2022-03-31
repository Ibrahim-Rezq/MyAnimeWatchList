import * as type from './types';

export const closeModal = () => {
  return {
    type: type.CLOSE_MODAL,
  };
};
export const noValue = () => {
  return {
    type: type.NO_VALUE,
  };
};
export const nonVailedEmail = () => {
  return {
    type: type.NON_VAILED_EMAIL,
  };
};
