import { connect } from 'react-redux';
import { setCurrentUrl, toggleBackDrop } from '../../../../store/actions/actions';
import Link from 'next/link';
import classes from './NavBarItem.module.css';

const NavBarItem = (props) => (
    <li className={classes.NavBarItem}>
        <Link href={props.to}>
            <a
                onClick={() => {
                    props.setCurrentUrl(props.to)
                    if(props.isBackDrop)
                        props.toggleBackDrop()
                }}
                alt={props.text}
                key={props.elementKey}
                className={`${classes.NavBarItemLink} ${props.url == props.to ? classes.NavBarItemLinkActive : ''}`}>
                {props.text}
            </a>
        </Link>
    </li>
)

const mapStateToProps = state => {
    return {
        url: state.url,
        isBackDrop: state.isBackDrop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUrl: (url) => dispatch(setCurrentUrl(url)),
        toggleBackDrop: () => dispatch(toggleBackDrop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarItem)