import React, { useState } from 'react';

const Favorite = ({ contact }) => {
  const [favorite, setFavorite] = useState(contact?.favorite || false);

  const handleToggle = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {favorite ? '★' : '☆'} Toggle Favorite
      </button>
    </div>
  );
};

export default Favorite;
