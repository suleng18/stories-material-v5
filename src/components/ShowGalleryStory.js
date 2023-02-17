import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { ShowGalleryContext } from './context/ShowGalleryContext';

const ShowGalleryStory = ({ storySelected }) => {
  console.log('🚀 ~ storySelected', storySelected);
  const { showGallery, handleShowGallery } = useContext(ShowGalleryContext);

  return (
    <Box
      sx={{
        display: 'block',
        zIndex: 20,
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        backgroundColor: '#1a1a1a',
        transition: 'all 0.8s linear',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Typography
          variant="p"
          sx={{ fontSize: 25, color: 'white', fontStyle: 'italic', padding: 2 }}
        >
          Instagram
        </Typography>
        <Button
          onClick={handleShowGallery}
          variant="text"
          sx={{ backgroundColor: 'none', borderRadius: 100, color: 'white' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '0 60px',
          alignItems: 'center',
          flexDirection: 'row',
          flexShrink: '0',
          width: '100%',
          height: '620px',
          position: 'relative',
        }}
      >
        <img src={storySelected?.image} alt="" style={{ width: '280px', height: '100%' }} />
        <img src={storySelected?.image} alt="" style={{ width: '280px', height: '100%' }} />
        <img src={storySelected?.image} alt="" style={{ width: '280px', height: '100%' }} />
        <img src={storySelected?.image} alt="" style={{ width: '280px', height: '100%' }} />
        <img src={storySelected?.image} alt="" style={{ width: '280px', height: '100%' }} />
      </Box>
    </Box>
  );
};

export default ShowGalleryStory;
