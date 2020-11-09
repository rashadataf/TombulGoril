import {connect} from 'react-redux'
import {toggleBackDrop} from '../../store/actions/actions'

import classes from './BackDrop.module.css';

const BackDrop = (props) => (
    <div className={classes.BackDrop} onClick={() => props.toggleBackDrop()}>
        <div className={`${classes.BackDropSlide} ${props.isBackDrop?classes.BackDropSlideIn:classes.BackDropSlideOut}`} onClick={(event) => event.stopPropagation()}>
        </div>
    </div>
);

const mapStateToProps = state => {
    return {
        isBackDrop: state.isBackDrop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleBackDrop: () => dispatch(toggleBackDrop()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BackDrop);