import React from 'react';

export const Button = ({
  title,
  handleClick,
}: {
  title: string;
  handleClick: () => void;
}) => {
  return (
    <button className="kintoneplugin-button-normal" onClick={handleClick}>
      {title}
    </button>
  );
};
