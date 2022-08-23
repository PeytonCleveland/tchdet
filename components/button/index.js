import Link from 'next/link';
import PropTypes from 'prop-types';
import { classnames } from 'tailwindcss-classnames';

const Button = ({ href, onClick, bold, children, color, size, variant }) => {
  const button = classnames(
    'px-3.5',
    'py-1.5',
    'flex',
    'items-center',
    'justify-center',
    'tracking-wider',
    'rounded',
    'font-bold'
  );

  const filled = classnames(
    button,
    'hover:bg-gray-800',
    'shadow-md',
    'text-base',
    'active:scale-[0.98]',
    {
      'bg-slate-900': color === 'gray',
      'bg-sky-600': color === 'blue',

      ['bg-white text-slate-900 hover:bg-sky-300']: color === 'white',

      'bg-yellow-600': color === 'yellow',
      'bg-red-600': color === 'red',
      'bg-green-600': color === 'green',
    }
  );

  const text = classnames(button, {
    'text-sm': size === 'small',
    'text-base': size === 'medium',
    ['text-white hover:bg-sky-600/10']: color === 'white',
    ['text-slate-900 hover:text-sky-300']: color === 'gray',
    ['text-sky-300 hover:text-sky-400 hover:bg-sky-600/10']: color === 'blue',
  });

  return (
    // If there is an href, it will be a button-link, otherwise it will be a simple button
    href ? (
      // If this is an internal link, we will use Link component
      href.startsWith('/') ? (
        <Link href={href} passHref>
          <a>
            <button
              className={variant === 'filled' ? filled : text}
              onClick={onClick}
            >
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
      <button
        className={variant === 'filled' ? filled : text}
        onClick={onClick}
      >
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
  color: PropTypes.oneOf(['white', 'gray', 'blue', 'red', 'green', 'yellow']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['filled', 'text']),
};

Button.defaultProps = {
  href: null,
  color: 'white',
  onClick: () => {},
  size: 'medium',
  variant: 'filled',
};
