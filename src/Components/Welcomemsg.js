import React, { useState, useEffect } from 'react';

function WelcomeMessage() {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText('Welcome, Dear!');

    const timer = setTimeout(() => {
      setDisplayText(''); 
    }, 6000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      <p>{displayText}</p>
    </div>
  );
}

export default WelcomeMessage;
