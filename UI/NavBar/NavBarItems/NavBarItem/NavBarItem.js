import Link from 'next/link';
import classes from './NavBarItem.module.css';
const NavBarItem = (props) => (
    <li className={classes.NavBarItem}>
        <Link href={props.to}>
            <a alt={props.text} className={classes.NavBarItemLink}>{props.text}</a>
        </Link>
    </li>
)


export default NavBarItem;