import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid, Item } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { flexbox } from '@mui/system';
import { WidthFull } from '@mui/icons-material';
import Header from 'components/Header';
import StoryBox from 'components/StoryBox';
import { dataStories } from 'data/DataStories';
import ShowGalleryStory from 'components/ShowGalleryStory';
import { ShowGalleryContext } from 'components/context/ShowGalleryContext';

function App() {
  const { showGallery, handleShowGallery } = useContext(ShowGalleryContext);
  const [storySelected, setStorySelected] = useState();

  return (
    <>
      <Box className="App">
        <Header>Stories</Header>
        <StoryBox setStorySelected={setStorySelected} dataStories={dataStories}></StoryBox>
      </Box>
      {showGallery && <ShowGalleryStory storySelected={storySelected}></ShowGalleryStory>}
    </>
  );
}

export default App;
