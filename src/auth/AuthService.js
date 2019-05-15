
class AuthService {
    static storeSession(user, token) {
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', user.id);
        localStorage.setItem('user_name', user.name);
        localStorage.setItem('user_email', user.email);
        localStorage.setItem('user_picture', user.picture);
        localStorage.setItem('user_created_at', user.created_at);
        localStorage.setItem('user_updated_at', user.updated_at);
    }

    static isSessionActive() {
        return !!localStorage.getItem('token');
    }

    static currentSessionToken() {
        return localStorage.getItem('token');
    }

    static currentUser() {
        return {
            id: localStorage.getItem('user_id') * 1,
            name: localStorage.getItem('user_name'),
            email: localStorage.getItem('user_email'),
            picture: localStorage.getItem('user_picture'),
            created_at: localStorage.getItem('user_created_at'),
            updated_at: localStorage.getItem('user_updated_at')
        }
    }

    static clearSession() {
        localStorage.clear();
    }
}

export default AuthService
