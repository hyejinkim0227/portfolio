// 텍스트 스타일 정의
import { StyledTextProps } from '@/types/styled';
import styled, { css } from 'styled-components';

// 텍스트 타입별 스타일 정의
const types = {
  normal: css`
    font-size: var(--font-size);
    line-height: 20px;
  `,
  title: css<StyledTextProps>`
    font-size: var(--font-size-title);
    color: ${({ $color = 'var(--color-title)' }) => $color};
    line-height: 30px;
    font-weight: 600;
  `,
  subTitle: css<StyledTextProps>`
    font-size: var(--font-size-subTitle);
    color: ${({ $color = 'var(--color-title)' }) => $color};
    line-height: 24px;
    font-weight: 600;
  `,
  large: css<StyledTextProps>`
    font-size: var(--font-size-large);
    color: ${({ $color = 'var(--color-title)' }) => $color};
    line-height: 26px;
    font-weight: 700;
  `,
  medium: css<StyledTextProps>`
    font-size: var(--font-size-medium);
    color: ${({ $color = 'var(--color-title)' }) => $color};
    line-height: 22px;
    font-weight: 600;
  `,
  semiSmall: css<StyledTextProps>`
    font-size: var(--font-size-semiSmall);
    color: ${({ $color = 'var(--color-title)' }) => $color};
    line-height: 20px;
    font-weight: 600;
  `,
  small: css<StyledTextProps>`
    font-size: var(--font-size-small);
    color: ${({ $color = 'var(--color-title)' }) => $color};
    line-height: 16px;
  `,
  xSmall: css<StyledTextProps>`
    font-size: var(--font-size-xsmall);
    color: ${({ $color = 'var(--color-title)' }) => $color};
    line-height: 12px;
  `,
  message: css<StyledTextProps>`
    display: block;
    font-size: var(--font-size-small);
    margin-top: 4px;
    line-height: 1.2;
    color: ${({ $color = 'var(--color-gray-600)' }) => $color};
  `,
};
// 색상 스타일 정의
const colors = {
  primary: 'var(--color-primary)',
  warning: 'var(--color-warning)',
  error: 'var(--color-error) !important',
  success: 'var(--color-success)',
};

// 굵기 스타일 정의
const weights = {
  normal: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  semibold: css`
    font-weight: 600;
  `,
  bold: css`
    font-weight: 700;
  `,
};

export const StyledText = styled.div<StyledTextProps>`
  word-break: break-all;
  text-decoration: none;

  // 색상 스타일
  ${(props) => {
    const colorValue = props.$color
      ? colors[props.$color] || props.$color
      : 'inherit';
    return `color: ${colorValue};`;
  }}

  // 타입 스타일
  ${(props) => types[props.$type] || types.normal}

  // 굵기 스타일
  ${(props) => weights[props.$weight]}

  // 정렬 스타일
  ${(props) => css`
    text-align: ${props.$align || 'inherit'};
  `}

  // whiteSpace 스타일 (ellipsis가 없을 때만 적용)
  ${(props) =>
    props.$whiteSpace &&
    !props.$ellipsis &&
    css`
      white-space: ${props.$whiteSpace};
    `}

  // 불릿 스타일
  ${(props) =>
    props.$bullet &&
    css`
      display: block;
      padding-left: 0.6em;
      text-indent: -0.6em;
      line-height: 20px;
      &:before {
        content: '· ';
      }
    `}

  ${(props) =>
    props.$ellipsis &&
    css`
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
  ${(props) =>
    props.$ellipsis &&
    props.$ellipsis !== 1 &&
    css`
      white-space: normal;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${props.$ellipsis};
    `}

  // styled prop으로 전달된 커스텀 스타일 적용
  ${(props) => props.$styled && css(props.$styled)}
`;
