import Card from '../../UI/Card/Card'
import classes from './Cards.module.css'

const cards = [
    {
      img: "/clients.svg",
      text: "We have served many clients around the world.\
      And now it's your turn, are you ready to be served?"
    },
    {
      img: "/consultation.svg",
      text: ["If you do not know what you want, \
      do not hesitate and ",<a href="/contact">contact us</a>,". \
      We will provide you a free consultation."]
    },
    {
      img: "/shipping.svg",
      text: "Do not worry, wherever you are in the world, we will deliver your order to you."
    },
    {
      img: "/24-hours-support.svg",
      text: ["We are here for you 24/7.\
      Whenever you need us, do not hesitate and ",,<a href="/contact">contact us</a>]
    }
  ];

const Cards = () => (
    <div className={classes.Cards}>
        {cards.map((card, index) => <Card img={card.img} text={card.text} key={index} />)}
    </div>
)

export default Cards;