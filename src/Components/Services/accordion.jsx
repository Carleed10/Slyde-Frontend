import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
  return (
    <div>
      <Accordion
        disableGutters
        sx={{
          boxShadow: 'none',
          borderRadius: '10px',
          padding: '6px 0px',
          fontWeight: '600',
          border: '1px solid rgb(247,247,247)',
          '&:not(:last-child)': { marginBottom: '16px' },
          '&.Mui-expanded': {
            border: 'none',
            backgroundColor: 'white',
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'grey',
                '.Mui-expanded &': {
                  color: 'white',
                },
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            '&.Mui-expanded': {
              backgroundColor: 'rgb(59,130,246)',
              color: 'white',
            },
            '&:focus': { outline: 'none' },
          }}
        >
          Which countries can I apply to?
        </AccordionSummary>
        <AccordionDetails>
        We cover the USA, UK, Canada, Australia, Germany, and more.
        </AccordionDetails>
      </Accordion>
      

      <Accordion
        disableGutters
        sx={{
          boxShadow: 'none',
          borderRadius: '10px',
          padding: '6px 0px',
          fontWeight: '600',
          border: '1px solid rgb(247,247,247)',
          '&:not(:last-child)': { marginBottom: '16px' },
          '&.Mui-expanded': {
            border: 'none',
            backgroundColor: 'white',
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'grey',
                '.Mui-expanded &': {
                  color: 'white',
                },
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            '&.Mui-expanded': {
              backgroundColor: 'rgb(34,197,94)',
              color: 'white',
            },
            '&:focus': { outline: 'none' },
          }}
        >
          Do you help with visas?
        </AccordionSummary>
        <AccordionDetails>
        Yes, we guide you through the entire visa process.
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        sx={{
          boxShadow: 'none',
          borderRadius: '10px',
          padding: '6px 0px',
          fontWeight: '600',
          border: '1px solid rgb(247,247,247)',
          '&:not(:last-child)': { marginBottom: '16px' },
          '&.Mui-expanded': {
            border: 'none',
            backgroundColor: 'white',
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'grey',
                '.Mui-expanded &': {
                  color: 'white',
                },
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            '&.Mui-expanded': {
              backgroundColor: 'rgb(168,85,247)',
              color: 'white',
            },
            '&:focus': { outline: 'none' },
          }}
        >
          Do you assist with application documents? 
        </AccordionSummary>
        <AccordionDetails>
        Yes, we help with SOPs, recommendation letters, and CVs.
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        sx={{
          boxShadow: 'none',
          borderRadius: '10px',
          padding: '6px 0px',
          fontWeight: '600',
          border: '1px solid rgb(247,247,247)',
          '&:not(:last-child)': { marginBottom: '16px' },
          '&.Mui-expanded': {
            border: 'none',
            backgroundColor: 'white',
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'grey',
                '.Mui-expanded &': {
                  color: 'white',
                },
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            '&.Mui-expanded': {
              backgroundColor: 'rgb(239,68,68)',
              color: 'white',
            },
            '&:focus': { outline: 'none' },
          }}
        >
          How much does studying abroad cost?
        </AccordionSummary>
        <AccordionDetails>
        Costs vary by country and university, but we help find budget-friendly options.
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
