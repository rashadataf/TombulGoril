import { connect } from 'react-redux'
import { toggleBackDrop } from '../../store/actions/actions'
import Menu from '../Menu/Menu';
import NavBarItems from '../NavBar/NavBarItems/NavBarItems';

import classes from './BackDrop.module.css';

const BackDrop = (props) => (
    <div
        className={classes.BackDrop}
        onClick={() => {
            document.querySelector('#slide').classList.add('fadeOutLeft');
            document.querySelector('#menu').classList.add('rotateOut');
        }}
        onLoad={() => {
            document.querySelector('#menu').classList.add('rotateIn');
        }}
        onAnimationEnd={(event) => {
            if (event.target.classList.contains("fadeOutLeft")) {
                props.toggleBackDrop()
            }
        }}>
        <Menu />
        <div
            id="slide"
            className={`${classes.BackDropSlide} animated ${props.isBackDrop ? "fadeInLeft" : ""}`}
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