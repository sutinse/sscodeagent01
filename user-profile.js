// User profile information
const userProfile = {
    name: 'Seppo Sutinen',
    email: 's.sutinen@cgi.com',
    phone: '+358407420894',
    location: 'Helsinki, Finland',
    role: 'IT-Architect',
    bio: 'Passionate with AI and any new technologies'
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = userProfile;
}

// Export for ES6 modules
export default userProfile;

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.userProfile = userProfile;
}