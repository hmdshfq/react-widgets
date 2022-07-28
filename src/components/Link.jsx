import React from 'react';

function Link({ href, className, children }) {
  const onClick = event => {
    // For enabling ctrl + click (opening in new tab)
    if (event.metaKey || event.ctrlKey) {
      return 
    }
    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  };
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export default Link;
