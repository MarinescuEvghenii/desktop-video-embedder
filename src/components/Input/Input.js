import React      from 'react';
import PropTypes  from 'proptypes';
import classNames from 'classnames';
import styles     from './Input.scss';

const Input = ({onChange, onKeyUp, className, placeholder}) => {
    return <input 
                type="text" 
                className={classNames(styles['input'], className)} 
                onChange={onChange} 
                onKeyUp={onKeyUp}
                placeholder={placeholder}
            />
}

Input.propTypes = {
    onChange    : PropTypes.func,
    onKeyUp     : PropTypes.func,
    className   : PropTypes.string,
    placeholder : PropTypes.string
}

export default Input;