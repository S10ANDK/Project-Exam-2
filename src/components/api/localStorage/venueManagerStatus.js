const user = JSON.parse(localStorage.getItem('user'));
const venueManagerStatus = user && user.venueManager;

export default venueManagerStatus;
