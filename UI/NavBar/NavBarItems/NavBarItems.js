import NavBarItem from "./NavBarItem/NavBarItem";
import {connect} from 'react-redux'
import classes from './NavBarItems.module.css';

const NavBarItems = (props) => {
    const linksList = [
        {
            to: '/',
            text: 'Home'
        },
        {
            to: '/about',
            text: 'About'
        },
        {
            to: '/products',
            text: 'Products'
        },
        {
            to: '/contact',
            text: 'Contact Us'
        }
    ];
    return (
        <ul className={`${props.isBackDrop?classes.NavBarItemsBackDrop:classes.NavBarItems}`}>
            {
                linksList.map((link, index) => <NavBarItem to={link.to} text={link.text} elementKey={index} key={index} />)
            }
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        isBackDrop: state.isBackDrop
    }
}

export default connect(mapStateToProps)(NavBarItems);