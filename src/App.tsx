
import React,{useState}from 'react';
import customTheme from './them';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

import SearchIcon from '@mui/icons-material/Search';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

import AppRoutes from './routes/AppRoutes.tsx';

import NAVIGATION  from './navigationConfig.tsx'

import Footer from './Footer';

function Search() {
  return (
    <React.Fragment>
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: 'none', md: 'none' },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: 'block', md: 'inline-block' }, mr: 1 }}
      />
    </React.Fragment>
  );
}




function App() {
  return (
     <AppProvider 
      navigation={NAVIGATION} 
      branding={{
        logo :'',
        title:'',
      }}
      theme={customTheme} 
      >
    <DashboardLayout slots={{ toolbarActions: Search }}>
         <AppRoutes /> 
        </DashboardLayout>
        <Footer />
  </AppProvider>
  );
}

export default App;



