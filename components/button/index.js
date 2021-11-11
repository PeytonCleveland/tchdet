import Link from 'next/link';
import PropTypes from 'prop-types';

const Button = ({ href, onClick, children }) => {
  return (
    // If there is an href, it will be a button-link, otherwise it will be a simple button
    href ? (
      // If this is an internal link, we will use Link component
      href.startsWith('/') ? (
        <Link href={href} passHref>
          <a>
            <button className='bg-gray-400 px-4' onClick={onClick}>
              {children}
            </button>
          </a>
        </Link>
      ) : (
        // For now, we will open all external links in a new tab
        <a href={href} target='_blank' rel='noreferrer'>
          <button className='bg-blue-400 px-4' onClick={onClick}>
            {children}
          </button>
        </a>
      )
    ) : (
      <button className='bg-gray-400 px-4' onClick={onClick}>
        {children}
      </button>
    )
  );
};

export default Button;

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};
