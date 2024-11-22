import FrontendSection from '../../src/features/home/components/frontend/FrontendSection';
 import Box from '@mui/material/Box';


import IntroductionSection from '../features/home/components/Sections/IntroductionSection.tsx';


const HomePage = () => {
  return (
    <Box sx={{ p: 3 }}>
     <IntroductionSection />
     <FrontendSection />
    </Box>
  );
};

export default HomePage;