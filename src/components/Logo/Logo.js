import React      from 'react';
import PropTypes  from 'proptypes';
import classNames from 'classnames';
import styles     from './Logo.scss';

const Logo = ({name, className, size}) => {
    return <div 
                className={
                    classNames(
                        styles['logo'], 
                        styles[name], 
                        styles[size], 
                        className
                    )
                }>
            </div>
}

Logo.propTypes = {
    className : PropTypes.string,
    size      : PropTypes.string,
    name      : PropTypes.oneOf(['youtube', 'vimeo', 'youtube-dark', 'vimeo-dark', 'rutube']).isRequired
}

export default Logo;