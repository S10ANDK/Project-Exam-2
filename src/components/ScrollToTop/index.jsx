import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*
  Function which makes sure that the page starts at the top when going to a different page
*/

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
