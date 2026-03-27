import styled from 'styled-components';
import Accordion from '@/components/common/Accordion';

const ProfileSection = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.lightGray};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 200px;
    height: 200px;
  }
`;

const InfoWrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
`;

const List = styled.ul`
  margin-bottom: 1rem;
  li {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: flex-start;
    line-height: 1.6;
    &::before {
      content: '•';
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`;

const TimelineItem = styled.li`
  display: flex;
  flex-direction: column !important;
  margin-bottom: 1.2rem !important;
  
  &::before {
    display: none !important;
  }
`;

const Period = styled.span`
  font-size: 0.9rem;
  color: var(--color-gray-600);
  margin-bottom: 0.2rem;
  font-weight: 600;
`;

const Content = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Profile = () => {
  return (
    <ProfileSection>
      <ImageWrapper>
        {/* 임시 이미지 */}
        <img src="https://placehold.co/300x300/e2e8f0/64748b?text=Profile" alt="Profile" />
      </ImageWrapper>

      <InfoWrapper>
        <Title>안녕하세요, 웹 퍼블리셔 김혜진입니다.</Title>
        <Description>
          사용자 경험을 최우선으로 생각하며, 웹 표준과 접근성을 준수하는 마크업을 지향합니다.<br />
          React와 Styled-Components를 활용한 컴포넌트 기반 UI 개발에 관심이 많으며, 
          다양한 프로젝트 경험을 통해 안정적이고 효율적인 웹 환경을 구축합니다.
        </Description>

        <Accordion title="⚒️ SKILLS" defaultExpanded={true}>
          <List>
            <li><strong>HTML5 / CSS3 / SCSS / tailwindCSS / Styled-Components / MUI</strong></li>
            <li><strong>jQuery / JavaScript / React / TypeScript / Storybook </strong> </li>
            <li><strong>Gitlab / Github / FTP</strong></li>
            <li><strong>Figma / Photoshop / Adobe XD</strong> </li>
            <li>정보통신접근성(WA) 인증을 받은 웹사이트 구축 경험</li>
            <li>미디어 쿼리를 활용한 반응형 웹, 모바일 웹 구축</li>
            <li>웹 표준을 준수하며, 시멘틱 마크업을 통해 검색엔진 최적화 웹을 구축</li>
            <li>금융권 앱 챗봇, 보이는 ARS 멀티모달 구축 경험</li>
          </List>
        </Accordion>

        <Accordion title="💼 CAREER" defaultExpanded={false}>
          <List style={{ paddingLeft: '1em' }}>
            <TimelineItem>
              <Period>2024.08 ~ 재직중</Period>
              <Content>(주)리스크제로</Content>
            </TimelineItem>
            <TimelineItem>
              <Period>2023.05 ~ 2024.08</Period>
              <Content>(주)넥스링크</Content>
            </TimelineItem>
            <TimelineItem>
              <Period>2021.09 ~ 2022.11</Period>
              <Content>(주)엔티시스</Content>
            </TimelineItem>
            <TimelineItem>
              <Period>2019.01 ~ 2021.05</Period>
              <Content>쇼핑몰 홈페이지 관리 및 운영</Content>
            </TimelineItem>
            <TimelineItem>
              <Period>2017.02 ~ 2018.06</Period>
              <Content>서울특별시 중부기술교육원</Content>
            </TimelineItem>
          </List>
        </Accordion>

        <Accordion title="🎓 EDUCATION" defaultExpanded={false}>
          <List style={{ paddingLeft: '1em' }}>
            <TimelineItem>
              <Period>2023.09 ~ 10</Period>
              <Content>React.js를 활용한 프론트앤드개발 실무</Content>
            </TimelineItem>
            <TimelineItem>
              <Period>2021.06 ~ 08</Period>
              <Content>웹퍼블리셔 & 웹디자인(HTML5, CSS3, 자바스크립트, 제이쿼리) 과정 이수</Content>
            </TimelineItem>
            <TimelineItem>
              <Period>2017.02</Period>
              <Content>수원대학교 중어중문학과 졸업</Content>
            </TimelineItem>
          </List>
        </Accordion>
      </InfoWrapper>
    </ProfileSection>
  );
};
