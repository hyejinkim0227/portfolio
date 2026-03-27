import { useAuthority } from '@/hooks/useAuthority';
import { ButtonProps } from '@/types/components';
import { ButtonText, StyledButton } from './Button.styles';

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'medium',
  fullWidth = false,
  before,
  after,
  children,
  onClick,
  auth,
  fallback = null,
  disabled,
  ...props
}) => {
  const { can } = useAuthority(auth);
  if (auth && !can) return fallback;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(e);
  };
  return (
    <StyledButton
      type='button'
      $type={type}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled}
      onClick={(e) => handleClick(e)}
      {...props}
    >
      {before && before}
      <ButtonText>{children}</ButtonText>
      {after && after}
    </StyledButton>
  );
};

export default Button;
