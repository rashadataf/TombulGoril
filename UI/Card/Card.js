import classes from './Card.module.css';

const Card = (props) => (
    <div className={classes.Card}>
        <img src={props.img} />
        <p>{props.text}</p>
    </div>
)

export default Card;