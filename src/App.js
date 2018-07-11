import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {HomeView} from './views/';
import store from './store';
import styles from './App.scss';

const App = () => {
    return (
        <Provider store={store}>
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
