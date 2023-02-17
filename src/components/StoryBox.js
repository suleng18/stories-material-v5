import { Box } from '@mui/system';
import React, { useState } from 'react';
import StoryItem from './StoryItem';
import { Button, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { sizeOneItem } from 'data/DataStories';
import ButtonArrow from './ButtonArrow';
import CardMedia from '@mui/material/CardMedia';

const StoryBox = ({ dataStories, setStorySelected }) => {
  const [translateX, setTranslateX] = useState(0);

  const handleTranslateLeft = () => {
    const halfListData = dataStories.length - dataStories.length / 2;
    if (translateX < halfListData * sizeOneItem * -1) return;
    setTranslateX((x) => x - sizeOneItem);
  };

  const handleTranslateRight = () => {
    setTranslateX((x) => x + sizeOneItem);
  };

  return (
    <Box sx={{ maxWidth: 700, overflow: 'hidden', margin: '0 auto', position: 'relative' }}>
      {translateX < 0 && (
        <ButtonArrow
          onClick={() => handleTranslateRight()}
          startIcon={<ChevronLeftIcon></ChevronLeftIcon>}
          position="left"
        ></ButtonArrow>
      )}

      <Box
        className="story-box"
        sx={{
          transform: `translateX(${translateX}px)`,
          width: 1280,
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          overflowX: 'hidden',
          transitionDuration: '0.5s',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 130,
            height: 200,
            borderRadius: '20px',
            position: 'relative',
            cursor: 'pointer',
            overflow: 'hidden',
          }}
        >
          <Box>
            <img
              src="https://source.unsplash.com/random"
              alt="avatar"
              style={{ height: '150px', width: '100%', objectFit: 'cover' }}
            />
          </Box>
          <Box sx={{ backgroundColor: '#242526', height: '100%', position: 'relative' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 35,
                height: 35,
                backgroundColor: '#2e89ff',
                borderRadius: '100px',
                border: '3px solid white',
                color: 'white',
                position: 'absolute',
                left: '50%',
                top: '-50%',
                transform: 'translate(-50%, 30%)',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            </Box>
            <Typography
              variant="span"
              sx={{
                fontSize: '14px',
                color: 'white',
                position: 'absolute',
                fontWeight: '500',
                bottom: 6,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              Tạo tin
            </Typography>
          </Box>
        </Box>
        {dataStories.length > 0 &&
          dataStories.map((item, index) => (
            <div key={index} onClick={() => setStorySelected(item)}>
              <StoryItem item={item}></StoryItem>
            </div>
          ))}
      </Box>

      <ButtonArrow
        position="right"
        onClick={() => handleTranslateLeft()}
        startIcon={<ChevronRightIcon></ChevronRightIcon>}
      ></ButtonArrow>
    </Box>
  );
};

export default StoryBox;
