import SocialMediaIcon from './SocialMediaIcon/SocialMediaIcon';
import classes from './SocialMediaIcons.module.css'

const socialMediaIcons = [
  {
    to: "https://www.facebook.com/Tombul-Goril-101836561679343/",
    img: "/facebook.svg",
    alt: "Facebook icon"
  },
  {
    to: "https://instagram.com/tombulgoril",
    img: "/instagram.svg",
    alt: "Instagram Icon"
  },
  {
    to: "https://twitter.com/TombulGoril",
    img: "/twitter.svg",
    alt: "Twitter Icon"
  }
];

const SocialMediaIcons = () => {
  return (
    <ul className={classes.SocialMediaIcons}>
      {socialMediaIcons.map((icon,index) => <SocialMediaIcon to={icon.to} img={icon.img} alt={icon.alt} key={index} />)}
    </ul>
  );
};
export default SocialMediaIcons;