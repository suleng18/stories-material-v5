import { Button, CardMedia, Typography } from '@mui/material';
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

  const [translateX, setTranslateX] = useState(0);

  const indexImageSelected = dataStories.findIndex((item) => item.image === storySelected.image);

  const handleClickNextStory = () => {
    setStorySelected(dataStories[indexImageSelected + 1]);
    setTranslateX((x) => x - 480);
  };

  const handleClickPrevStory = () => {
    if (storySelected.id === 1) return;
    setStorySelected(dataStories[indexImageSelected - 1]);
    setTranslateX((x) => x + 480);
  };

  return (
    <Box
      sx={{
        zIndex: 20,
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        backgroundColor: '#1a1a1a',
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
          width: '100%',
          alignItems: 'center',
          gap: '0 50px',
          transform: `translateX(${translateX}px)`,
          transitionDuration: '1s',
        }}
      >
        {dataStories.map((item, index) => (
          <Box
            className={storySelected.id === item.id ? 'scale-bigger' : 'scale-smaller'}
            sx={{
              display: 'flex',
              flexShrink: 0,
              width: '440px',
              height: '600px',
              borderRadius: '18px',
              overflow: 'hidden',
            }}
          >
            <img
              src={item.image}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: 'fixed',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          gap: '0 550px',
          top: '50%',
        }}
      >
        <Button onClick={handleClickPrevStory} size="small" variant="contained">
          Prev
        </Button>
        <Button onClick={handleClickNextStory} size="small" variant="contained">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ShowGalleryStory;
