import Link from 'next/link';
import {connect} from 'react-redux'
import { setCurrentUrl } from '../../store/actions/actions'
import classes from './Logo.module.css';

const Logo = (props) => <Link href="/"><a onClick={() => props.setCurrentUrl('/')}><img src="/logo.jpg" alt="Tombul Goril Logo" className={classes.Logo} /></a></Link>

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUrl: (url) => dispatch(setCurrentUrl(url))
    }
}

export default connect(null,mapDispatchToProps)(Logo);