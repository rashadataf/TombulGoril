import { connect } from 'react-redux'
import { toggleBackDrop } from '../../store/actions/actions'
import Menu from '../Menu/Menu';
import NavBarItems from '../NavBar/NavBarItems/NavBarItems';

import classes from './BackDrop.module.css';

const BackDrop = (props) => (
    <div
        className={classes.BackDrop}
        onClick={() => {
            document.querySelector('#slide').classList.add('animate__fadeOutLeft');
            document.querySelector('#menu').classList.add('animate__rotateOut');
        }}
        onAnimationEnd={(event) => {
            if (event.target.classList.contains("animate__fadeOutLeft")) {
                props.toggleBackDrop()
            }
        }}>
        <Menu />
        <div
            id="slide"
            className={`${classes.BackDropSlide} animate__animated ${props.isBackDrop ? "animate__fadeInLeft" : ""}`}
            onClick={(event) => event.stopPropagation()}>
            <NavBarItems />
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

export default connect(mapStateToProps, mapDispatchToProps)(BackDrop);