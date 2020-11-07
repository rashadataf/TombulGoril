import NavBarItem from "./NavBarItem/NavBarItem";

const NavBarItems = () => {
    const linksList = [
        {
            to: '/',
            text: 'Home'
        },
        {
            to: '/about',
            text: 'About'
        },
        {
            to: '/products',
            text: 'Products'
        },
        {
            to: '/contact',
            text: 'Contact Us'
        }
    ];
    return (
        <ul>
            {
                linksList.map((link, index) => <NavBarItem to={link.to} text={link.text} key={index} />)
            }
        </ul>
    )
}

export default NavBarItems;