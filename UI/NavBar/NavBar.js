import NavBarItems from './NavBarItems/NavBarItems';
import classes from './NavBar.module.css';
import Logo from '../Logo/Logo';
const NavBar = () => (
    <nav className={classes.NavBar}>
        <Logo />
        <NavBarItems />
    </nav>
)


export default NavBar;