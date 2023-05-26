/*
    Reusable const for getting Venue Manager bloean value from localStorage
*/

const user = JSON.parse(localStorage.getItem('user'));
const venueManagerStatus = user && user.venueManager;

export default venueManagerStatus;
