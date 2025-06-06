import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Check if the URL is external
    if (href.startsWith('http') || href.startsWith('https')) {
      window.location.href = href;
      return;
    }
    
    // Handle internal navigation
    window.history.pushState({}, '', href);
    // Dispatch a popstate event to trigger the route change
    window.dispatchEvent(new PopStateEvent('popstate'));
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};