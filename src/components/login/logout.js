import { auth } from '../../config/firebase_config';

const handleLogout = async (navigateCallback) => {
    try {
        await auth.signOut();
        console.log('Logged out successfully');
        navigateCallback();
    } catch (error) {
        console.error('Error logging out:', error);
    }
};

export { handleLogout };
