import HomeView from './Home';
import {connect} from 'react-redux';
import {setVideoURL} from '../../store/video/actions';

const mapStateToProps = (state) => ({
    video : state.video
})

const mapDispatchToProps = (dispatch) => ({
    setVideoURL: (url) => dispatch(setVideoURL(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
