const isAuthenticated = (): boolean => {
    return !!(localStorage.getItem('token') || sessionStorage.getItem('token'));
};

const getToken = (): string | null => {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
};

const logout = (): void => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
};

export { isAuthenticated, getToken, logout };