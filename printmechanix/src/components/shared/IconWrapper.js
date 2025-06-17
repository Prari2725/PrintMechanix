import React from 'react';

const IconWrapper = ({ icon: Icon, className, 'aria-hidden': ariaHidden }) => {
  return <Icon className={className} aria-hidden={ariaHidden} />;
};

export default IconWrapper; 