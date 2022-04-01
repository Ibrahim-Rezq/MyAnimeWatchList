import Link from 'next/link'

const NavLink = (props) => {
    const { name, path, nameClass, protectedLink, protection } = props
    if (!protectedLink)
        return (
            <>
                <li className={nameClass}>
                    <Link href={path}>
                        <a>{name}</a>
                    </Link>
                </li>
            </>
        )
    else
        return (
            <>
                <NavLinkProtected {...props} />
            </>
        )
}
const NavLinkProtected = (props) => {
    const { name, path, nameClass, protection } = props
    return (
        <>
            {protection || (
                <li className={nameClass}>
                    <Link href={protection ? '/' : path}>
                        <a>{name}</a>
                    </Link>
                </li>
            )}
        </>
    )
}

export default NavLink
