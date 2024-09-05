import { auth } from '../../../../lib/config/firebaseConfig'
import { endpoints } from '../../endpoints/endpoints'
import api from "../../api"


const { get, post } = endpoints.general.instagram

const handleError = (error, message) => {
	console.error(message, error)
}

export const Instagram = {
	getInstagramProfile: async () => {
		try {
			const user = auth.currentUser;
			const token = await user.getIdToken();
			return api.get(get.instagramProfile, { headers: { 'Authorization': `Bearer ${token}` } }).then((response) => {
				return response
			})
		} catch (error) {
			handleError(error, 'Registration failed');
		}
	}
};

