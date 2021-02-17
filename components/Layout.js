import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Ver tus notas</title>
        </Head>
        <Navbar />
        {children}
    </>
)

export default Layout;