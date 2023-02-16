import { createContext, useState } from 'react';

const ShowGalleryContext = createContext();

const ShowGalleryProvider = ({ children }) => {
  const [showGallery, setShowGallery] = useState(false);

  const handleShowGallery = () => {
    setShowGallery(!showGallery);
  };

  return (
    <ShowGalleryContext.Provider value={{ showGallery, handleShowGallery }}>
      {children}
    </ShowGalleryContext.Provider>
  );
};

export { ShowGalleryContext, ShowGalleryProvider };
