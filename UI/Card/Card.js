import classes from './Card.module.css';

const Card = (props) => (
    <div className={classes.Card} key={props.divKey}>
        <img src={props.img} key={props.imgKey}/>
        <p key={props.paragraphKey}>{props.text}</p>
    </div>
)

export default Card;