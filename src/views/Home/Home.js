import React, {PureComponent} from 'react';
import PropTypes from 'proptypes';
import {Input, Logo} from '../../components/';
import styles from './Home.scss'

class HomeView extends PureComponent {
    constructor(props) {
        super(props);

        this.onInputKeyUp  = this.onInputKeyUp.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputKeyUp(event) {
        const isEnterKeyPressed = event.keyCode === 13;

        if(isEnterKeyPressed) {
            this.props.setVideoUrl(event.target.value);
        }
    }

    onInputChange(event) {
        if(event.target.value.length > 0) {
            console.log(event.target.value);
        }
    }

    render() {
        return (
            <div className={styles['home-view']}>
                <div className={styles['logos']}>
                    <Logo name="youtube-dark" className={styles['logo']} size="small" />
                    <Logo name="vimeo-dark" className={styles['logo']} size="small" />
                    <Logo name="rutube" className={styles['logo']} size="small" />
                </div>
                
                <Input 
                    onKeyUp={this.onInputKeyUp}
                    onChange={this.onInputChange}
                    className={styles['input']}
                    placeholder="Enter video link"
                />
            </div>
        );
    }
}

HomeView.propTypes = {
    setVideoUrl : PropTypes.func.isRequired
}

export default HomeView;