import Head from 'next/head'
import NavBar from '../../UI/NavBar/NavBar'

const Layout = (props) => {

    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="/favicon.png"></link>
                <title>Tombul Goril</title>
            </Head>
            <header>
                <NavBar />
            </header>
            <main>
                {props.children}
            </main>
            <footer></footer>
        </div>
    );
}

export default Layout;