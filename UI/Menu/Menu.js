import {connect} from 'react-redux'
import {toggleBackDrop} from '../../store/actions/actions';
import classes from './Menu.module.css'

const Menu = (props) => (
    <img src="/menu.svg" className={`${props.isBackDrop?classes.MenuBackDrop:classes.Menu}`} onClick={() => props.toggleBackDrop()} />
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

export default connect(mapStateToProps,mapDispatchToProps)(Menu);