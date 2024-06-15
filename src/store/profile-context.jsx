import { createContext } from 'solid-js';

import { PROFILE } from '../data';

export const ProfileContext = createContext({
	name: '',
	location: '',
	job: '',
	image: '',
	socialLinks: [],
});

export default function ProfileContextProvider(props) {
	return (
		<ProfileContext.Provider value={PROFILE}>
			{props.children}
		</ProfileContext.Provider>
	);
}
