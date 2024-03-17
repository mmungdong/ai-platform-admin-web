// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const HomePage = () => (
  <MainCard title="HOME">
    <Typography variant="body2">
      Hi, this is a sample page. You can use it to build your own pages.
    </Typography>
  </MainCard>
);

export default HomePage;
