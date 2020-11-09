import React from 'react'
import Head from 'next/head'
import BackDrop from '../../UI/BackDrop/BackDrop'
import NavBar from '../../UI/NavBar/NavBar'
import { connect } from 'react-redux';
import {toggleBackDrop} from '../../store/actions/actions'

class Layout extends React.Component {
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
    }

    render() {
        return (
            <div>
                <Head>
                    <link rel="shortcut icon" href="/favicon.png"></link>
                    <title>Tombul Goril</title>
                </Head>
                {this.props.isBackDrop ? <BackDrop /> : null}
                <header>
                    <NavBar />
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer></footer>
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
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);