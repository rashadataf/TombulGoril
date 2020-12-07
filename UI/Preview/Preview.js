
import { connect } from 'react-redux';
import { togglePreview, setPreviewImage } from '../../store/actions/actions'
import classes from './Preview.module.css';

const Preview = (props) => (
    <div 
    id="preview"
    className={`${classes.Preview} animated bounceInUp`}
    // onLoad={() => {
    //     document.querySelector('#preview').classList.add('fadeInDown');
    // }}
    >
        <span
            className={classes.PreviewClose}
            onClick={() => {
                props.setPreviewImage('');
                props.togglePreview();
            }}
        >
            X
        </span>
        <img src={props.img} />
    </div>
);

const mapStateToProps = state => {
    return {
        img: state.img
    }
}

const mapDispatchToProps = dispatch => {
    return {
        togglePreview: () => dispatch(togglePreview()),
        setPreviewImage: (img) => dispatch(setPreviewImage(img))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Preview);