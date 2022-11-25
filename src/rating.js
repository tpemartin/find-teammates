import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function VacancyStatus({currentMembers, vacancies}) {
    var total = currentMembers + vacancies

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">
      <PersonOutlinedIcon fontSize='small'/> means vacancies
      </Typography>
      <StyledRating
        name="customized-color"
        defaultValue={currentMembers} max={total}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={1}
        icon={<PersonRoundedIcon fontSize="inherit" />}
        emptyIcon={<PersonOutlinedIcon fontSize="inherit"/>}
        readOnly
      />
     
    </Box>
  );
}