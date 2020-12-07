import NavBarItems from './NavBarItems/NavBarItems';
import { connect } from 'react-redux'
import classes from './NavBar.module.css';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
const NavBar = (props) => (
    <nav className={classes.NavBar}>
        <Logo />
        {props.isBackDrop?null:[<NavBarItems key={1} />,<Menu key={2} />]}
    </nav>
)

const mapStateToProps = state => {
    return {
        isBackDrop: state.isBackDrop
    }
}

export default connect(mapStateToProps)(NavBar);