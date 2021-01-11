import ScrollAnimation from 'react-animate-on-scroll';
import Card from '../../UI/Card/Card';
import classes from './WhereToUse.module.css'

const uses = [
    {
        img: "/Tattoo_Ink.jpg",
        text: "You can use the bottle to fill Inks for Tattoos, Printers and Shoe Leather Paint",
        animateIn: "fadeInLeft",
        delay: 500
    },
    {
        img: "/Sanitizer.JPG",
        text: "You can use the bottle to fill sterilizers and alcoholic materials that are used for cleaning.",
        animateIn: "fadeInRight",
        delay: 500
    },
    {
        img: "/Adh.jpeg",
        text: "You can use the bottle to fill in adhesive materials.",
        animateIn: "fadeInLeft",
        delay: 500
    },
    {
        img: "/WD-40.jpg",
        text: "You can use the bottle to fill greasy and oily materials such as machine oils.",
        animateIn: "fadeInRight",
        delay: 500
    }
];

const WhereToUse = () => (
    <div className={classes.WhereToUse}>
        <h1></h1>
        {
            uses.map((use, index) => <ScrollAnimation animateIn={use.animateIn} delay={use.delay} key={index} animateOnce={true} animatePreScroll={false}>
                <Card img={use.img}
                    text={use.text}
                    key={index}
                    divKey={index.toString()}
                    paragraphKey={use.text}
                    imgKey={use.img}
                    styleClass={classes.WhereToUseCard} />
            </ScrollAnimation>
            )
        }
    </div>
);

export default WhereToUse;