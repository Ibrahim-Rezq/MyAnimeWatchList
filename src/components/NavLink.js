import Link from 'next/link'

const NavLink = ({ name, path, nameClass }) => {
    return (
        <>
            <li className={nameClass}>
                <Link href={path}>
                    <a>{name}</a>
                </Link>
            </li>
        </>
    )
}

export default NavLink
