/*
    Reusable const for getting profile name from localStorage
*/

const user = JSON.parse(localStorage.getItem('user'));
const profileName = user && user.name;

export default profileName;
