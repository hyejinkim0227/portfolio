import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects';

const ProjectSection = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-primary);
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CardItem = styled.li`
  display: block;
`;

const Card = styled(Link)`
  display: block;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-title);
`;

const ProjectPeriod = styled.p`
  font-size: 0.875rem;
  color: var(--color-gray-600);
  margin-bottom: 1rem;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  padding: 4px 8px;
  background-color: var(--color-primary-light);
  color: var(--color-primary);
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const ProjectList = () => {
  return (
    <ProjectSection>
      <SectionTitle>Projects</SectionTitle>
      <Grid>
        {projectsData.map((project) => (
          <CardItem key={project.id}>
            <Card 
              to={`/project/${project.id}`}
              aria-label={`${project.title} 프로젝트 상세 보기`}
            >
              <ImageWrapper>
                <img src={project.thumbnail} alt="" aria-hidden="true" loading="lazy" />
              </ImageWrapper>
              <Content>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectPeriod aria-label={`작업 기간: ${project.period}`}>{project.period}</ProjectPeriod>
                <SkillTags aria-label="사용 기술">
                  {project.skills.slice(0, 3).map(skill => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                  {project.skills.length > 3 && <Tag aria-label={`외 ${project.skills.length - 3}개`}>+{project.skills.length - 3}</Tag>}
                </SkillTags>
              </Content>
            </Card>
          </CardItem>
        ))}
      </Grid>
    </ProjectSection>
  );
};
