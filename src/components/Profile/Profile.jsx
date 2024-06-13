import { useContext, For } from 'solid-js';

import { ProfileContext } from '../../store/profile-context.jsx';
import styles from './Profile.module.css';

export default function Profile() {
	const { image, name, location, job, socialLinks } =
		useContext(ProfileContext);

	return (
		<div className={styles.profile}>
			<img
				src={image}
				className={styles.image}
				width={80}
				height={80}
				alt={name}
			/>
			<div className={styles['title-box']}>
				<h2 className={styles.title}>{name}</h2>
				<p className={styles.location}>{location}</p>
			</div>
			<p>&Prime;{job}&Prime;</p>
			<ul className={styles['social-links']}>
				<For each={socialLinks}>
					{(link) => (
						<li>
							<a
								href={link.url}
								className='btn btn--primary btn--full'
								rel='noopener'
								target='_blank'
							>
								{link.name}
							</a>
						</li>
					)}
				</For>
			</ul>
		</div>
	);
}
