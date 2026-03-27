import TypeInput from '@/components/common/TypeInput';
import { useAuthority } from '@/hooks/useAuthority';

/**
 * Textarea 컴포넌트
 *
 * TypeInput을 베이스로 하여 multiline 및 maxRows 속성을 추가한 컴포넌트입니다.
 *
 * @param {number} [rows=4] - 최대 행 수 (기본값: 4)
 * @param {number} [maxLength=500] - 최대 입력 길이 (기본값: 500)
 * @param {string} [placeholder] - 플레이스홀더 텍스트
 * 그 외의 props는 TypeInput과 동일하게 사용됩니다.
 */
const Textarea = ({
  rows = 4,
  maxLength = 500,
  value = '',
  placeholder = '',
  auth,
  fallback = null,
  ...props
}: {
  rows?: number;
  maxLength?: number;
  value?: string;
  placeholder?: string;
  auth?: any;
  fallback?: React.ReactNode;
  [key: string]: any;
}) => {
  const { can } = useAuthority(auth);
  if (auth && !can) return fallback;

  const safeValue = value ?? ''; // value가 null/undefined면 '' 로 대체

  const { type, endAddon, onKeyDownEnter, ...textareaProps } = props;

  return (
    <TypeInput
      multiline
      maxRows={rows}
      minRows={rows}
      maxLength={maxLength}
      value={safeValue}
      placeholder={placeholder}
      {...textareaProps}
    />
  );
};

export default Textarea;
