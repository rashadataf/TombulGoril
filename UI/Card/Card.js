import classes from './Card.module.css';

const Card = (props) => (
    <div
        className={props.styleClass ? props.styleClass : classes.Card}
        key={props.divKey}
        onClick={props.onClick}
    >
        <img src={props.img} key={props.imgKey}/>
        <p key={props.paragraphKey} >{props.text}</p>
    </div>
)

export default Card;