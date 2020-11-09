import {connect} from 'react-redux'
import {toggleBackDrop} from '../../store/actions/actions';
import classes from './Menu.module.css'

const Menu = (props) => (
    <img src="/menu.svg" className={`${classes.Menu} ${props.isBackDrop?classes.MenuBackDrop:''}`} onClick={() => props.toggleBackDrop()} />
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