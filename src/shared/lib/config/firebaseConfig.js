import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCGGIkxzZndG2RrrjaNbGVodOzDrLxkTzs',
	authDomain: 'analyser-eee3c.firebaseapp.com',
	projectId: 'analyser-eee3c',
	storageBucket: 'analyser-eee3c.appspot.com',
	messagingSenderId: '72925713720',
	appId: '1:72925713720:web:bbe0d1c597c0f8ef4f1dcd',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
