import React from 'react';
import ReactDOM from 'react-dom';

import styles from './App.scss';

const App = () => {
    return <div className={styles['app']}>It works!</div>
}

ReactDOM.render(<App />, document.getElementById('root'));
