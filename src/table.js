import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export default function TeamStatus({currentMembers, vacancies}) {
  return (
      <Stack direction='row' spacing={1} className="contact-info">
        <span>Currently</span>
        <span>{currentMembers}</span>
        <span>Look for</span>
        <span>{vacancies} more</span>
      </Stack>
   
  );
}