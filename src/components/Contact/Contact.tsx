import styled from 'styled-components';
import { FiMail, FiGithub, FiMessageCircle } from 'react-icons/fi';
import Text from '@/components/common/Text';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background-color: var(--color-gray-100);
  text-align: center;
  border-top: 1px solid var(--color-border-table);
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-title);
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--color-gray-600);
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--color-background);
  border-radius: 12px;
  border: 1px solid var(--color-border-table);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    border-color: var(--color-primary);
    
    svg {
      color: var(--color-primary);
    }
  }

  &:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-gray-600);
  transition: color 0.2s ease;
`;

const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border-table);
  color: var(--color-gray-600);
  font-size: 0.9rem;
`;

export const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Contact Me</SectionTitle>
        <Description>
          새로운 도전을 즐기며, 함께 성장할 수 있는 기회를 기다리고 있습니다.<br />
          웹 퍼블리싱 및 프론트엔드 개발 관련 제안이나 궁금한 점이 있으시다면 언제든 연락해 주세요.
        </Description>

        <ContactGrid>
          <ContactCard href="mailto:your.email@example.com" aria-label="이메일 보내기">
            <IconWrapper>
              <FiMail aria-hidden="true" />
            </IconWrapper>
            <Text type="subTitle" weight="bold" styled={{ marginBottom: '0.5rem' }}>Email</Text>
            <Text color="var(--color-gray-600)">이메일 보내기</Text>
          </ContactCard>

          <ContactCard href="https://open.kakao.com/o/sVhivuni" target="_blank" rel="noopener noreferrer" aria-label="카카오톡 오픈채팅">
            <IconWrapper>
              <FiMessageCircle aria-hidden="true" />
            </IconWrapper>
            <Text type="subTitle" weight="bold" styled={{ marginBottom: '0.5rem' }}>Open Chat</Text>
            <Text color="var(--color-gray-600)">카카오톡 1:1 대화</Text>
          </ContactCard>

          <ContactCard href="https://github.com/hyejinkim0227" target="_blank" rel="noopener noreferrer" aria-label="GitHub 프로필 보기">
            <IconWrapper>
              <FiGithub aria-hidden="true" />
            </IconWrapper>
            <Text type="subTitle" weight="bold" styled={{ marginBottom: '0.5rem' }}>GitHub</Text>
            <Text color="var(--color-gray-600)">@hyejinkim0227</Text>
          </ContactCard>
        </ContactGrid>

        <Footer>
          <p>© {new Date().getFullYear()} Kim Hyejin. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            Built with React, TypeScript & Styled-Components
          </p>
        </Footer>
      </Container>
    </ContactSection>
  );
};
