import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from '@mui/material';

export default function PostAd() {
  return (

      <Fab variant="extended" className="postad">
        <AddIcon sx={{ mr: 1 }} />
        <Link underline="none"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfNWRPc4tS6qnJVWjo_knh232EOkoSondfwXupkzCwKzcqv7w/viewform?usp=pp_url&entry.382563112=111-1-R+Final+Project&entry.538860336=2022-12-07">
        Post Ad
        </Link>
      </Fab>

  );
}
