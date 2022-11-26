import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from '@mui/material';
import { Stack } from '@mui/system';

export default function PostAd() {
  return (
     <Stack className="postad" direction="row" spacing={1}>
      <Fab color="primary" variant="extended">
        <AddIcon sx={{ mr: 1 }} />
        <Link underline="none" color="white"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfNWRPc4tS6qnJVWjo_knh232EOkoSondfwXupkzCwKzcqv7w/viewform?usp=pp_url&entry.382563112=111-1-R+Final+Project&entry.538860336=2022-12-07">
        Post Ad
        </Link>
      </Fab>
      <Fab color="secondary" variant="extended" >
          <EditIcon sx={{ mr: 1 }} />
          <Link underline="none" color="white"
          href="https://docs.google.com/forms/d/e/1FAIpQLSenfQeBpZ-ugKxJQQAhldd4d1uGtXr_7Lgu1bdO6rYg1wX-4w/viewform">
          Register Team
          </Link>
      </Fab>
     </Stack>
  );
}
