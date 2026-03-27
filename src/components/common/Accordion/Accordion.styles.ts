import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import styled from 'styled-components';

const StyledAccordion = styled.div`
  min-height: 40px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const AccordionWrap = styled(Accordion)`
  &.MuiPaper-root.MuiAccordion-root {
    box-shadow: none;
    border-top: none;
    border-bottom: 1px solid var(--color-border-table);
    background-color: var(--color-white);
    border-radius: 0;
    color: inherit;
  }
  &.MuiPaper-root.MuiAccordion-root:before {
    content: none;
  }
  &.MuiPaper-root.MuiAccordion-root.Mui-expanded {
    margin: 0;
  }
`;

const AccordionHead = styled(AccordionSummary)`
  &.MuiAccordionSummary-root {
    min-height: auto;
    padding: 20px 0;
    margin: auto;
    gap: 18px;
    .MuiAccordionSummary-content {
      align-items: center;
    }
  }
  .MuiAccordionSummary-content {
    margin: 0;
    &.Mui-expanded {
      margin: 0;
    }
  }
`;
const AccordionBody = styled(AccordionDetails)`
  &.MuiAccordionDetails-root {
    padding: 24px;
    border-radius: 10px;
    background-color: var(--color-background);
    margin-bottom: 20px;
  }
`;

export { AccordionBody, AccordionHead, AccordionWrap, StyledAccordion };
