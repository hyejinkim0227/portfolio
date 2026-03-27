import styled from 'styled-components';

export interface ButtonProps {
  /** 버튼의 텍스트 */
  label: string;
  /** 버튼의 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 버튼의 주요 색상 사용 여부 */
  primary?: boolean;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
}

const StyledButton = styled.button<Omit<ButtonProps, 'label'>>`
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  
  /* Size styles */
  ${({ size }) => {
    switch (size) {
      case 'small':
        return 'padding: 8px 16px; font-size: 14px;';
      case 'large':
        return 'padding: 16px 32px; font-size: 18px;';
      case 'medium':
      default:
        return 'padding: 12px 24px; font-size: 16px;';
    }
  }}

  /* Color styles */
  ${({ primary, theme }) =>
    primary
      ? `
      background-color: ${theme.colors?.primary || '#0070f3'};
      color: white;
      &:hover {
        opacity: 0.9;
      }
    `
      : `
      background-color: transparent;
      color: ${theme.colors?.text || '#333'};
      border: 1px solid ${theme.colors?.text || '#333'};
      &:hover {
        background-color: ${theme.colors?.lightGray || '#f5f5f5'};
      }
    `}
`;

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type="button" primary={primary} size={size} {...props}>
      {label}
    </StyledButton>
  );
};
