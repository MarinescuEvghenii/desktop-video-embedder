import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.scss';
import {HomeView} from './views/';
import {Provider} from './ContextApi';

const App = () => {
    return (
        <Provider>
            <div className={styles['app']}>
                <div className={styles['sidebar']}></div>
                <div className={styles['content']}>
                    <HomeView />
                </div>
            </div>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
