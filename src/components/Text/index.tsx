/**
 * 재사용 가능한 텍스트 컴포넌트
 *
 * @param {string} [color="inherit"] - 텍스트 색상 (기본값: 상속, 직접 색상값 입력 가능)
 * @param {('normal'|'title'|'subTitle'|'small')} [type="normal"] - 텍스트 유형 (기본: 일반 텍스트)
 * @param {('span'|'div'|'p'|'h1'|'h2'|'h3')} [tag="span"] - 렌더링할 HTML 태그 (기본: span)
 * @param {('normal'|'medium'|'semibold'|'bold')} [weight="normal"] - 텍스트 굵기 (기본: 보통)
 * @param {('left'|'center'|'right'|'justify'|'inherit')} [align="inherit"] - 텍스트 정렬
 * @param {boolean|number} [ellipsis=false] - 텍스트 말줄임 처리 (false 또는 number 줄 수 지정)
 * @param {boolean} [bullet=false] - 불릿 표시 여부
 * @param {React.ReactNode} [before] - 텍스트 앞에 추가될 요소
 * @param {React.ReactNode} [after] - 텍스트 뒤에 추가될 요소
 * @param {('normal'|'nowrap'|'pre'|'pre-line'|'pre-wrap')} [whiteSpace] - 공백 및 줄바꿈 처리 방식
 */
import { StyledText } from './Text.styles';
import { useAuthority } from '@/hooks/useAuthority';
import { TextProps } from '@/types/components';

const Text: React.FC<TextProps> = ({
  color,
  type = 'normal',
  tag = 'span',
  weight,
  align = 'inherit',
  ellipsis = false,
  bullet = false,
  before,
  after,
  children,
  styled,
  whiteSpace,
  auth,
  fallback = null,
  ...props
}) => {
  const { can } = useAuthority(auth);
  if (auth && !can) return fallback;

  return (
    <StyledText
      as={tag}
      $type={type}
      $color={color}
      $ellipsis={ellipsis}
      $weight={weight}
      $align={align}
      $bullet={bullet}
      $styled={styled}
      $whiteSpace={whiteSpace}
      {...props}
    >
      {before && before}
      {children}
      {after && after}
    </StyledText>
  );
};

export default Text;
