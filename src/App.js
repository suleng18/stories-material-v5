import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid, Item } from '@mui/material';
import React from 'react';
import { dataStories } from './data/DataFake';
import { flexbox } from '@mui/system';
import { WidthFull } from '@mui/icons-material';

function App() {
  return (
    <Box className="App">
      <Box mt={5}>
        <Typography variant="h1" gutterBottom align="center">
          Stories
        </Typography>
      </Box>
      <Box sx={{ width: 700, overflow: 'hidden', margin: '0 auto' }}>
        <Box
          sx={{
            width: 900,
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            overflowX: 'hidden',
          }}
        >
          {dataStories.length > 0 &&
            dataStories.map((item) => (
              <Box
                sx={{ width: 120, height: 200, borderRadius: '20px', position: 'relative' }}
                key={item.name}
              >
                <Box
                  sx={{
                    width: '25px',
                    height: '25px',
                    position: 'absolute',
                    zIndex: '10',
                    top: '20px',
                    left: '20px',
                    backgroundColor: '#5260d4',
                    padding: '4px',
                    borderRadius: '100px',
                  }}
                >
                  <img
                    src={item.avatar}
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '100px',
                      display: 'inline-block',
                    }}
                  />
                </Box>
                <img
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                  src={item.image}
                  alt={item.time}
                />
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
