import { connect } from 'react-redux'
import { toggleBackDrop } from '../../store/actions/actions';
import classes from './Menu.module.css'

const Menu = (props) => (
    <img
        src="/menu.svg"
        id="menu"
        className={`${props.isBackDrop ? `${classes.MenuBackDrop} animate__animated animate__rotateIn` : classes.Menu}`}
        onClick={(event) => {
            let slide = document.querySelector('#slide');
            if (slide) {
                slide.classList.add('animate__fadeOutLeft');
                event.target.classList.add('animate__rotateOut')
            } else {
                if (event.target.classList.contains(classes.Menu)) {
                    props.toggleBackDrop()
                }
                
            }
        }} 
        onAnimationEnd={(event) => {
            if (event.target.classList.contains("animate__rotateOut")) {
                props.toggleBackDrop()
            }
            if (event.target.classList.contains("animate__rotateIn")) {
                event.target.classList.remove('animate__rotateIn')
            }
        }}/>
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