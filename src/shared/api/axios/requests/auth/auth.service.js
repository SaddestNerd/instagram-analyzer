import axios from 'axios'
import { auth } from './../../../../lib/config/firebaseConfig'
import {
	signOut,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { REGISTER_URL, BEARER_URL, endpoints } from './../../endpoints/endpoints'
import api from "../../api"


const { get, post } = endpoints.general.auth

const handleError = (error, message) => {
	console.error(message, error)
}

const registerUser = async (email, password) => {
	try {
		const response = await axios.post(REGISTER_URL, { email, password })
		const { status } = response.data
		if (status === 201) {
			await signInWithEmailAndPassword(auth, email, password)
		}
	} catch (error) {
		handleError(error, 'Registration failed')
	}
}

const loginUser = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password)
	} catch (error) {
		handleError(error, 'Login failed')
	}
}

const getUserInfo = async () => {
	try {
		const user = auth.currentUser
		return user
	} catch (error) {
		handleError(error, 'Failed to retrieve user info')
		return null
	}
}

const resetPassword = async () => {
	try {
		const user = auth.currentUser
		await sendPasswordResetEmail(auth, user.email)
		alert('Password reset email sent successfully. Please check your email.')
	} catch (error) {
		handleError(error, 'Password change failed')
	}
}

const bearerRoute = async () => {
	try {
		const user = auth.currentUser
		const idToken = await user.getIdToken()
		const response = await axios.get(BEARER_URL, {
			headers: { Authorization: `Bearer ${idToken}` },
		})
		return response.data
	} catch (error) {
		handleError(error, 'Bearer failed')
	}
}



export const Auth = {
	checkSignUpToken: async ({ token }) => {
		try {
			const response = await api.post(post.checkSignUpToken, {
				token,
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	},

	signUpUser: async ({email, password, token}) => {
		try {
			const response = await api.post(
				post.signUp,
				{ email, password },
				{ headers: { 'Sign-Up-Token': token } }
			);	
			if (response.status === 201) {
				await signInWithEmailAndPassword(auth, email, password);
				return response;
			}
		} catch (error) {
			handleError(error, 'Registration failed');
		}
	},
	
	loginUser: async (email, password) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			return true;
		} catch (error) {
			handleError(error, 'Login failed');
			return false;
		}
	},

	logoutUser: async () => {
		try {
			await signOut(auth);
			return true;
		} catch (error) {
			handleError(error, 'Logout failed')
			return false;
		}
	},

	resetPassword: async (email) => {
		try {
			await sendPasswordResetEmail(auth, email)
			alert('Password reset email sent successfully. Please check your email.')
			return true;
		} catch (error) {
			handleError(error, 'Password change failed')
			return false;
		}
	}
};

export {
	registerUser,
	loginUser,
	getUserInfo,
	resetPassword,
	bearerRoute,
}
