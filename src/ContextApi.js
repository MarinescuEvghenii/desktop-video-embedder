import React, {Component} from 'react';

const Context = React.createContext('asdd');

export class Provider extends Component {
    get actions() {
        return {
           setVideoUrl : this.setVideoUrl
        }
    };

    constructor(props) {
        super(props);
        this.state = {}

        this.setVideoUrl = this.setVideoUrl.bind(this);
    }

    setVideoUrl(videoUrl) {
        console.log(videoUrl);
        this.setState({videoUrl});
    }

    render() {
        
        return (
            <Context.Provider value={{state : this.state, actions: this.actions}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;