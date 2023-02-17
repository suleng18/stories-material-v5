import { Box, Typography } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';
import AvatarStory from './AvatarStory';
import { ShowGalleryContext } from './context/ShowGalleryContext';

const StoryItem = ({ item }) => {
  const { showGallery, handleShowGallery } = useContext(ShowGalleryContext);

  const handleClickItem = () => {
    handleShowGallery();
  };

  return (
    <Box
      onClick={handleClickItem}
      sx={{
        display: 'block',
        width: 130,
        height: 200,
        borderRadius: '20px',
        position: 'relative',
        cursor: 'pointer',
      }}
      key={item.name}
    >
      <AvatarStory avatar={item.avatar}></AvatarStory>
      <img
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '16px',
        }}
        src={item.image}
        alt={item.time}
      />
      <Typography
        variant="span"
        sx={{
          position: 'absolute',
          bottom: 6,
          left: 10,
          color: 'white',
          fontSize: '14px',
          fontWeight: 600,
        }}
      >
        {item.name}
      </Typography>
    </Box>
  );
};

export default StoryItem;
