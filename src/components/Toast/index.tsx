import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';

import IconToast from '@/components/icons/toast';
import { useAuthority } from '@/hooks/useAuthority';
import { AuthOptionalProps } from '@/types/components';

import 'react-toastify/dist/ReactToastify.css';
import './Toast.styles.css';
const option = {
  position: 'top-right',
  autoClose: 1500,
  hideProgressBar: true,
  closeOnClick: true,
  closeButton: false,
  pauseOnHover: true,
  draggable: true,
};

export const notify = (type, message) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        ...option,
        icon: <IconToast type='success' />,
      });
      break;
    case 'error':
      toast.error(message, {
        ...option,
        icon: <IconToast type='error' />,
      });
      break;
    case 'warning':
      toast.warn(message, {
        ...option,
        icon: <IconToast type='warning' />,
      });
      break;
    default:
      break;
  }
};

export default function Toast({ auth, fallback = null }: AuthOptionalProps) {
  const { can } = useAuthority(auth);
  if (auth && !can) return fallback;
  return <StyledToastContainer {...option} />;
}

export const StyledToastContainer = styled(ToastContainer)``;
