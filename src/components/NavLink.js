import Link from 'next/link'

const NavLink = ({ name, path, nameClass }) => {
    return (
        <>
            <li>
                <Link href={path}>
                    <a
                        className={
                            nameClass === 'active' ? 'contrast' : 'secondary'
                        }
                    >
                        {name}
                    </a>
                </Link>
            </li>
        </>
    )
}

export default NavLink
