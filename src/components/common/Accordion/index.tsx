/**
 * 확장 가능한 아코디언 컴포넌트
 *
 * @param {Array} items - 아코디언 항목들의 배열, 각 항목은 {id, title, content} 형태 (여러 항목 모드)
 * @param {ReactNode} before - 아코디언 제목의 앞에 오는 텍스트 및 노드 (여러 항목 모드)
 * @param {string} placeholder - 데이터가 없는 경우 출력되는 텍스트 (여러 항목 모드)
 * @param {ReactNode} title - 단일 섹션의 제목 (단일 섹션 모드)
 * @param {ReactNode} children - 단일 섹션의 내용 (단일 섹션 모드)
 * @param {boolean} defaultExpanded - 초기 펼침 상태 (단일 섹션 모드, 기본값: true)
 *
 * @description
 * - title이 있으면 단일 섹션 모드로 동작
 * - items가 있으면 여러 항목 리스트 모드로 동작
 */

import { useState } from 'react';
import NoContent from '@/components/common/NoContent';
import Text from '@/components/common/Text';
import IconArrow from '@/components/icons/arrows';
import { useAuthority } from '@/hooks/useAuthority';
import { AccordionProps } from '@/types/components';

import {
  AccordionBody,
  AccordionHead,
  AccordionWrap,
  StyledAccordion,
} from './Accordion.styles';

// 아코디언 컴포넌트
export default function Accordion({
  items = [],
  before,
  placeholder = '데이터가 없습니다.',
  title,
  children,
  defaultExpanded = true,
  className,
  style,
  auth,
  fallback = null,
  ...props
}: AccordionProps) {
  const { can } = useAuthority(auth);
  if (auth && !can) return fallback;

  // title이 있으면 단일 섹션 모드
  const isSingleMode = !!title;

  const [expanded, setExpanded] = useState(
    isSingleMode ? defaultExpanded : false,
  );

  // 아코디언 열림/닫힘 처리 (여러 항목 모드)
  const handleChange = (item) => (event, isExpanded) => {
    setExpanded(isExpanded ? item : false);
  };

  // 아코디언 토글 (단일 섹션 모드)
  const handleToggle = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  // 단일 섹션 모드: title prop이 있을 때
  if (isSingleMode) {
    return (
      <StyledAccordion className={className} style={style} {...props}>
        <AccordionWrap
          $variant='single'
          expanded={expanded}
          onChange={handleToggle}
        >
          <AccordionHead
            $variant='single'
            expandIcon={<IconArrow type='down' />}
          >
            {typeof title === 'string' ? (
              <Text type='subTitle'>{title}</Text>
            ) : (
              title
            )}
          </AccordionHead>
          <AccordionBody $variant='single'>{children}</AccordionBody>
        </AccordionWrap>
      </StyledAccordion>
    );
  }

  // 여러 항목 리스트 모드: items prop이 있을 때
  return (
    <StyledAccordion className={className} style={style} {...props}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <AccordionWrap
            key={item.id}
            expanded={expanded === `item${index + 1}`}
            onChange={handleChange(`item${index + 1}`)}
          >
            <AccordionHead expandIcon={<IconArrow type='down' />}>
              {before && <Text style={{ marginRight: '8px' }}>{before}</Text>}
              <Text weight='600'>{item.title}</Text>
            </AccordionHead>
            <AccordionBody>
              <Text style={{ whiteSpace: 'pre-wrap' }}>{item.content}</Text>
            </AccordionBody>
          </AccordionWrap>
        ))
      ) : (
        <NoContent placeholder={placeholder} />
      )}
    </StyledAccordion>
  );
}
