import Image from 'next/image'
import { Links } from './Data'
import styles from './NavBar.module.scss'
import Link from 'next/link'

export const NavBar = () => {
	return (
		<>
			<div className={styles.NavBar}>
				<div className={styles.Content}>
					{
						Links.map((link, index) =>
						<Link href={link.href} key={index} className={styles.Link}>
							<Image src={link.icon} alt='icon' width={35} height={35} />
							<p className={styles.LinkText}>{link.text}</p>
						</Link>)
					}
				</div>
			</div>
		</>
	)
}