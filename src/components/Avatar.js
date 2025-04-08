import React from 'react';

const Avatar = ({ avatarUrl }) => {
  return (
    <div className="p-4 flex flex-col items-center">
      <img src={avatarUrl} alt="Avatar" className="w-48 h-48 rounded-full shadow-md" />
    </div>
  );
};

export default Avatar;

