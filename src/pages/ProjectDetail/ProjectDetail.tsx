import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@/components/common/Button_';
import Text from '@/components/common/Text';
import { projectsData } from '@/data/projects';
import { useEffect } from 'react';
import IconArrow from '@/components/icons/arrows';

const DetailContainer = styled.div`
  padding: 100px 2rem 4rem;
  max-width: 800px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  margin-bottom: 2rem;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  flex-wrap: wrap;
  gap: 1rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--color-gray-100);
  border-radius: 8px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const InfoLabel = styled.span`
  font-weight: bold;
  color: var(--color-gray-600);
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  padding: 4px 12px;
  background-color: var(--color-primary-light);
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-title);
  border-bottom: 2px solid var(--color-gray-100);
  padding-bottom: 0.5rem;
`;

const FeatureList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    color: var(--color-title);
    line-height: 1.6;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const LinkGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <DetailContainer>
        <Text type="title" align="center">프로젝트를 찾을 수 없습니다.</Text>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button type="primary" onClick={() => navigate('/')}>메인으로 돌아가기</Button>
        </div>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <HeaderSection>
        <Button 
          type="default" 
          // label="목록으로"
         // size="small" 
          onClick={() => navigate(-1)}
        >
          <IconArrow type="prev" width="24px" height="24px" /> 

        </Button>
        
        <TitleRow>
          <Text type="title" tag="h1">{project.title}</Text>
          <LinkGroup>
            {project.link && (
              <Button type="primaryLine" size="small" onClick={() => window.open(project.link, '_blank')}>
                웹사이트 방문
              </Button>
            )}
            {project.github && (
              <Button type="secondary" size="small" onClick={() => window.open(project.github, '_blank')}>
                GitHub 보기
              </Button>
            )}
          </LinkGroup>
        </TitleRow>

        <InfoGrid>
          <InfoLabel>작업 기간</InfoLabel>
          <Text>{project.period}</Text>
          
          <InfoLabel>담당 역할</InfoLabel>
          <Text>{project.role}</Text>
          
          <InfoLabel>사용 기술</InfoLabel>
          <SkillTags>
            {project.skills.map(skill => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </SkillTags>
        </InfoGrid>
      </HeaderSection>

      <Section>
        <SectionTitle>프로젝트 소개</SectionTitle>
        <Text type="normal" styled={{ lineHeight: '1.8' }}>
          {project.description}
        </Text>
      </Section>

      <Section>
        <SectionTitle>주요 기능 및 성과</SectionTitle>
        <FeatureList>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </FeatureList>
      </Section>

      <Section>
        <SectionTitle>상세 이미지</SectionTitle>
        <ImageGallery>
          {project.detailImages.map((img, index) => (
            <ProjectImage key={index} src={img} alt={`${project.title} 상세 이미지 ${index + 1}`} loading="lazy" />
          ))}
        </ImageGallery>
      </Section>
    </DetailContainer>
  );
};
