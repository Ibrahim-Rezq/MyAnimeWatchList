import Link from 'next/link'

const NavLink = (props) => {
    const { name, path, nameClass, protectedLink, protection, children } = props
    if (!protectedLink)
        return (
            <>
                <li className={nameClass}>
                    <Link href={path}>
                        <a>
                            {children} {name}
                        </a>
                    </Link>
                </li>
            </>
        )
    else
        return (
            <>
                {protection || (
                    <li className={nameClass}>
                        <Link href={protection ? '/' : path}>
                            <a>
                                {children} {name}
                            </a>
                        </Link>
                    </li>
                )}
            </>
        )
}

export default NavLink
