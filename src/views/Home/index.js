import HomeView from './Home';
import {connect} from 'react-redux';
import {setVideoUrl} from '../../store/video/actions';

const mapStateToProps = (state) => ({
    video : state.video
})

const mapDispatchToProps = (dispatch) => ({
    setVideoUrl: (url) => dispatch(setVideoUrl(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
