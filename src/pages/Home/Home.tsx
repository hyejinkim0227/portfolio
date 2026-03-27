import styled from 'styled-components';
import { Profile } from '@/components/Profile/Profile';
import { ProjectList } from '@/components/Project/ProjectList';
import { Contact } from '@/components/Contact/Contact';
import Button from '@/components/common/Button_';
import { notify } from '@/components/Toast';

const HomeContainer = styled.main`
  min-height: 100vh;
  padding-top: 60px; /* 헤더 높이만큼 여백 */
`;

const Section = styled.section`
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
`;

export const Home = () => {
  return (
    <HomeContainer>
      <Section id="profile">
        <Profile />
        
        <div style={{ padding: '0 2rem 2rem', display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <Button type="primary" onClick={() => notify('success', '성공적으로 처리되었습니다!')}>
            성공 토스트
          </Button>
          <Button type="default" onClick={() => notify('error', '오류가 발생했습니다.')}>
            에러 토스트
          </Button>
        </div>
      </Section>

      <Section id="projects" style={{ display: 'block' }}>
        <ProjectList />
      </Section>

      <Contact />
    </HomeContainer>
  );
};
