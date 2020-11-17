import React, { Component } from 'react'
import Head from 'next/head'
import BackDrop from '../../UI/BackDrop/BackDrop'
import NavBar from '../../UI/NavBar/NavBar'
import { connect } from 'react-redux';
import { toggleBackDrop, setCurrentUrl } from '../../store/actions/actions'
import SocialMediaIcons from '../../UI/SocialMediaIcons/SocialMediaIcons'
import classes from './Layout.module.css'
import Link from 'next/link';
import FloatingButton from '../../UI/FloatingButton/FloatingButton';

class Layout extends Component {
    componentDidMount() {

        window.addEventListener('resize', () => {
            // if the width > 768px
            if (window.innerWidth > 767) {
                // if the back-drop is on
                if (this.props.isBackDrop) {
                    // close the back-drop
                    this.props.toggleBackDrop()
                }
            }
        })

        window.addEventListener('scroll', () => {
            let topButton = document.querySelector('#topButton');
            let topButtonRect = topButton.getBoundingClientRect();

            let footer = document.querySelector('footer');
            let footerRect = footer.getBoundingClientRect();

            if (topButton) {
                if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                    topButton.style.display = "block";
                } else {
                    topButton.style.display = "none";
                }
                if (topButtonRect.top + topButtonRect.height > (footerRect.top - footerRect.height)) {
                    topButton.style.bottom = footerRect.height + 5 + "px";
                }
                else {
                    topButton.style.bottom = "20px"
                }
            }
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Head>
                    <link rel="shortcut icon" href="/favicon.png"></link>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                    />
                    <title>Tombul Goril</title>
                </Head>
                <FloatingButton />
                {this.props.isBackDrop ? <BackDrop /> : null}
                <header>
                    <NavBar />
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer className={classes.LayoutFooter}>
                    <p className={classes.LayoutFooterCopy}>
                        &copy; {new Date().getFullYear()} Tombul Goril Ltd. - All rights reserved
                    </p>
                    <SocialMediaIcons />
                    <div className={classes.LayoutFooterTerms}>
                        <div>
                            <Link href="/terms">
                                <a onClick={() => this.props.setCurrentUrl('/terms')}>Terms Of Use</a>
                            </Link>
                        </div>
                        <span>|</span>
                        <div>
                            <Link href="/privacy">
                                <a onClick={() => this.props.setCurrentUrl('/privacy')}>Privacy Policy</a>
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isBackDrop: state.isBackDrop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleBackDrop: () => dispatch(toggleBackDrop()),
        setCurrentUrl: (url) => dispatch(setCurrentUrl(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);