import React from 'react';
import {Consumer} from '../../ContextApi';
import HomeView from './Home';

const HomeViewContainer = (props) => {
    return (
        <Consumer>
            {
                ({actions}) => {
                    return (
                        <HomeView setVideoUrl={actions.setVideoUrl} />
                    )
                }
            }
        </Consumer>
    )
};

export default HomeViewContainer;