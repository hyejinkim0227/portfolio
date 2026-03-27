import React from 'react';

export interface IconArrowProps extends React.SVGProps<SVGSVGElement> {
  type: 'next' | 'prev' | 'down' | 'up' | 'first' | 'last';
  width?: string | number;
  height?: string | number;
  color?: string;
}

export default function IconArrow({
  type,
  width = '16px',
  height = '16px',
  color = 'currentColor',
  ...props
}: IconArrowProps) {
  const validTypes = ['next', 'prev', 'down', 'up', 'first', 'last'];
  switch (type) {
    case 'next':
      return (
        <svg aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width={width}
          height={height}
          viewBox='0 0 16 16'
          {...props}
        >
          <g id='icon_right_bk16' transform='translate(109 6214) rotate(-90)'>
            <rect
              id='사각형_25'
              data-name='사각형 25'
              width='16'
              height='16'
              transform='translate(6198 -109)'
              fill='none'
            />
            <path
              id='_972e2925b761691aa5f75a242b4605b8'
              data-name='972e2925b761691aa5f75a242b4605b8'
              d='M4.165,5.665a.563.563,0,0,1,.8,0L8.5,9.207l3.542-3.542a.563.563,0,1,1,.8.8L8.9,10.4a.563.563,0,0,1-.8,0l-3.94-3.94A.563.563,0,0,1,4.165,5.665Z'
              transform='translate(6197.498 -109.033)'
              fill={color}
            />
          </g>
        </svg>
      );
    case 'prev':
      return (
        <svg aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width={width}
          height={height}
          viewBox='0 0 16 16'
          {...props}
        >
          <g id='icon_left_bk16' transform='translate(0 16) rotate(-90)'>
            <rect
              id='사각형_25'
              data-name='사각형 25'
              width='16'
              height='16'
              fill='none'
            />
            <path
              id='_972e2925b761691aa5f75a242b4605b8'
              data-name='972e2925b761691aa5f75a242b4605b8'
              d='M.165,4.9a.563.563,0,0,0,.8,0L4.5,1.359,8.044,4.9a.563.563,0,1,0,.8-.8L4.9.165a.563.563,0,0,0-.8,0L.165,4.1A.563.563,0,0,0,.165,4.9Z'
              transform='translate(3.498 5.467)'
              fill={color}
            />
          </g>
        </svg>
      );
    case 'down':
      return (
        <svg aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width={width}
          height={height}
          viewBox='0 0 16 16'
          {...props}
        >
          <rect
            id='사각형_25'
            data-name='사각형 25'
            width='16'
            height='16'
            fill='none'
          />
          <path
            id='_972e2925b761691aa5f75a242b4605b8'
            data-name='972e2925b761691aa5f75a242b4605b8'
            d='M4.165,5.665a.563.563,0,0,1,.8,0L8.5,9.207l3.542-3.542a.563.563,0,1,1,.8.8L8.9,10.4a.563.563,0,0,1-.8,0l-3.94-3.94A.563.563,0,0,1,4.165,5.665Z'
            transform='translate(-0.674 -0.033)'
            fill={color}
          />
        </svg>
      );
    case 'up':
      return (
        <svg aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width={width}
          height={height}
          viewBox='0 0 16 16'
          {...props}
        >
          <rect
            id='사각형_25'
            data-name='사각형 25'
            width='16'
            height='16'
            fill='none'
          />
          <path
            id='_972e2925b761691aa5f75a242b4605b8'
            data-name='972e2925b761691aa5f75a242b4605b8'
            d='M4.165,10.4a.563.563,0,0,0,.8,0L8.5,6.859,12.044,10.4a.563.563,0,1,0,.8-.8L8.9,5.665a.563.563,0,0,0-.8,0L4.165,9.6A.563.563,0,0,0,4.165,10.4Z'
            transform='translate(-0.674 -0.033)'
            fill={color}
          />
        </svg>
      );
    case 'first':
      return (
        <svg aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width={width}
          height={height}
          viewBox='0 0 16 16'
          {...props}
        >
          <g id='icon_che_left_bk16' transform='translate(0 16) rotate(-90)'>
            <rect
              id='사각형_25'
              data-name='사각형 25'
              width='16'
              height='16'
              fill='none'
            />
            <path
              id='_972e2925b761691aa5f75a242b4605b8'
              data-name='972e2925b761691aa5f75a242b4605b8'
              d='M.165,4.9a.563.563,0,0,0,.8,0L4.5,1.359,8.044,4.9a.563.563,0,1,0,.8-.8L4.9.165a.563.563,0,0,0-.8,0L.165,4.1A.563.563,0,0,0,.165,4.9Z'
              transform='translate(3.326 7.467)'
              fill={color}
            />
            <path
              id='_972e2925b761691aa5f75a242b4605b8-2'
              data-name='972e2925b761691aa5f75a242b4605b8'
              d='M.165,4.9a.563.563,0,0,0,.8,0L4.5,1.359,8.044,4.9a.563.563,0,1,0,.8-.8L4.9.165a.563.563,0,0,0-.8,0L.165,4.1A.563.563,0,0,0,.165,4.9Z'
              transform='translate(3.326 3.467)'
              fill={color}
            />
          </g>
        </svg>
      );
    case 'last':
      return (
        <svg aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width={width}
          height={height}
          viewBox='0 0 16 16'
          {...props}
        >
          <g id='icon_che_rignt_bk16' transform='translate(0 16) rotate(-90)'>
            <rect
              id='사각형_25'
              data-name='사각형 25'
              width='16'
              height='16'
              fill='none'
            />
            <path
              id='_972e2925b761691aa5f75a242b4605b8'
              data-name='972e2925b761691aa5f75a242b4605b8'
              d='M.165.165a.563.563,0,0,1,.8,0L4.5,3.707,8.044.165a.563.563,0,1,1,.8.8L4.9,4.9a.563.563,0,0,1-.8,0L.165.961A.563.563,0,0,1,.165.165Z'
              transform='translate(3.326 3.467)'
              fill={color}
            />
            <path
              id='_972e2925b761691aa5f75a242b4605b8-2'
              data-name='972e2925b761691aa5f75a242b4605b8'
              d='M.165.165a.563.563,0,0,1,.8,0L4.5,3.707,8.044.165a.563.563,0,1,1,.8.8L4.9,4.9a.563.563,0,0,1-.8,0L.165.961A.563.563,0,0,1,.165.165Z'
              transform='translate(3.326 7.468)'
              fill={color}
            />
          </g>
        </svg>
      );
    default:
      // 유효한 타입 목록 표시
      console.error(
        `IconArrow: 일치하는 type 없음 (${type}), 유효한 타입: ${validTypes.join(', ')}`,
      );
      return <span style={{ color: 'red' }}>?</span>;
  }
}
