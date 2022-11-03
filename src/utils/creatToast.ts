import { toast } from 'react-toastify';

export const creatToast = (type: 'error' | 'success', message: string) => {
  switch (type) {
    case 'error':
      return toast.error(message);
    case 'success':
      return toast.success(message);
    default:
      return;
  }
};
