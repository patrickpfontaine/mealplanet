import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { Platform } from 'react-native';
import storage from './utils/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcBAqOolb5gpJ86X74PaSZnxBCIhSb05U",
  authDomain: "mealplanet-8a0d6.firebaseapp.com",
  projectId: "mealplanet-8a0d6",
  storageBucket: "mealplanet-8a0d6.firebasestorage.app",
  messagingSenderId: "692591968034",
  appId: "1:692591968034:web:b2b6c80a31cd71dbe4af7b",
  measurementId: "G-B427CKVXRG"
};

// Initialize Firebase app
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Auth
let auth: Auth = getAuth(app);

if (Platform.OS === 'web') {
  setPersistence(auth, browserLocalPersistence);
} else {
  // For React Native, we'll handle persistence using our custom storage
  auth.useDeviceLanguage();
  auth.settings.appVerificationDisabledForTesting = __DEV__;
}

// Function to persist auth state
export const persistAuthState = async (user: any) => {
  if (user) {
    await storage.setItem('authUser', JSON.stringify(user));
  } else {
    await storage.removeItem('authUser');
  }
};

// Function to retrieve persisted auth state
export const getPersistedAuthState = async () => {
  const authUser = await storage.getItem('authUser');
  return authUser ? JSON.parse(authUser) : null;
};

export { auth };

