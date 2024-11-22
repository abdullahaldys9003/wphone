import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CardHeaderSection from '../../CardHeaderSection/CardHeaderSection';

import ImageStepper from '../ImageStepper/ImageStepper';
import ImageDisplay from '../../ImageDisplay/ImageDisplay';

import ImageDescription from '../../ImageDescription/ImageDescription.jsx';



export default function ProgramSetup({ images, d, name }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  if (!images || images.length === 0) {
    return <Typography>No images available.</Typography>;
  }

  return (
    <Card elevation={10}>
      <CardHeaderSection title={name} />
      <CardContent>
        <Grid container spacing={0} sx={{ mt: 2, maxHeight: 500, overflow: 'auto' }}>
          <Grid item xs={12} sm={5} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <ImageStepper
                images={images}
                activeStep={activeStep}
                handleNext={handleNext}
                handleBack={handleBack}
              />
              <Box boxShadow={2} p={1} width={200} display="flex" justifyContent="center">
                {images[activeStep]?.id === 'termux' ? d : <ImageDisplay image={images[activeStep]} />}
              </Box>
            </div>
          </Grid>

          <Grid item xs={12} sm={5} md={6}>
            <ImageDescription description={images[activeStep].description} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}