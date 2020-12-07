import { connect } from 'react-redux'
import { toggleBackDrop } from '../../store/actions/actions';
import classes from './Menu.module.css'

const Menu = (props) => (
    <img
        src="/menu.svg"
        id="menu"
        className={`${props.isBackDrop ? `${classes.MenuBackDrop} animated` : classes.Menu} animated`}
        onClick={(event) => {
            let slide = document.querySelector('#slide');
            if (slide) {
                slide.classList.add('fadeOutLeft');
                event.target.classList.add('rotateOut');
            } else {
                props.toggleBackDrop()
            }
        }}
        onAnimationEnd={(event) => {
            if (event.target.classList.contains("rotateOut")) {
                props.toggleBackDrop()
            }
            if (event.target.classList.contains("rotateIn")) {
                event.target.classList.remove('rotateIn')
            }
        }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);