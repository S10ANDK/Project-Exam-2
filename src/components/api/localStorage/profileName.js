const user = JSON.parse(localStorage.getItem('user'));
const profileName = user && user.name;

export default profileName;
