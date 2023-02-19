import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import ButtonArrow from './ButtonArrow';
import { ShowGalleryContext } from './context/ShowGalleryContext';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ShowGalleryStory = (props) => {
  const { storySelected, setStorySelected } = props;
  const { showGallery, handleShowGallery, dataStories } = useContext(ShowGalleryContext);
  const [transformSmaller, setTransformSmaller] = useState();
  const [transformBigger, setTransformBigger] = useState();

  const indexImageSelected = dataStories.findIndex((item) => item.image === storySelected.image);
  console.log('🚀 ~ indexImageSelected', indexImageSelected);

  const handleClickNextStory = () => {
    setStorySelected(dataStories[indexImageSelected + 1]);
    setTransformSmaller({ transform: 'translateX(-100px) scale(0.5)', transitionDuration: '3s' });
    setTransformBigger({ transform: 'translateX(-100px) scale(1.5)', transitionDuration: '3s' });
  };

  const handleClickPrevStory = () => {
    setStorySelected(dataStories[indexImageSelected - 1]);
  };

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
          width: '100vw',
          height: '520px',
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0 90px',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            sx={{
              width: '220px',
              height: '60%',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            {dataStories?.slice(indexImageSelected - 1, indexImageSelected).map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt=""
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            ))}
          </Box>
          <Box
            sx={{
              width: '420px',
              height: '100%',
              backgroundColor: 'gray',
              borderRadius: '16px',
              position: 'relative',
              // ...transformSmaller,
            }}
          >
            {indexImageSelected !== 0 && (
              <Button
                onClick={handleClickPrevStory}
                startIcon={<ChevronLeftIcon></ChevronLeftIcon>}
                variant="contained"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '-70px',
                  backgroundColor: 'gray',
                  minWidth: 0,
                }}
              ></Button>
            )}
            <img
              src={storySelected.image}
              alt=""
              style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '16px' }}
            />
            {indexImageSelected < dataStories.length - 1 && (
              <Button
                onClick={() => handleClickNextStory()}
                startIcon={<ChevronRightIcon></ChevronRightIcon>}
                variant="contained"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '-70px',
                  backgroundColor: 'gray',
                  minWidth: 0,
                }}
              ></Button>
            )}
          </Box>
          <Box
            sx={{
              width: '220px',
              height: '60%',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            {dataStories?.slice(indexImageSelected + 1).map((item, index) => {
              if (index === 0) {
                return (
                  <img
                    key={index}
                    src={item.image}
                    alt=""
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      // ...transformBigger,
                    }}
                  />
                );
              } else {
                return (
                  <img
                    key={index}
                    src={item.image}
                    alt=""
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                );
              }
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowGalleryStory;
