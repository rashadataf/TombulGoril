import NavBarItems from './NavBarItems/NavBarItems';
import classes from './NavBar.module.css';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
const NavBar = () => (
    <nav className={classes.NavBar}>
        <Logo />
        <NavBarItems />
        <Menu />
    </nav>
)


export default NavBar;