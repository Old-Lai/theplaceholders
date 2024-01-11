
import { useState, useEffect } from 'react';

const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
      if (prefersDarkMode) {    
        setTheme('dark');
        console.log('dark mode')
      } else {
        setTheme('light');
        console.log('light mode')
      }
  
      const listener = e => {
        setTheme(e.matches ? 'dark' : 'light');
      };
  
      window.matchMedia('(prefers-color-scheme: dark)').addListener(listener);
      
      return () => {
        window.matchMedia('(prefers-color-scheme: dark)').removeListener(listener);
      };
    }, []);
  
    return [theme, setTheme];
  };

  export default useDarkMode;
  