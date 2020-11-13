import classes from './SocialMediaIcon.module.css';

const SocialMediaIcon = (props) => (
    <li className={classes.SocialMediaIcon}>
        <a href={props.to} target="_blank">
            <img
                src={props.img}
                alt={props.alt?props.alt:"Icon of Social Media"}
            />
        </a>
    </li>
);

export default SocialMediaIcon;