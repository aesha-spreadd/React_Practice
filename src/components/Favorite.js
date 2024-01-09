import React, { useState } from 'react';

const Favorite = () => {
  const [favorite, setFavorite] = useState(false);

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
