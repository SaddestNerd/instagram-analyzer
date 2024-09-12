import { auth } from './../../../../lib/config/firebaseConfig'
import {
	signOut,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { endpoints } from './../../endpoints/endpoints'
import api from "../../api"


const { post } = endpoints.general.auth

const handleError = (error, message) => {
	console.error(message, error)
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
	},
	getUserInfo: async () => {
		try {
		  const user = auth.currentUser
		  const decodedToken = await auth.currentUser.getIdTokenResult()
	  
		  console.log('Claims:', decodedToken.claims)
	  
		  return user
		} catch (error) {
		  handleError(error, 'Failed to retrieve user info')
		  return null
		}
	  }
};
