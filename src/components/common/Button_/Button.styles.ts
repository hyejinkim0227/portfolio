import Text from '@/components/common/Text';
import { StyledButtonProps } from '@/types/styled';
import styled, { css } from 'styled-components';
// 버튼 타입별 스타일 정의
const types = {
  default: css`
    background-color: var(--color-white);
    color: var(--color-gray-800);
    border: 1px solid var(--color-gray-800);

    &:hover:not(:disabled) {
      background-color: var(--color-gray-100);
    }

    &:disabled {
      color: var(--color-gray-400);
      border-color: var(--color-gray-400);
    }
  `,

  primary: css`
    background-color: var(--color-main-600);
    color: var(--color-white);
    border: 1px solid var(--color-main-600);

    &:hover:not(:disabled) {
      background-color: var(--color-main-700);
    }

    &:disabled {
      background-color: var(--color-main-300);
      border-color: var(--color-main-300);
    }
  `,
  primaryLine: css`
    background-color: var(--color-white);
    color: var(--color-main-600);
    border: 1px solid var(--color-main-600);
    &:hover:not(:disabled) {
      border-color: var(--color-main-700);
      background-color: var(--color-white);
      color: var(--color-main-700);
    }

    &:disabled {
      color: var(--color-main-300);
      border-color: var(--color-main-300);
    }
  `,

  secondary: css`
    background-color: var(--color-gray-800);
    color: var(--color-white);
    border: 1px solid var(--color-gray-800);

    &:hover:not(:disabled) {
      background-color: var(--color-gray-900);
    }

    &:disabled {
      background-color: var(--color-gray-400);
      border-color: var(--color-gray-400);
    }
  `,
};

// 버튼 크기별 스타일 정의 (색상 관련 스타일 제거)
const sizes = {
  chip: css`
    height: 25px;
    font-size: 0.75rem;
    min-width: 45px;
    padding: 0 12px;
    font-weight: 600;
    line-height: 24px;
    border-radius: 25px;
  `,

  xsmall: css`
    height: 25px;
    font-size: 0.75rem;
    min-width: 45px;
    padding: 0 12px;
    font-weight: 600;
    line-height: 24px;
    border-radius: 4px;
  `,

  small: css`
    height: 30px;
    font-size: 0.875rem;
    min-width: 44px;
    padding: 5px 10px;
    font-weight: bold;
  `,

  medium: css`
    height: 36px;
    font-size: 0.875rem;
    min-width: 65px;
    padding: 5px 10px;
    font-weight: bold;
  `,

  large: css`
    height: 52px;
    font-size: 1.125rem;
    min-width: 65px;
    padding: 5px 10px;
    font-weight: bold;
  `,
};

// xsmall 사이즈 특수 스타일
const xsmallButtonStyle = ({
  $size,
  $type,
}: {
  $size?: string;
  $type?: string;
}) => {
  if ($size !== 'xsmall') {
    return '';
  }

  // xsmall 기본 스타일
  if ($type === 'default') {
    return css`
      color: var(--color-gray-600);
      border: 1px solid var(--color-gray-100);
      background-color: var(--color-gray-100);

      &:hover:not(:disabled) {
        color: var(--color-primary);
        border-color: var(--color-primary);
        background-color: var(--color-primary-light);
      }

    `;
  }

  // xsmall + primary 스타일
  if ($type === 'primary') {
    return css`
      color: var(--color-primary);
      border-color: var(--color-primary);
      background-color: var(--color-primary-light);
      &:hover:not(:disabled) {
        color: var(--color-primary);
        border-color: var(--color-primary);
        background-color: var(--color-primary-light);
      }

      &:disabled {
        opacity: 0.36;
        color: var(--color-primary);
        border-color: var(--color-primary);
        background-color: var(--color-primary-light);
      }

    `;
  }
};

// 버튼 기본 스타일
export const StyledButton = styled.button<StyledButtonProps>`
  // 공통 스타일
  display: inline-block;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  line-height: 1;
  transition: background-color 0.2s ease-in-out;
  flex: none;
  align-items: center;
  justify-content: center;
  gap: 2px;

  // 가변 속성
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  // 타입과 크기에 따른 스타일 적용
  ${({ $type }) => ($type && types[$type] ? types[$type] : types.default)}
  ${({ $size }) => ($size && sizes[$size] ? sizes[$size] : sizes.medium)}

  // xsmall 사이즈 특수 스타일 (타입이 default일 때만 적용)
  ${xsmallButtonStyle}

  // 비활성화 공통 스타일
  &:disabled {
    cursor: not-allowed;
  }
  &:active:not(:disabled) {
    transform: scale(0.995);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonText = styled(Text)`
  font-size: inherit;
  word-break: keep-all;
`;
