import API from '../api';

// Register
export const register = async (data) => {
    try {
        const res = await API.post('/register', data);
        console.log(res);

        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};

// Login
export const login = async (data) => {
    try {
        const res = await API.post('/login', data);
        // If using token-based auth, save token here
        // localStorage.setItem('token', res.data.token);
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};

// Logout
export const logout = async () => {
    try {
        const res = await API.post('/logout');
        // localStorage.removeItem('token'); // if token used
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};
