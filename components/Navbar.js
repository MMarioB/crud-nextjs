import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">Ver tus notas </a>
        </Link>
        <Link href="/new">
            <a className="create">Crear una nota</a>
        </Link>
    </nav>
)

export default Navbar;