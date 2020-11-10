import {connect} from 'react-redux';
import {setCurrentUrl} from '../../../../store/actions/actions';
import Link from 'next/link';
import classes from './NavBarItem.module.css';

const NavBarItem = (props) => {
    return (
    <li className={classes.NavBarItem}>
        <Link href={props.to}>
            <a onClick={() => props.setCurrentUrl(props.to)} alt={props.text} className={`${classes.NavBarItemLink} ${props.url==props.to?classes.NavBarItemLinkActive:''}`}>{props.text}</a>
        </Link>
    </li>
)}

const mapStateToProps = state => {
    return {
        url: state.url
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUrl: (url) => dispatch(setCurrentUrl(url)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(NavBarItem)